/**
 * Keeps the document metadata in sync with the active language.
 *
 * The static HTML shipped for each URL already carries the correct SEO block
 * (see src/seo/head.ts). This hook covers the cases the static markup cannot:
 * the adaptive root page, client-side language switches and offline
 * navigations served from the cached app shell.
 *
 * The canonical URL is always derived from the *path*, never from the active
 * language, so the root page stays self-canonical (x-default) even when it
 * renders in another language.
 */

import { useEffect } from 'react'
import { getTranslations } from '../i18n'
import { useLanguage } from '../contexts/LanguageContext'
import {
  OG_LOCALES,
  canonicalUrl,
  languageFromPath,
  languagePath
} from '../seo/siteConfig'

const setMeta = (attribute: 'name' | 'property', key: string, content: string): void => {
  const element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (element) {
    element.content = content
  }
}

const setCanonical = (url: string): void => {
  const link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (link) {
    link.href = url
  }
}

/** Refresh the language-dependent fields of the inline JSON-LD graph. */
const updateStructuredData = (language: string, description: string): void => {
  const script = document.head.querySelector<HTMLScriptElement>(
    'script[type="application/ld+json"]'
  )
  if (!script?.textContent) return

  try {
    const data = JSON.parse(script.textContent)
    for (const node of data['@graph'] ?? []) {
      if ('inLanguage' in node) node.inLanguage = language
      if (node['@type'] === 'WebApplication') node.description = description
    }
    script.textContent = JSON.stringify(data)
  } catch {
    // Malformed JSON-LD is not worth breaking the app over.
  }
}

export const useSeoSync = (): void => {
  const { language } = useLanguage()

  useEffect(() => {
    const { seo } = getTranslations(language)

    document.documentElement.lang = language
    document.title = seo.title

    setMeta('name', 'description', seo.description)
    setMeta('name', 'keywords', seo.keywords)
    setMeta('property', 'og:title', seo.title)
    setMeta('property', 'og:description', seo.description)
    setMeta('property', 'og:locale', OG_LOCALES[language])
    setMeta('name', 'twitter:title', seo.title)
    setMeta('name', 'twitter:description', seo.description)

    // Share links (/?lang=…&pd=…) are consumed during the providers' initial
    // render, so the query can be dropped here — normalising the address bar
    // onto the canonical language path at the same time.
    if (window.location.search) {
      window.history.replaceState(null, '', languagePath(language) + window.location.hash)
    }

    const pageUrl = canonicalUrl(languageFromPath(window.location.pathname))
    setCanonical(pageUrl)
    setMeta('property', 'og:url', pageUrl)

    updateStructuredData(language, seo.description)
  }, [language])
}
