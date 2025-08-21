import { describe, it, expect } from 'vitest'
import { calculatePipeCoilParameters, formatResult } from './calculations'
import { CalculationMode, CoilMethod } from '../types/CalculatorTypes'

describe('calculatePipeCoilParameters', () => {
  const baseParams = {
    pipeDiameter: 20,
    innerDiameter: 500,
    calculationMode: CalculationMode.COIL_LENGTH,
    coilMethod: CoilMethod.UNEVEN_LAYERS
  }

  const coilLengthParams = {
    ...baseParams,
    outerDiameter: 800,
    bundleWidth: 2000,
    calculationMode: CalculationMode.COIL_LENGTH
  }

  const endPositionParams = {
    ...baseParams,
    pipeLength: 100,
    calculationMode: CalculationMode.END_POSITION
  }

  describe('Coil Length Calculation', () => {
    it('should calculate coil length for valid parameters', async () => {
      const result = await calculatePipeCoilParameters(coilLengthParams)
      
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.coilLength).toBeGreaterThan(0)
        expect(result.data.calculationMethod).toBe(CoilMethod.UNEVEN_LAYERS)
      }
    })

    it('should fail without outer diameter for coil length calculation', async () => {
      const invalidParams = { 
        ...baseParams,
        bundleWidth: 2000,
        calculationMode: CalculationMode.COIL_LENGTH
        // outerDiameter missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Outer diameter must be greater than inner diameter')
      }
    })

    it('should fail without bundle width for coil length calculation', async () => {
      const invalidParams = { 
        ...baseParams,
        outerDiameter: 800,
        calculationMode: CalculationMode.COIL_LENGTH
        // bundleWidth missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Bundle width must be specified')
      }
    })
  })

  describe('End Position Calculation', () => {
    it('should calculate end position for valid parameters', async () => {
      const result = await calculatePipeCoilParameters(endPositionParams)
      
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.endPosition).toBeDefined()
        expect(result.data.endPosition!.outerDiameter).toBeGreaterThan(endPositionParams.innerDiameter)
        expect(result.data.endPosition!.bundleWidth).toBeGreaterThan(0)
        expect(result.data.endPosition!.bundleHeight).toBeGreaterThan(0)
        expect(result.data.calculationMethod).toBe(CoilMethod.UNEVEN_LAYERS)
      }
    })

    it('should fail without pipe length for end position calculation', async () => {
      const invalidParams = { 
        ...baseParams,
        calculationMode: CalculationMode.END_POSITION
        // pipeLength missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Pipe length must be specified')
      }
    })
  })

  describe('Parameter Validation', () => {
    it('should fail when pipe diameter >= inner diameter', async () => {
      const invalidParams = { ...coilLengthParams, pipeDiameter: 600 }
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Pipe diameter must be smaller than inner diameter')
      }
    })

    it('should fail for zero pipe diameter', async () => {
      const invalidParams = { ...coilLengthParams, pipeDiameter: 0 }
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Pipe diameter must be greater than 0')
      }
    })

    it('should fail for zero inner diameter', async () => {
      const invalidParams = { ...coilLengthParams, innerDiameter: 0 }
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Inner diameter must be greater than 0')
      }
    })
  })

  describe('Different Coil Methods', () => {
    it('should calculate results for uneven layers method', async () => {
      const unevenParams = { ...coilLengthParams, coilMethod: CoilMethod.UNEVEN_LAYERS }
      const result = await calculatePipeCoilParameters(unevenParams)
      
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.calculationMethod).toBe(CoilMethod.UNEVEN_LAYERS)
      }
    })

    it('should calculate results for even layers offset method', async () => {
      const evenParams = { ...coilLengthParams, coilMethod: CoilMethod.EVEN_LAYERS_OFFSET }
      const result = await calculatePipeCoilParameters(evenParams)
      
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.calculationMethod).toBe(CoilMethod.EVEN_LAYERS_OFFSET)
      }
    })
  })
})

describe('formatResult', () => {
  it('should format regular numbers correctly', () => {
    expect(formatResult(123.456, 'mm', 2)).toBe('123,46 mm')
  })

  it('should format small numbers with more precision', () => {
    expect(formatResult(0.005, 'm', 3)).toBe('0,005 m')
  })

  it('should format large numbers with locale formatting', () => {
    expect(formatResult(1234567, 'mm', 0)).toBe('1.234.567 mm')
  })

  it('should handle invalid numbers', () => {
    expect(formatResult(NaN, 'mm')).toBe('Invalid')
    expect(formatResult(Infinity, 'm')).toBe('Invalid')
  })

  it('should format very small numbers with fixed precision', () => {
    expect(formatResult(0.0001, 'm', 4)).toBe('0,0001 m')
  })
})