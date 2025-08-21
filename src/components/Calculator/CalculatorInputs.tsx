import React from 'react'
import { useCalculator } from './CalculatorProvider'
import { CoreMaterial, WireMaterial } from '../../types/CalculatorTypes'
import { formatNumberInput, parseNumberInput } from '../../utils/validation'

export const CalculatorInputs: React.FC = () => {
  const { state, dispatch } = useCalculator()
  const { params, errors } = state

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

  return (
    <div className="calculator-input-group">
      {/* Wire Diameter */}
      <div>
        <label htmlFor="wireDiameter" className="block text-sm font-medium text-graewe-dark mb-2">
          Wire Diameter (mm)
        </label>
        <input
          id="wireDiameter"
          type="number"
          step="0.01"
          min="0.01"
          max="50"
          value={params.wireDiameter || ''}
          onChange={(e) => handleNumberChange('wireDiameter', e.target.value)}
          className={`input-field ${errors.wireDiameter ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter wire diameter"
          data-testid="wire-diameter-input"
        />
        {errors.wireDiameter && (
          <p className="mt-1 text-sm text-red-600">{errors.wireDiameter}</p>
        )}
      </div>

      {/* Number of Turns */}
      <div>
        <label htmlFor="numberOfTurns" className="block text-sm font-medium text-graewe-dark mb-2">
          Number of Turns
        </label>
        <input
          id="numberOfTurns"
          type="number"
          step="1"
          min="1"
          max="10000"
          value={params.numberOfTurns || ''}
          onChange={(e) => handleNumberChange('numberOfTurns', e.target.value)}
          className={`input-field ${errors.numberOfTurns ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter number of turns"
          data-testid="number-of-turns-input"
        />
        {errors.numberOfTurns && (
          <p className="mt-1 text-sm text-red-600">{errors.numberOfTurns}</p>
        )}
      </div>

      {/* Core Diameter */}
      <div>
        <label htmlFor="coreDiameter" className="block text-sm font-medium text-graewe-dark mb-2">
          Core Diameter (mm)
        </label>
        <input
          id="coreDiameter"
          type="number"
          step="0.1"
          min="0.1"
          max="1000"
          value={params.coreDiameter || ''}
          onChange={(e) => handleNumberChange('coreDiameter', e.target.value)}
          className={`input-field ${errors.coreDiameter ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter core diameter"
          data-testid="core-diameter-input"
        />
        {errors.coreDiameter && (
          <p className="mt-1 text-sm text-red-600">{errors.coreDiameter}</p>
        )}
      </div>

      {/* Core Length */}
      <div>
        <label htmlFor="coreLength" className="block text-sm font-medium text-graewe-dark mb-2">
          Core Length (mm)
        </label>
        <input
          id="coreLength"
          type="number"
          step="0.1"
          min="0.1"
          max="1000"
          value={params.coreLength || ''}
          onChange={(e) => handleNumberChange('coreLength', e.target.value)}
          className={`input-field ${errors.coreLength ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          placeholder="Enter core length"
          data-testid="core-length-input"
        />
        {errors.coreLength && (
          <p className="mt-1 text-sm text-red-600">{errors.coreLength}</p>
        )}
      </div>

      {/* Core Material */}
      <div>
        <label htmlFor="coreMaterial" className="block text-sm font-medium text-graewe-dark mb-2">
          Core Material
        </label>
        <select
          id="coreMaterial"
          value={params.coreMaterial || CoreMaterial.AIR}
          onChange={(e) => handleSelectChange('coreMaterial', e.target.value)}
          className={`input-field ${errors.coreMaterial ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          data-testid="core-material-select"
        >
          <option value={CoreMaterial.AIR}>Air Core</option>
          <option value={CoreMaterial.IRON}>Iron Core</option>
          <option value={CoreMaterial.FERRITE}>Ferrite Core</option>
          <option value={CoreMaterial.POWDERED_IRON}>Powdered Iron Core</option>
        </select>
        {errors.coreMaterial && (
          <p className="mt-1 text-sm text-red-600">{errors.coreMaterial}</p>
        )}
      </div>

      {/* Wire Material */}
      <div>
        <label htmlFor="wireMaterial" className="block text-sm font-medium text-graewe-dark mb-2">
          Wire Material
        </label>
        <select
          id="wireMaterial"
          value={params.wireMaterial || WireMaterial.COPPER}
          onChange={(e) => handleSelectChange('wireMaterial', e.target.value)}
          className={`input-field ${errors.wireMaterial ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
          data-testid="wire-material-select"
        >
          <option value={WireMaterial.COPPER}>Copper</option>
          <option value={WireMaterial.ALUMINUM}>Aluminum</option>
          <option value={WireMaterial.SILVER}>Silver</option>
        </select>
        {errors.wireMaterial && (
          <p className="mt-1 text-sm text-red-600">{errors.wireMaterial}</p>
        )}
      </div>
    </div>
  )
}
