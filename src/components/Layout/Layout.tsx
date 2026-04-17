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
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company Info */}
            <div>
              <div className="bg-white inline-block p-3 rounded mb-5">
                <img
                  src={`${import.meta.env.BASE_URL}graewe-logo.jpg`}
                  alt="GRAEWE"
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {t('layout.companyInfo')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
                {t('layout.quickLinks')}
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="https://www.graewe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-graewe-accent transition-colors"
                  >
                    {t('layout.visitWebsite')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.graewe.com/produkte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-graewe-accent transition-colors"
                  >
                    {t('layout.ourProducts')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.graewe.com/kontakt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-graewe-accent transition-colors"
                  >
                    {t('layout.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* About Calculator */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-5">
                {t('layout.aboutCalculator')}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {t('layout.aboutDescription')}
              </p>
              <div className="text-xs text-gray-500">
                {t('layout.version')}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1e1e1e]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-gray-500">
                {t('layout.copyright')}
              </p>
              <div className="flex items-center gap-5 text-xs">
                <a
                  href="https://www.graewe.com/impressum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-graewe-accent transition-colors"
                >
                  {t('layout.imprint')}
                </a>
                <a
                  href="https://www.graewe.com/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-graewe-accent transition-colors"
                >
                  {t('layout.privacy')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
