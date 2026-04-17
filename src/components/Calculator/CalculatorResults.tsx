import React from 'react'
import { useCalculator } from './CalculatorProvider'
import { LoadingSpinner } from '../UI/LoadingSpinner'
import { formatResult } from '../../services/calculations'
import { CalculationMode } from '../../types/CalculatorTypes'
import { useTranslation } from '../../hooks/useTranslation'

export const CalculatorResults: React.FC = () => {
  const { state } = useCalculator()
  const { result, isCalculating, params } = state
  const { t } = useTranslation()

  if (isCalculating) {
    return (
      <div className="bg-graewe-gray-100 rounded-lg p-8 border border-graewe-gray-200">
        <div className="flex items-center justify-center">
          <LoadingSpinner size="lg" className="mr-3" />
          <span className="text-graewe-gray-500 text-lg">{t('calculator.calculating')}</span>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="bg-graewe-gray-100 rounded-lg p-8 border border-graewe-gray-200">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto bg-graewe-accent/20 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-graewe-accent-dark"
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
          <h3 className="text-lg font-bold text-graewe-dark mb-2">
            {t('calculator.readyToCalculate')}
          </h3>
          <p className="text-graewe-gray-500 text-sm">
            {t('calculator.readyToCalculateDescription')}
          </p>
        </div>
      </div>
    )
  }

  if (!result.success) {
    return (
      <div className="bg-red-50 rounded-lg p-5 border border-red-200">
        <div className="flex items-start">
          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
            <svg
              className="w-4 h-4 text-red-600"
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
            <h4 className="text-base font-bold text-red-800 mb-1">
              {t('calculator.calculationError')}
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

  const ResultCard: React.FC<{ label: string; value: string; testId?: string }> = ({ label, value, testId }) => (
    <div className="bg-white rounded-lg p-5 border border-graewe-gray-200 text-center hover:shadow-md transition-shadow">
      <h4 className="text-xs font-medium uppercase tracking-wider text-graewe-gray-500 mb-2">
        {label}
      </h4>
      <div className="text-2xl font-bold text-graewe-dark" data-testid={testId}>
        {value}
      </div>
    </div>
  )

  return (
    <div className="space-y-5 fade-in">
      <div className="bg-graewe-accent/10 rounded-lg p-6 border border-graewe-accent/30">
        <div className="flex items-center mb-5">
          <div className="w-8 h-8 bg-graewe-accent rounded-full flex items-center justify-center mr-3">
            <svg
              className="w-4 h-4 text-graewe-dark"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-graewe-dark">
            {t('calculator.calculationSuccess')}
          </h3>
        </div>

        {/* Results based on calculation mode */}
        {params.calculationMode === CalculationMode.COIL_LENGTH && data.coilLengthData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ResultCard
              label={t('calculator.coilLengthResult')}
              value={formatResult(data.coilLengthData.coilLength, 'm')}
              testId="coil-length-result"
            />
            <ResultCard
              label={t('calculator.outerDiameter')}
              value={formatResult(data.coilLengthData.outerDiameter, 'mm')}
              testId="coil-length-od-result"
            />
            <ResultCard
              label={t('calculator.bundleWidth')}
              value={formatResult(data.coilLengthData.bundleWidth, 'mm')}
              testId="coil-length-width-result"
            />
          </div>
        )}

        {params.calculationMode === CalculationMode.END_POSITION && data.endPosition && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ResultCard
              label={t('calculator.numberOfLayers')}
              value={formatResult(data.endPosition.numberOfLayers, '', 0)}
              testId="number-of-layers-result"
            />
            <ResultCard
              label={t('calculator.pipesOnLastLayer')}
              value={`${formatResult(data.endPosition.pipesOnLastLayer, '', 2)} / ${data.endPosition.lastLayerCapacity}`}
              testId="pipes-last-layer-result"
            />
            <ResultCard
              label={t('calculator.numberOfRotations')}
              value={formatResult(data.endPosition.numberOfRotations, '', 2)}
              testId="number-of-rotations-result"
            />
            <ResultCard
              label={t('calculator.bundleWidth')}
              value={formatResult(data.endPosition.bundleWidth, 'mm', 0)}
              testId="bundle-width-result"
            />
            <ResultCard
              label={t('calculator.bundleHeight')}
              value={formatResult(data.endPosition.bundleHeight, 'mm', 0)}
              testId="bundle-height-result"
            />
            <ResultCard
              label={t('calculator.outerDiameter')}
              value={formatResult(data.endPosition.outerDiameter, 'mm', 0)}
              testId="outer-diameter-result"
            />
          </div>
        )}

        {/* Calculation Method Info */}
        <div className="mt-5 p-3 bg-white rounded-lg border border-graewe-gray-200">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-graewe-accent-dark mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm">
              <span className="font-bold text-graewe-dark">{t('calculator.coilingMethod')}: </span>
              <span className="text-graewe-dark-muted">
                {data.calculationMethod === 'uneven_layers' ? t('calculator.unevenLayers') : t('calculator.evenLayersOffset')}
              </span>
            </div>
          </div>
        </div>

        {/* Warning if present */}
        {data.warning && (
          <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-start">
              <svg className="w-4 h-4 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <div className="text-sm">
                <span className="font-bold text-yellow-800">{t('calculator.disclaimerTitle')}: </span>
                <span className="text-yellow-700">{data.warning}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
