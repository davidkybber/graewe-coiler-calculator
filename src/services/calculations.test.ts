import { describe, it, expect } from 'vitest'
import { calculateCoilParameters, formatResult } from './calculations'
import { CoreMaterial, WireMaterial } from '../types/CalculatorTypes'

describe('calculateCoilParameters', () => {
  const validParams = {
    wireDiameter: 0.5,
    numberOfTurns: 100,
    coreDiameter: 10,
    coreLength: 20,
    coreMaterial: CoreMaterial.AIR,
    wireMaterial: WireMaterial.COPPER
  }

  it('should calculate parameters for valid input', async () => {
    const result = await calculateCoilParameters(validParams)
    
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.inductance).toBeGreaterThan(0)
      expect(result.data.resistance).toBeGreaterThan(0)
      expect(result.data.wireLength).toBeGreaterThan(0)
      expect(result.data.qualityFactor).toBeGreaterThan(0)
      expect(result.data.selfCapacitance).toBeGreaterThan(0)
      expect(result.data.resonantFrequency).toBeGreaterThan(0)
    }
  })

  it('should fail for invalid wire diameter', async () => {
    const invalidParams = { ...validParams, wireDiameter: 0 }
    const result = await calculateCoilParameters(invalidParams)
    
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toContain('Wire diameter must be greater than 0')
    }
  })

  it('should fail for invalid number of turns', async () => {
    const invalidParams = { ...validParams, numberOfTurns: -1 }
    const result = await calculateCoilParameters(invalidParams)
    
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toContain('Number of turns must be a positive integer')
    }
  })

  it('should fail when wire diameter >= core diameter', async () => {
    const invalidParams = { ...validParams, wireDiameter: 15, coreDiameter: 10 }
    const result = await calculateCoilParameters(invalidParams)
    
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error).toContain('Wire diameter must be smaller than core diameter')
    }
  })

  it('should calculate different results for different core materials', async () => {
    const airCoreResult = await calculateCoilParameters({
      ...validParams,
      coreMaterial: CoreMaterial.AIR
    })
    
    const ironCoreResult = await calculateCoilParameters({
      ...validParams,
      coreMaterial: CoreMaterial.IRON
    })
    
    expect(airCoreResult.success).toBe(true)
    expect(ironCoreResult.success).toBe(true)
    
    if (airCoreResult.success && ironCoreResult.success) {
      expect(ironCoreResult.data.inductance).toBeGreaterThan(airCoreResult.data.inductance)
    }
  })
})

describe('formatResult', () => {
  it('should format regular numbers correctly', () => {
    expect(formatResult(123.456, 'Ω', 3)).toBe('123 Ω')
  })

  it('should use scientific notation for very small numbers', () => {
    expect(formatResult(0.000001, 'F', 3)).toBe('1.00e-6 F')
  })

  it('should use scientific notation for very large numbers', () => {
    expect(formatResult(1000000, 'Hz', 3)).toBe('1.00e+6 Hz')
  })

  it('should handle invalid numbers', () => {
    expect(formatResult(NaN, 'Ω')).toBe('Invalid')
    expect(formatResult(Infinity, 'H')).toBe('Invalid')
  })
})
