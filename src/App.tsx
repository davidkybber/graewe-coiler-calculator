import React from 'react'
import { CalculatorProvider } from './components/Calculator/CalculatorProvider'
import { Calculator } from './components/Calculator/Calculator'
import { Layout } from './components/Layout/Layout'
import { ErrorBoundary } from './components/UI/ErrorBoundary'

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <CalculatorProvider>
        <Layout>
          <Calculator />
        </Layout>
      </CalculatorProvider>
    </ErrorBoundary>
  )
}

export default App
