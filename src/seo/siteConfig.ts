/**
 * Canonical site configuration shared by the running app and the build-time
 * HTML/sitemap generator (see src/seo/head.ts).
 *
 * URL model:
 *   /            → x-default, adapts to the visitor (browser language / stored
 *                  preference). Self-canonical.
 *   /<lang>/     → one indexable page per language, self-canonical, linked to
 *                  its siblings via hreflang.
 */

import { Language, SUPPORTED_LANGUAGES } from '../i18n'

/** Production origin (custom domain configured for GitHub Pages). */
export const SITE_URL = 'https://graewe-coiler-calculator.de'

export const SITE_NAME = 'GRAEWE Coiler Calculator'

/**
 * Date of the last meaningful content change, used as `lastmod` in the sitemap.
 * Deliberately not the build date — a rebuild is not a content change.
 * Bump it when the calculator or its copy actually changes.
 */
export const SITE_LASTMOD = '2026-07-28'

export const OG_IMAGE = `${SITE_URL}/og-image.png`
export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630

/** Open Graph locale codes per supported language. */
export const OG_LOCALES: Record<Language, string> = {
  de: 'de_DE',
  en: 'en_US',
  fr: 'fr_FR',
  ru: 'ru_RU',
  es: 'es_ES',
  it: 'it_IT',
  zh: 'zh_CN',
  ja: 'ja_JP'
}

/** Path of the indexable page for a language, e.g. 'de' → '/de/'. */
export const languagePath = (language: Language): string => `/${language}/`

/** Absolute canonical URL. Omitting the language yields the x-default root. */
export const canonicalUrl = (language?: Language): string =>
  language ? `${SITE_URL}${languagePath(language)}` : `${SITE_URL}/`

/**
 * Extract the language from a URL path such as '/en/' or '/en'.
 * Returns undefined for the root (x-default) and for unknown prefixes.
 */
export const languageFromPath = (pathname: string): Language | undefined => {
  const segment = pathname.split('/').filter(Boolean)[0]
  return SUPPORTED_LANGUAGES.includes(segment as Language)
    ? (segment as Language)
    : undefined
}

export { SUPPORTED_LANGUAGES }
export type { Language }
