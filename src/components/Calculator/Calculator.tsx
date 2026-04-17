import React, { useCallback, useEffect } from 'react'
import { useCalculator } from './CalculatorProvider'
import { CalculatorInputs } from './CalculatorInputs'
import { CalculatorResults } from './CalculatorResults'
import { validateForm, hasValidationErrors } from '../../utils/validation'
import { calculatePipeCoilParameters } from '../../services/calculations'
import { PipeCoilCalculationParams, CalculationMode } from '../../types/CalculatorTypes'
import { useTranslation } from '../../hooks/useTranslation'

export const Calculator: React.FC = () => {
  const { state, dispatch } = useCalculator()
  const { t } = useTranslation()

  // Validate and calculate when params change
  useEffect(() => {
    const { params, hasAttemptedCalculation } = state

    // Validate current form state
    const errors = validateForm(params)

    // Only show errors if user has attempted to calculate
    if (hasAttemptedCalculation) {
      dispatch({ type: 'SET_ERRORS', errors })
    }

    // If no errors and required fields are filled, calculate
    if (!hasValidationErrors(errors) && isFormComplete(params)) {
      performCalculation(params as PipeCoilCalculationParams)
    }
  }, [state.params, state.hasAttemptedCalculation]) // eslint-disable-line react-hooks/exhaustive-deps

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
          error: error instanceof Error ? error.message : t('errors.calculationFailed')
        }
      })
    }
  }, [dispatch])

  // Reset calculator
  const handleReset = useCallback(() => {
    dispatch({ type: 'RESET_CALCULATOR' })
  }, [dispatch])

  return (
    <div className="w-full max-w-4xl mx-auto fade-in-up">
      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-lg border border-graewe-gray-200 overflow-hidden">
        {/* Calculator Header */}
        <div className="bg-graewe-dark px-5 md:px-8 py-5 md:py-6">
          <h2 className="text-lg md:text-xl font-bold text-white">
            {t('calculator.title')}
          </h2>
          <p className="text-graewe-accent text-sm mt-1">
            {t('calculator.subtitle')}
          </p>
        </div>

        {/* Calculator Form */}
        <div className="p-5 md:p-8 space-y-8">
          <CalculatorInputs />

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-graewe-gray-200">
            <button
              onClick={handleReset}
              className="btn-outline flex-1 py-3 px-5 text-sm md:text-base inline-flex items-center justify-center"
              type="button"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {t('calculator.reset')}
            </button>
            <button
              onClick={() => {
                dispatch({ type: 'TRIGGER_VALIDATION' })
                const errors = validateForm(state.params)
                dispatch({ type: 'SET_ERRORS', errors })
                if (isFormComplete(state.params) && !hasValidationErrors(errors)) {
                  performCalculation(state.params as PipeCoilCalculationParams)
                }
              }}
              disabled={state.isCalculating}
              className="btn-primary flex-1 py-3 px-5 text-sm md:text-base inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              type="button"
            >
              {state.isCalculating ? (
                <>
                  <div className="spinner mr-2"></div>
                  {t('calculator.calculating')}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  {t('calculator.calculate')}
                </>
              )}
            </button>
          </div>

          {/* Results */}
          <CalculatorResults />

          {/* Disclaimer */}
          <div className="p-4 bg-graewe-accent/10 rounded-lg border border-graewe-accent/30">
            <p className="text-sm text-graewe-dark-muted text-center">
              <strong>{t('calculator.disclaimerTitle')}:</strong> {t('calculator.disclaimer')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
