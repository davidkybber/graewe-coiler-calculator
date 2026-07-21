import React, { useEffect } from 'react'
import { CalculatorProvider } from './components/Calculator/CalculatorProvider'
import { Calculator } from './components/Calculator/Calculator'
import { Layout } from './components/Layout/Layout'
import { ErrorBoundary } from './components/UI/ErrorBoundary'
import { LanguageProvider } from './contexts/LanguageContext'

const App: React.FC = () => {
  // The providers consume any shared-link query params during their initial
  // render (before effects run), so it's safe to strip the query here. This
  // keeps the address bar clean and prevents it from showing a stale config
  // as the user edits — the Share button is the single source of fresh links.
  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState(null, '', import.meta.env.BASE_URL)
    }
  }, [])

  return (
    <ErrorBoundary>
      <LanguageProvider>
        <CalculatorProvider>
          <Layout>
            <Calculator />
          </Layout>
        </CalculatorProvider>
      </LanguageProvider>
    </ErrorBoundary>
  )
}

export default App
