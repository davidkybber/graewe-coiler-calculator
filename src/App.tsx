import React from 'react'
import { CalculatorProvider } from './components/Calculator/CalculatorProvider'
import { Calculator } from './components/Calculator/Calculator'
import { Layout } from './components/Layout/Layout'
import { ErrorBoundary } from './components/UI/ErrorBoundary'
import { LanguageProvider } from './contexts/LanguageContext'

const App: React.FC = () => {
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
