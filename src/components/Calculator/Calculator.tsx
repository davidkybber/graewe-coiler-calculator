import React, { useCallback, useEffect } from 'react'
import { useCalculator } from './CalculatorProvider'
import { CalculatorInputs } from './CalculatorInputs'
import { CalculatorResults } from './CalculatorResults'
import { validateForm, hasValidationErrors } from '../../utils/validation'
import { calculatePipeCoilParameters } from '../../services/calculations'
import { PipeCoilCalculationParams, CalculationMode } from '../../types/CalculatorTypes'

export const Calculator: React.FC = () => {
  const { state, dispatch } = useCalculator()

  // Validate and calculate when params change
  useEffect(() => {
    const { params } = state
    
    // Validate current form state
    const errors = validateForm(params)
    dispatch({ type: 'SET_ERRORS', errors })

    // If no errors and required fields are filled, calculate
    if (!hasValidationErrors(errors) && isFormComplete(params)) {
      performCalculation(params as PipeCoilCalculationParams)
    }
  }, [state.params]) // eslint-disable-line react-hooks/exhaustive-deps

  // Check if form is complete based on calculation mode
  const isFormComplete = (params: Partial<PipeCoilCalculationParams>): boolean => {
    const baseRequired = !!(
      params.pipeDiameter &&
      params.innerDiameter &&
      params.calculationMode &&
      params.coilMethod
    )

    if (!baseRequired) return false

    if (params.calculationMode === CalculationMode.COIL_LENGTH) {
      return !!(params.outerDiameter && params.bundleWidth)
    } else {
      return !!(params.pipeLength)
    }
  }

  // Perform calculation
  const performCalculation = useCallback(async (params: PipeCoilCalculationParams) => {
    dispatch({ type: 'START_CALCULATION' })
    
    try {
      const result = await calculatePipeCoilParameters(params)
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
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-graewe-primary text-white p-4 md:p-6 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-1">
              GRAEWE Produktrechner
            </h2>
            <p className="text-graewe-yellow text-sm opacity-90">
              Berechnung der Wickellänge und Endposition für Rohre und Profile
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-10 h-10 bg-graewe-accent rounded-lg flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-white" 
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
          </div>
        </div>
      </div>

      {/* Calculator Form */}
      <div className="bg-white p-4 md:p-6 space-y-6 md:space-y-8 rounded-b-lg shadow-lg">
        <CalculatorInputs />
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-graewe-gray-200">
          <button
            onClick={handleReset}
            className="btn-secondary flex-1 py-2.5 px-4 text-sm md:text-base font-medium"
            type="button"
          >
            <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Zurücksetzen
          </button>
          <button
            onClick={() => {
              if (isFormComplete(state.params) && !hasValidationErrors(state.errors)) {
                performCalculation(state.params as PipeCoilCalculationParams)
              }
            }}
            disabled={state.isCalculating || !isFormComplete(state.params) || hasValidationErrors(state.errors)}
            className="btn-primary flex-1 py-2.5 px-4 text-sm md:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
          >
            {state.isCalculating ? (
              <>
                <div className="spinner mr-2"></div>
                Berechnung läuft...
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Berechnen
              </>
            )}
          </button>
        </div>

        {/* Results */}
        <CalculatorResults />

        {/* Disclaimer */}
        <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-graewe-gray-700 text-center">
            <strong>Hinweis:</strong> Die errechneten Wickellängen können um bis zu 10% abweichen. 
            Für die Richtigkeit der Ergebnisse übernehmen wir keine Gewähr.
          </p>
        </div>
      </div>
    </div>
  )
}