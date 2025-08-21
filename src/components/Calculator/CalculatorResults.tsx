import React from 'react'
import { useCalculator } from './CalculatorProvider'
import { LoadingSpinner } from '../UI/LoadingSpinner'
import { formatResult } from '../../services/calculations'

export const CalculatorResults: React.FC = () => {
  const { state } = useCalculator()
  const { result, isCalculating } = state

  if (isCalculating) {
    return (
      <div className="calculator-result">
        <div className="flex items-center justify-center py-8">
          <LoadingSpinner size="lg" className="mr-3" />
          <span className="text-graewe-gray-600">Calculating...</span>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="calculator-result">
        <div className="text-center py-8">
          <div className="w-16 h-16 mx-auto bg-graewe-gray-200 rounded-full flex items-center justify-center mb-4">
            <svg 
              className="w-8 h-8 text-graewe-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" 
              />
            </svg>
          </div>
          <p className="text-graewe-gray-500">
            Enter coil parameters above to see calculation results
          </p>
        </div>
      </div>
    )
  }

  if (!result.success) {
    return (
      <div className="calculator-result border-red-200 bg-red-50">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
            <svg 
              className="w-5 h-5 text-red-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
          </div>
          <div>
            <h4 className="text-sm font-medium text-red-800 mb-1">
              Calculation Error
            </h4>
            <p className="text-sm text-red-700">
              {result.error}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const data = result.data

  return (
    <div className="calculator-result">
      <h3 className="text-lg font-semibold text-graewe-dark mb-4">
        Calculation Results
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Inductance */}
        <div className="bg-white p-4 rounded-lg border border-graewe-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-graewe-gray-600">
              Inductance
            </span>
            <span className="text-lg font-semibold text-graewe-dark" data-testid="inductance-result">
              {formatResult(data.inductance, 'H')}
            </span>
          </div>
        </div>

        {/* Resistance */}
        <div className="bg-white p-4 rounded-lg border border-graewe-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-graewe-gray-600">
              Resistance
            </span>
            <span className="text-lg font-semibold text-graewe-dark" data-testid="resistance-result">
              {formatResult(data.resistance, 'Ω')}
            </span>
          </div>
        </div>

        {/* Quality Factor */}
        <div className="bg-white p-4 rounded-lg border border-graewe-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-graewe-gray-600">
              Quality Factor (Q)
            </span>
            <span className="text-lg font-semibold text-graewe-dark" data-testid="quality-factor-result">
              {formatResult(data.qualityFactor, '')}
            </span>
          </div>
        </div>

        {/* Wire Length */}
        <div className="bg-white p-4 rounded-lg border border-graewe-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-graewe-gray-600">
              Wire Length
            </span>
            <span className="text-lg font-semibold text-graewe-dark" data-testid="wire-length-result">
              {formatResult(data.wireLength, 'm')}
            </span>
          </div>
        </div>

        {/* Self Capacitance */}
        <div className="bg-white p-4 rounded-lg border border-graewe-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-graewe-gray-600">
              Self Capacitance
            </span>
            <span className="text-lg font-semibold text-graewe-dark" data-testid="capacitance-result">
              {formatResult(data.selfCapacitance, 'F')}
            </span>
          </div>
        </div>

        {/* Resonant Frequency */}
        <div className="bg-white p-4 rounded-lg border border-graewe-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-graewe-gray-600">
              Resonant Frequency
            </span>
            <span className="text-lg font-semibold text-graewe-dark" data-testid="frequency-result">
              {formatResult(data.resonantFrequency, 'Hz')}
            </span>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-graewe-gray-50 rounded-lg">
        <h4 className="text-sm font-medium text-graewe-dark mb-2">
          📝 Note
        </h4>
        <p className="text-sm text-graewe-gray-600">
          These calculations are based on theoretical formulas and may vary from actual measurements. 
          For precision applications, please verify with physical testing.
        </p>
      </div>
    </div>
  )
}
