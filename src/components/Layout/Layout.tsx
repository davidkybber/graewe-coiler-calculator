import React from 'react'
import { useTranslation } from '../../hooks/useTranslation'
import { LanguageSelector } from '../UI/LanguageSelector'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header — styled to match graewe.com */}
      <header className="bg-white border-b border-graewe-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <a href="https://www.graewe.com" target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}graewe-logo.jpg`}
                alt="GRAEWE"
                className="h-10 md:h-14 w-auto"
              />
            </a>
            <div className="flex items-center gap-3 md:gap-4">
              <LanguageSelector />
              <a
                href="https://www.graewe.com/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-primary text-xs md:text-sm py-2 px-4"
              >
                {t('layout.contact')}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Page Title Bar */}
      <div className="bg-graewe-dark text-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            {t('layout.productCalculator')}
          </h1>
          <span className="accent-bar"></span>
          <p className="mt-3 text-graewe-gray-400 text-sm md:text-base max-w-2xl">
            {t('layout.headerDescription')}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        {children}
      </main>

      {/* Footer — styled to match graewe.com */}
      <footer className="bg-[#2a2a2a] text-white mt-auto">
        {/* CTA Banner */}
        <div className="bg-graewe-accent">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-graewe-dark shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-graewe-dark font-bold text-sm sm:text-base">
                  {t('layout.visitWebsiteCta')}
                </span>
              </div>
              <a
                href="https://www.graewe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-graewe-dark text-white px-5 py-2 text-sm font-bold hover:bg-graewe-dark-light transition-colors whitespace-nowrap"
              >
                {t('layout.goToWebsite')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
            {/* Company Info */}
            <div>
              <div className="mb-5 inline-block rounded-md bg-white p-2">
                <img
                  src={`${import.meta.env.BASE_URL}graewe-logo.jpg`}
                  alt="GRAEWE"
                  className="h-auto w-[min(100%,180px)]"
                />
              </div>
              <p className="text-sm text-graewe-gray-400 leading-relaxed mb-4">
                GRAEWE GmbH Maschinenbau<br />
                Max-Planck-Straße 1-3<br />
                79395 Neuenburg am Rhein
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+4976317944-0"
                  className="flex items-center gap-2 text-graewe-gray-400 hover:text-graewe-accent transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  +49 7631 7944-0
                </a>
                <a
                  href="mailto:info@graewe.com"
                  className="flex items-center gap-2 text-graewe-gray-400 hover:text-graewe-accent transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@graewe.com
                </a>
              </div>
            </div>

            {/* Company Navigation */}
            <div>
              <h3 className="text-xs font-bold text-graewe-gray-400 uppercase tracking-widest mb-4">
                {t('layout.company')}
              </h3>
              <div className="space-y-2 text-sm">
                <a href="https://www.graewe.com/unternehmen/wer-ist-graewe" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.whoIsGraewe')}</a>
                <a href="https://www.graewe.com/unternehmen/was-macht-graewe" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.whatDoesGraewe')}</a>
                <a href="https://www.graewe.com/unternehmen/die-graewe-gruppe" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.graeweGroup')}</a>
                <a href="https://www.graewe.com/kontakt" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.contact')}</a>
              </div>
            </div>

            {/* Products & Service */}
            <div>
              <h3 className="text-xs font-bold text-graewe-gray-400 uppercase tracking-widest mb-4">
                {t('layout.products')}
              </h3>
              <div className="space-y-2 text-sm mb-6">
                <a href="https://www.graewe.com/produkte/rohrextrusion" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.pipeExtrusion')}</a>
                <a href="https://www.graewe.com/produkte/profilextrusion" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.profileExtrusion')}</a>
                <a href="https://www.graewe.com/produkte/plattenextrusion" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.sheetExtrusion')}</a>
              </div>
              <h3 className="text-xs font-bold text-graewe-gray-400 uppercase tracking-widest mb-4">
                {t('layout.service')}
              </h3>
              <div className="space-y-2 text-sm">
                <a href="https://www.graewe.com/aktuelles" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.news')}</a>
                <a href="https://www.graewe.com/gebrauchtmaschinen" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.usedMachines')}</a>
                <a href="https://www.graewe.com/downloads" target="_blank" rel="noopener noreferrer" className="block text-graewe-gray-400 hover:text-graewe-accent transition-colors">{t('layout.downloads')}</a>
              </div>
            </div>

            {/* Social & next machines */}
            <div>
              <h3 className="text-xs font-bold text-graewe-gray-400 uppercase tracking-widest mb-4">
                {t('layout.social')}
              </h3>
              <div className="flex gap-3 mb-8">
                <a
                  href="https://www.facebook.com/graewegmbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-graewe-gray-400 hover:bg-graewe-accent hover:text-graewe-dark transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@graewegmbh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-graewe-gray-400 hover:bg-graewe-accent hover:text-graewe-dark transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
                  </svg>
                </a>
              </div>
              <a
                href="http://www.next-machines.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors">
                  <span className="font-black text-xl tracking-tight leading-none text-white group-hover:text-graewe-accent transition-colors">next</span>
                  <br />
                  <span className="text-[10px] tracking-wide text-graewe-gray-400">SECOND HAND · FIRST QUALITY</span>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-graewe-gray-500">
              {t('layout.copyright')}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs">
              <a
                href="https://www.graewe.com/kontakt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-graewe-gray-500 hover:text-graewe-gray-400 transition-colors"
              >
                {t('layout.contact')}
              </a>
              <a
                href="https://www.graewe.com/impressum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-graewe-gray-500 hover:text-graewe-gray-400 transition-colors"
              >
                {t('layout.imprint')}
              </a>
              <a
                href="https://www.graewe.com/datenschutz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-graewe-gray-500 hover:text-graewe-gray-400 transition-colors"
              >
                {t('layout.privacy')}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
