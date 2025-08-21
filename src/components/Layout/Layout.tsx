import React from 'react'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-graewe-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-graewe-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 md:h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-lg md:text-xl font-bold text-graewe-dark">
                  GRAEWE
                </h1>
                <div className="text-xs text-graewe-gray-500 -mt-0.5">
                  Produktrechner
                </div>
              </div>
            </div>
            <div className="hidden sm:flex items-center space-x-3">
              <div className="text-right">
                <div className="text-sm font-medium text-graewe-dark">
                  Professional Coil Calculations
                </div>
                <div className="text-xs text-graewe-gray-500">
                  Wickellänge & Endposition
                </div>
              </div>
              <div className="w-8 h-8 bg-graewe-accent rounded-lg flex items-center justify-center">
                <svg 
                  className="w-4 h-4 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 002 2z" 
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-graewe-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-graewe-dark mb-4">
                GRAEWE GmbH
              </h3>
              <p className="text-sm text-graewe-gray-600 mb-4">
                Ihr Partner für professionelle Extrusionsanlagen und 
                Produktrechnungen in der Kunststoffverarbeitung.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.graewe.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-graewe-primary hover:text-graewe-secondary transition-colors"
                >
                  Website besuchen
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-graewe-dark mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href="https://www.graewe.com/produktrechner" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-graewe-gray-600 hover:text-graewe-primary transition-colors"
                  >
                    Original Produktrechner
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.graewe.com/produkte" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-graewe-gray-600 hover:text-graewe-primary transition-colors"
                  >
                    Unsere Produkte
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.graewe.com/kontakt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-graewe-gray-600 hover:text-graewe-primary transition-colors"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </div>

            {/* Calculator Info */}
            <div>
              <h3 className="text-lg font-semibold text-graewe-dark mb-4">
                Über diesen Rechner
              </h3>
              <p className="text-sm text-graewe-gray-600 mb-4">
                Progressive Web App für mobile und Desktop-Nutzung. 
                Optimiert für professionelle Anwender in der Fertigung.
              </p>
              <div className="text-xs text-graewe-gray-500">
                Version 1.0.0 • PWA Ready
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-graewe-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-graewe-gray-500 mb-4 md:mb-0">
                © 2024 GRAEWE GmbH. Alle Rechte vorbehalten.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a 
                  href="https://www.graewe.com/impressum" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-graewe-gray-500 hover:text-graewe-primary transition-colors"
                >
                  Impressum
                </a>
                <a 
                  href="https://www.graewe.com/datenschutz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-graewe-gray-500 hover:text-graewe-primary transition-colors"
                >
                  Datenschutz
                </a>
                <span className="text-graewe-gray-400">•</span>
                <span className="text-graewe-gray-500">Made with ❤️ for manufacturing</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}