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
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-graewe-dark">
                GRAEWE Coiler Calculator
              </h1>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <span className="text-sm text-graewe-gray-500">
                Professional Coil Calculations
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-2xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-graewe-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-sm text-graewe-gray-500">
              © 2024 GRAEWE. Professional manufacturing solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
