import React from 'react'
import { CalculatorProvider } from './components/Calculator/CalculatorProvider'
import { Calculator } from './components/Calculator/Calculator'
import { AboutContent } from './components/Layout/AboutContent'
import { Layout } from './components/Layout/Layout'
import { ErrorBoundary } from './components/UI/ErrorBoundary'
import { LanguageProvider } from './contexts/LanguageContext'
import { useSeoSync } from './hooks/useSeoSync'

// Inside the language provider so document metadata (title, description,
// canonical, JSON-LD) follows the active language.
const AppContent: React.FC = () => {
  useSeoSync()

  return (
    <CalculatorProvider>
      <Layout>
        <Calculator />
        <AboutContent />
      </Layout>
    </CalculatorProvider>
  )
}

const App: React.FC = () => (
  <ErrorBoundary>
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  </ErrorBoundary>
)

export default App
