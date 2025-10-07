import React from 'react'
import { useCalculator } from './CalculatorProvider'
import { LoadingSpinner } from '../UI/LoadingSpinner'
import { formatResult } from '../../services/calculations'
import { CalculationMode } from '../../types/CalculatorTypes'

export const CalculatorResults: React.FC = () => {
  const { state } = useCalculator()
  const { result, isCalculating, params } = state

  if (isCalculating) {
    return (
      <div className="bg-graewe-gray-50 rounded-lg p-8 border border-graewe-gray-200">
        <div className="flex items-center justify-center">
          <LoadingSpinner size="lg" className="mr-3" />
          <span className="text-graewe-gray-600 text-lg">Berechnung wird durchgeführt...</span>
        </div>
      </div>
    )
  }

  if (!result) {
    return (
      <div className="bg-graewe-gray-50 rounded-lg p-8 border border-graewe-gray-200">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto bg-graewe-gray-200 rounded-full flex items-center justify-center mb-4">
            <svg 
              className="w-4 h-4 text-graewe-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 002 2z" 
              />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-graewe-gray-900 mb-2">
            Bereit für die Berechnung
          </h3>
          <p className="text-graewe-gray-500">
            Geben Sie die erforderlichen Parameter ein, um die Berechnung zu starten
          </p>
        </div>
      </div>
    )
  }

  if (!result.success) {
    return (
      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
        <div className="flex items-start">
          <div className="w-4 h-4 bg-red-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
            <svg 
              className="w-3 h-3 text-red-600" 
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
            <h4 className="text-lg font-medium text-red-800 mb-2">
              Berechnungsfehler
            </h4>
            <p className="text-red-700">
              {result.error}
            </p>
          </div>
        </div>
      </div>
    )
  }

  const data = result.data

  return (
    <div className="space-y-6">
      <div className="bg-green-50 rounded-lg p-6 border border-green-200">
        <div className="flex items-center mb-4">
          <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center mr-3">
            <svg 
              className="w-3 h-3 text-green-600" 
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
          <h3 className="text-lg font-semibold text-green-800">
            Berechnung erfolgreich
          </h3>
        </div>

        {/* Results based on calculation mode */}
        {params.calculationMode === CalculationMode.COIL_LENGTH && data.coilLengthData && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-lg font-semibold text-graewe-dark mb-2">
                Wickellänge
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="coil-length-result">
                {formatResult(data.coilLengthData.coilLength, 'm')}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-lg font-semibold text-graewe-dark mb-2">
                Außendurchmesser OD
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="coil-length-od-result">
                {formatResult(data.coilLengthData.outerDiameter, 'mm')}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-lg font-semibold text-graewe-dark mb-2">
                Bundbreite W
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="coil-length-width-result">
                {formatResult(data.coilLengthData.bundleWidth, 'mm')}
              </div>
            </div>
          </div>
        )}

        {params.calculationMode === CalculationMode.END_POSITION && data.endPosition && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-sm font-medium text-graewe-gray-600 mb-2">
                Lageanzahl i [oE]
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="number-of-layers-result">
                {formatResult(data.endPosition.numberOfLayers, '', 0)}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-sm font-medium text-graewe-gray-600 mb-2">
                Rohranzahl auf der letzten Lage ni [oE]
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="pipes-last-layer-result">
                {formatResult(data.endPosition.pipesOnLastLayer, '', 2)} / {data.endPosition.lastLayerCapacity}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-sm font-medium text-graewe-gray-600 mb-2">
                Rotationsanzahl r [oE]
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="number-of-rotations-result">
                {formatResult(data.endPosition.numberOfRotations, '', 2)}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-sm font-medium text-graewe-gray-600 mb-2">
                Bundbreite W [mm]
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="bundle-width-result">
                {formatResult(data.endPosition.bundleWidth, 'mm', 0)}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-sm font-medium text-graewe-gray-600 mb-2">
                Bundhöhe H [mm]
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="bundle-height-result">
                {formatResult(data.endPosition.bundleHeight, 'mm', 0)}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-green-200 text-center">
              <h4 className="text-sm font-medium text-graewe-gray-600 mb-2">
                Aussendurchmesser OD [mm]
              </h4>
              <div className="text-2xl font-bold text-graewe-primary" data-testid="outer-diameter-result">
                {formatResult(data.endPosition.outerDiameter, 'mm', 0)}
              </div>
            </div>
          </div>
        )}

        {/* Calculation Method Info */}
        <div className="mt-4 p-3 bg-graewe-yellow/10 rounded-lg border border-graewe-yellow/30">
          <div className="flex items-center">
            <svg className="w-4 h-4 text-graewe-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-sm">
              <span className="font-medium text-graewe-dark">Wickelbild: </span>
              <span className="text-graewe-primary">
                {data.calculationMethod === 'uneven_layers' ? 'Ungleiche Lagen' : 'Gleiche Lagen versetzt'}
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
                <span className="font-medium text-yellow-800">Hinweis: </span>
                <span className="text-yellow-700">{data.warning}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}