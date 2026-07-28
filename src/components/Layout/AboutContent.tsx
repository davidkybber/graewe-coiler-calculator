/**
 * Explanatory copy and FAQ rendered below the calculator.
 *
 * This is the page's indexable text content — it mirrors the FAQPage
 * structured data emitted into the static HTML (src/seo/head.ts), so both stay
 * in sync through the shared `seo.*` translation keys.
 */

import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'

const FAQ_KEYS = ['faq1', 'faq2', 'faq3', 'faq4'] as const

export const AboutContent: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="w-full max-w-4xl mx-auto mt-10 md:mt-14" aria-labelledby="about-heading">
      <h2 id="about-heading" className="text-xl md:text-2xl font-bold text-graewe-dark">
        {t('seo.aboutTitle')}
      </h2>
      <span className="accent-bar"></span>
      <p className="mt-4 text-sm md:text-base text-graewe-gray-600 leading-relaxed">
        {t('seo.aboutIntro')}
      </p>

      <dl className="mt-8 space-y-6">
        {FAQ_KEYS.map((key) => (
          <div key={key}>
            <dt className="text-base md:text-lg font-bold text-graewe-dark">
              {t(`seo.${key}Question`)}
            </dt>
            <dd className="mt-2 text-sm md:text-base text-graewe-gray-600 leading-relaxed">
              {t(`seo.${key}Answer`)}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
