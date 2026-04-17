import React from 'react'
import { useCalculator } from './CalculatorProvider'
import { CalculationMode, CoilMethod } from '../../types/CalculatorTypes'
import { formatNumberInput, parseNumberInput } from '../../utils/validation'
import { useTranslation } from '../../hooks/useTranslation'

export const CalculatorInputs: React.FC = () => {
  const { state, dispatch } = useCalculator()
  const { params, errors } = state
  const { t } = useTranslation()

  // Handle numeric input changes
  const handleNumberChange = (field: string, value: string) => {
    const formattedValue = formatNumberInput(value)
    const numericValue = parseNumberInput(formattedValue)

    dispatch({
      type: 'SET_PARAM',
      field: field as any,
      value: numericValue
    })
  }

  // Handle select changes
  const handleSelectChange = (field: string, value: string) => {
    dispatch({
      type: 'SET_PARAM',
      field: field as any,
      value
    })
  }

  const RadioCard: React.FC<{
    name: string
    value: string
    checked: boolean
    onChange: (value: string) => void
    title: string
    description: string
  }> = ({ name, value, checked, onChange, title, description }) => (
    <label
      className={`flex items-start p-4 rounded-lg cursor-pointer transition-all duration-200 border-2 ${
        checked
          ? 'border-graewe-accent bg-graewe-accent/5'
          : 'border-graewe-gray-200 hover:border-graewe-gray-300 hover:bg-graewe-gray-50'
      }`}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <div className={`w-5 h-5 rounded-full border-2 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center transition-colors ${
        checked
          ? 'border-graewe-accent bg-graewe-accent'
          : 'border-graewe-gray-300'
      }`}>
        {checked && <div className="w-2 h-2 bg-graewe-dark rounded-full"></div>}
      </div>
      <div>
        <div className="font-bold text-graewe-dark text-sm">{title}</div>
        <div className="text-sm text-graewe-gray-500 mt-0.5">{description}</div>
      </div>
    </label>
  )

  return (
    <div className="space-y-8">
      {/* Calculation Mode Selection */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-graewe-dark mb-1">
          {t('calculator.selectCalculationType')}
        </h3>
        <span className="accent-bar mb-4"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <RadioCard
            name="calculationMode"
            value={CalculationMode.COIL_LENGTH}
            checked={params.calculationMode === CalculationMode.COIL_LENGTH}
            onChange={(v) => handleSelectChange('calculationMode', v)}
            title={t('calculator.coilLength')}
            description={t('calculator.coilLengthDescription')}
          />
          <RadioCard
            name="calculationMode"
            value={CalculationMode.END_POSITION}
            checked={params.calculationMode === CalculationMode.END_POSITION}
            onChange={(v) => handleSelectChange('calculationMode', v)}
            title={t('calculator.endPosition')}
            description={t('calculator.endPositionDescription')}
          />
        </div>
      </div>

      {/* Basic Parameters */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-graewe-dark mb-1">
          {t('calculator.basicParameters')}
        </h3>
        <span className="accent-bar mb-4"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          {/* Pipe Diameter */}
          <div>
            <label htmlFor="pipeDiameter" className="block text-sm font-medium text-graewe-dark mb-2">
              {t('calculator.pipeDiameter')} *
            </label>
            <input
              id="pipeDiameter"
              type="number"
              step="0.1"
              min="0.1"
              max="500"
              value={params.pipeDiameter || ''}
              onChange={(e) => handleNumberChange('pipeDiameter', e.target.value)}
              className={`input-field ${errors.pipeDiameter ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
              placeholder="z.B. 32"
              data-testid="pipe-diameter-input"
            />
            {errors.pipeDiameter && (
              <p className="mt-1 text-sm text-red-600">{errors.pipeDiameter}</p>
            )}
          </div>

          {/* Inner Diameter */}
          <div>
            <label htmlFor="innerDiameter" className="block text-sm font-medium text-graewe-dark mb-2">
              {t('calculator.innerDiameter')} *
            </label>
            <input
              id="innerDiameter"
              type="number"
              step="1"
              min="1"
              max="5000"
              value={params.innerDiameter || ''}
              onChange={(e) => handleNumberChange('innerDiameter', e.target.value)}
              className={`input-field ${errors.innerDiameter ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
              placeholder="z.B. 400"
              data-testid="inner-diameter-input"
            />
            {errors.innerDiameter && (
              <p className="mt-1 text-sm text-red-600">{errors.innerDiameter}</p>
            )}
          </div>

          {/* Conditional Fields based on calculation mode */}
          {params.calculationMode === CalculationMode.END_POSITION && (
            <>
              <div>
                <label htmlFor="pipeLength" className="block text-sm font-medium text-graewe-dark mb-2">
                  {t('calculator.pipeLength')} *
                </label>
                <input
                  id="pipeLength"
                  type="number"
                  step="1"
                  min="1"
                  max="10000"
                  value={params.pipeLength || ''}
                  onChange={(e) => handleNumberChange('pipeLength', e.target.value)}
                  className={`input-field ${errors.pipeLength ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="z.B. 200"
                  data-testid="pipe-length-input"
                />
                {errors.pipeLength && (
                  <p className="mt-1 text-sm text-red-600">{errors.pipeLength}</p>
                )}
              </div>

              <div>
                <label htmlFor="pipesPerLayer" className="block text-sm font-medium text-graewe-dark mb-2">
                  {t('calculator.pipesPerLayer')} *
                </label>
                <input
                  id="pipesPerLayer"
                  type="number"
                  step="1"
                  min="1"
                  max="1000"
                  value={params.pipesPerLayer || ''}
                  onChange={(e) => handleNumberChange('pipesPerLayer', e.target.value)}
                  className={`input-field ${errors.pipesPerLayer ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="z.B. 50"
                  data-testid="pipes-per-layer-input"
                />
                {errors.pipesPerLayer && (
                  <p className="mt-1 text-sm text-red-600">{errors.pipesPerLayer}</p>
                )}
              </div>
            </>
          )}

          {params.calculationMode === CalculationMode.COIL_LENGTH && (
            <>
              <div>
                <label htmlFor="outerDiameter" className="block text-sm font-medium text-graewe-dark mb-2">
                  {t('calculator.outerDiameter')} *
                </label>
                <input
                  id="outerDiameter"
                  type="number"
                  step="1"
                  min="1"
                  max="5000"
                  value={params.outerDiameter || ''}
                  onChange={(e) => handleNumberChange('outerDiameter', e.target.value)}
                  className={`input-field ${errors.outerDiameter ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="z.B. 800"
                  data-testid="outer-diameter-input"
                />
                {errors.outerDiameter && (
                  <p className="mt-1 text-sm text-red-600">{errors.outerDiameter}</p>
                )}
              </div>

              <div>
                <label htmlFor="bundleWidth" className="block text-sm font-medium text-graewe-dark mb-2">
                  {t('calculator.bundleWidth')} *
                </label>
                <input
                  id="bundleWidth"
                  type="number"
                  step="1"
                  min="1"
                  max="10000"
                  value={params.bundleWidth || ''}
                  onChange={(e) => handleNumberChange('bundleWidth', e.target.value)}
                  className={`input-field ${errors.bundleWidth ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                  placeholder="z.B. 1600"
                  data-testid="bundle-width-input"
                />
                {errors.bundleWidth && (
                  <p className="mt-1 text-sm text-red-600">{errors.bundleWidth}</p>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Coiling Method */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-graewe-dark mb-1">
          {t('calculator.coilingMethod')}
        </h3>
        <span className="accent-bar mb-4"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <RadioCard
            name="coilMethod"
            value={CoilMethod.UNEVEN_LAYERS}
            checked={params.coilMethod === CoilMethod.UNEVEN_LAYERS}
            onChange={(v) => handleSelectChange('coilMethod', v)}
            title={t('calculator.unevenLayers')}
            description={t('calculator.unevenLayersDescription')}
          />
          <RadioCard
            name="coilMethod"
            value={CoilMethod.EVEN_LAYERS_OFFSET}
            checked={params.coilMethod === CoilMethod.EVEN_LAYERS_OFFSET}
            onChange={(v) => handleSelectChange('coilMethod', v)}
            title={t('calculator.evenLayersOffset')}
            description={t('calculator.evenLayersOffsetDescription')}
          />
        </div>
      </div>

    </div>
  )
}
