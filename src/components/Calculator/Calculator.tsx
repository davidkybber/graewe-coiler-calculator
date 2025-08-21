import React, { useCallback, useEffect } from 'react'
import { useCalculator } from './CalculatorProvider'
import { CalculatorInputs } from './CalculatorInputs'
import { CalculatorResults } from './CalculatorResults'
import { validateForm, hasValidationErrors } from '../../utils/validation'
import { calculateCoilParameters } from '../../services/calculations'
import { CoilCalculationParams } from '../../types/CalculatorTypes'

export const Calculator: React.FC = () => {
  const { state, dispatch } = useCalculator()

  // Validate and calculate when params change
  useEffect(() => {
    const { params } = state
    
    // Validate current form state
    const errors = validateForm(params)
    dispatch({ type: 'SET_ERRORS', errors })

    // If no errors and all required fields are filled, calculate
    if (!hasValidationErrors(errors) && isFormComplete(params)) {
      performCalculation(params as CoilCalculationParams)
    }
  }, [state.params]) // eslint-disable-line react-hooks/exhaustive-deps

  // Check if form is complete
  const isFormComplete = (params: Partial<CoilCalculationParams>): boolean => {
    return !!(
      params.wireDiameter &&
      params.numberOfTurns &&
      params.coreDiameter &&
      params.coreLength &&
      params.coreMaterial &&
      params.wireMaterial
    )
  }

  // Perform calculation
  const performCalculation = useCallback(async (params: CoilCalculationParams) => {
    dispatch({ type: 'START_CALCULATION' })
    
    try {
      const result = await calculateCoilParameters(params)
      dispatch({ type: 'SET_RESULT', result })
    } catch (error) {
      dispatch({ 
        type: 'SET_RESULT', 
        result: { 
          success: false, 
          error: error instanceof Error ? error.message : 'Calculation failed' 
        }
      })
    }
  }, [dispatch])

  // Reset calculator
  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET_CALCULATOR' })
  }, [dispatch])

  return (
    <div className="calculator-container">
      {/* Header */}
      <div className="bg-graewe-primary text-white p-6">
        <h2 className="text-xl font-semibold mb-2">
          Coil Parameter Calculator
        </h2>
        <p className="text-graewe-accent text-sm">
          Calculate inductance, resistance, and other coil properties
        </p>
      </div>

      {/* Calculator Form */}
      <div className="p-6 space-y-6">
        <CalculatorInputs />
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-graewe-gray-200">
          <button
            onClick={handleReset}
            className="btn-secondary flex-1"
            type="button"
          >
            Reset
          </button>
          <button
            onClick={() => {
              if (isFormComplete(state.params) && !hasValidationErrors(state.errors)) {
                performCalculation(state.params as CoilCalculationParams)
              }
            }}
            disabled={state.isCalculating || !isFormComplete(state.params) || hasValidationErrors(state.errors)}
            className="btn-primary flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
          >
            {state.isCalculating ? 'Calculating...' : 'Calculate'}
          </button>
        </div>

        {/* Results */}
        <CalculatorResults />
      </div>
    </div>
  )
}
