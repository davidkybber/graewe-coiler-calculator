/**
 * Build-time SEO markup generator.
 *
 * Produces the language-specific <head> block, the crawlable <noscript>
 * fallback and the sitemap. Consumed by the `seo` Vite plugin in
 * vite.config.ts — it must therefore stay free of browser/DOM APIs.
 */

import { LANGUAGE_NAMES, getTranslations, Language } from '../i18n'
import {
  OG_IMAGE,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  OG_LOCALES,
  SITE_LASTMOD,
  SITE_NAME,
  SITE_URL,
  SUPPORTED_LANGUAGES,
  canonicalUrl,
  languagePath
} from './siteConfig'

/** Markers let the build replace the root block with a per-language one. */
export const HEAD_START = '<!--seo:head:start-->'
export const HEAD_END = '<!--seo:head:end-->'
export const BODY_START = '<!--seo:body:start-->'
export const BODY_END = '<!--seo:body:end-->'

/** Placeholders present in the source index.html. */
export const HEAD_PLACEHOLDER = '<!--%SEO_HEAD%-->'
export const BODY_PLACEHOLDER = '<!--%SEO_BODY%-->'

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** JSON-LD payload, safe to inline inside a <script> element. */
const jsonLd = (data: unknown): string =>
  JSON.stringify(data, null, 2).replace(/</g, '\\u003c')

const meta = (nameAttr: 'name' | 'property', key: string, content: string): string =>
  `<meta ${nameAttr}="${key}" content="${escapeHtml(content)}" />`

/**
 * The <head> SEO block for one page.
 * `language` undefined = the adaptive root page (x-default).
 */
export const buildSeoHead = (language?: Language): string => {
  // The root page adapts to the visitor, but its static markup has to say
  // something — German is the default language, so it describes the site.
  const contentLanguage = language ?? 'de'
  const seo = getTranslations(contentLanguage).seo
  const url = canonicalUrl(language)

  const alternates = [
    ...SUPPORTED_LANGUAGES.map(
      (lang) =>
        `<link rel="alternate" hreflang="${lang}" href="${SITE_URL}${languagePath(lang)}" />`
    ),
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`
  ]

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}#calculator`,
        name: SITE_NAME,
        alternateName: seo.title,
        url,
        description: seo.description,
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Engineering calculator',
        operatingSystem: 'Any modern web browser',
        browserRequirements: 'Requires JavaScript',
        inLanguage: contentLanguage,
        availableLanguage: SUPPORTED_LANGUAGES,
        image: OG_IMAGE,
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'EUR'
        },
        featureList: [
          seo.faq1Question,
          seo.faq2Question,
          seo.faq3Question
        ],
        publisher: { '@id': `${SITE_URL}/#organization` },
        isPartOf: { '@id': `${SITE_URL}/#website` }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: contentLanguage,
        publisher: { '@id': `${SITE_URL}/#organization` }
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'GRAEWE GmbH Maschinenbau',
        url: 'https://www.graewe.com',
        logo: `${SITE_URL}/graewe-logo.jpg`,
        email: 'info@graewe.com',
        telephone: '+49 7631 7944-0',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Max-Planck-Straße 1-3',
          postalCode: '79395',
          addressLocality: 'Neuenburg am Rhein',
          addressCountry: 'DE'
        },
        sameAs: [
          'https://www.facebook.com/graewegmbh',
          'https://www.youtube.com/@graewegmbh'
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: contentLanguage,
        mainEntity: [
          [seo.faq1Question, seo.faq1Answer],
          [seo.faq2Question, seo.faq2Answer],
          [seo.faq3Question, seo.faq3Answer],
          [seo.faq4Question, seo.faq4Answer]
        ].map(([question, answer]) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer }
        }))
      }
    ]
  }

  const tags = [
    `<title>${escapeHtml(seo.title)}</title>`,
    meta('name', 'description', seo.description),
    meta('name', 'keywords', seo.keywords),
    meta('name', 'author', 'GRAEWE GmbH Maschinenbau'),
    meta(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    ),
    `<link rel="canonical" href="${url}" />`,
    ...alternates,
    meta('property', 'og:type', 'website'),
    meta('property', 'og:site_name', SITE_NAME),
    meta('property', 'og:title', seo.title),
    meta('property', 'og:description', seo.description),
    meta('property', 'og:url', url),
    meta('property', 'og:image', OG_IMAGE),
    meta('property', 'og:image:width', String(OG_IMAGE_WIDTH)),
    meta('property', 'og:image:height', String(OG_IMAGE_HEIGHT)),
    meta('property', 'og:image:alt', SITE_NAME),
    meta('property', 'og:locale', OG_LOCALES[contentLanguage]),
    ...SUPPORTED_LANGUAGES.filter((lang) => lang !== contentLanguage).map((lang) =>
      meta('property', 'og:locale:alternate', OG_LOCALES[lang])
    ),
    meta('name', 'twitter:card', 'summary_large_image'),
    meta('name', 'twitter:title', seo.title),
    meta('name', 'twitter:description', seo.description),
    meta('name', 'twitter:image', OG_IMAGE),
    meta('name', 'twitter:image:alt', SITE_NAME),
    meta('name', 'application-name', SITE_NAME),
    meta('name', 'apple-mobile-web-app-title', 'Coiler Calc'),
    meta('name', 'apple-mobile-web-app-capable', 'yes'),
    meta('name', 'mobile-web-app-capable', 'yes'),
    `<script type="application/ld+json">${jsonLd(structuredData)}</script>`
  ]

  return [HEAD_START, ...tags, HEAD_END].join('\n    ')
}

/**
 * Crawlable content served before/without JavaScript: the page headline, the
 * explanatory copy, the FAQ and real links to every language version.
 */
export const buildSeoBody = (language?: Language): string => {
  const contentLanguage = language ?? 'de'
  const seo = getTranslations(contentLanguage).seo
  const faq = [
    [seo.faq1Question, seo.faq1Answer],
    [seo.faq2Question, seo.faq2Answer],
    [seo.faq3Question, seo.faq3Answer],
    [seo.faq4Question, seo.faq4Answer]
  ]

  const languageLinks = SUPPORTED_LANGUAGES.map(
    (lang) =>
      `<li><a href="${languagePath(lang)}" hreflang="${lang}" lang="${lang}">${LANGUAGE_NAMES[lang]}</a></li>`
  ).join('')

  return [
    BODY_START,
    '<noscript>',
    `<h1>${escapeHtml(seo.heading)}</h1>`,
    `<p>${escapeHtml(seo.noscript)}</p>`,
    `<h2>${escapeHtml(seo.aboutTitle)}</h2>`,
    `<p>${escapeHtml(seo.aboutIntro)}</p>`,
    ...faq.flatMap(([question, answer]) => [
      `<h3>${escapeHtml(question)}</h3>`,
      `<p>${escapeHtml(answer)}</p>`
    ]),
    `<ul>${languageLinks}</ul>`,
    '</noscript>',
    BODY_END
  ].join('\n    ')
}

/** Sitemap with hreflang annotations for the root and every language page. */
export const buildSitemap = (): string => {
  const alternateLinks = [
    ...SUPPORTED_LANGUAGES.map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE_URL}${languagePath(lang)}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`
  ].join('\n')

  const urls = [`${SITE_URL}/`, ...SUPPORTED_LANGUAGES.map((lang) => `${SITE_URL}${languagePath(lang)}`)]
    .map(
      (loc, index) => `  <url>
    <loc>${loc}</loc>
${alternateLinks}
    <lastmod>${SITE_LASTMOD}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${index === 0 ? '1.0' : '0.9'}</priority>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`
}
