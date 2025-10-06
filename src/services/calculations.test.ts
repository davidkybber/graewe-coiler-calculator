import { describe, it, expect } from 'vitest'
import { calculatePipeCoilParameters, formatResult } from './calculations'
import { CalculationMode, CoilMethod } from '../types/CalculatorTypes'

/**
 * Comprehensive tests for GRAEWE Calculator
 * Tests verify that our implementation matches GRAEWE's exact algorithms:
 * - calculateWL_BB1: Wickellänge with Ungleiche Lagen (BB1)
 * - calculateWL_BB05: Wickellänge with Gleiche Lagen versetzt (BB0.5)
 * - calculateWEP_BB1: Wickelendposition with Ungleiche Lagen (BB1)
 * - calculateWEP_BB05: Wickelendposition with Gleiche Lagen versetzt (BB0.5)
 */

describe('GRAEWE Algorithm - Coil Length Calculations (Wickellänge)', () => {
  /**
   * These tests verify basic functionality
   * Actual GRAEWE website comparison tests are in a separate section
   */
  
  it('should calculate coil length for BB1 method', async () => {
    const params = {
      pipeDiameter: 20,
      innerDiameter: 500,
      outerDiameter: 800,
      bundleWidth: 2000,
      calculationMode: CalculationMode.COIL_LENGTH,
      coilMethod: CoilMethod.UNEVEN_LAYERS
    }

    const result = await calculatePipeCoilParameters(params)
    
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.coilLength).toBeGreaterThan(0)
      expect(result.data.calculationMethod).toBe(CoilMethod.UNEVEN_LAYERS)
    }
  })

  it('should calculate coil length for BB0.5 method', async () => {
    const params = {
      pipeDiameter: 20,
      innerDiameter: 500,
      outerDiameter: 800,
      bundleWidth: 2000,
      calculationMode: CalculationMode.COIL_LENGTH,
      coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
    }

    const result = await calculatePipeCoilParameters(params)
    
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.coilLength).toBeGreaterThan(0)
      expect(result.data.calculationMethod).toBe(CoilMethod.EVEN_LAYERS_OFFSET)
    }
  })

  it('should produce different results for BB1 vs BB0.5', async () => {
    const baseParams = {
      pipeDiameter: 20,
      innerDiameter: 500,
      outerDiameter: 800,
      bundleWidth: 2000,
      calculationMode: CalculationMode.COIL_LENGTH
    }

    const resultBB1 = await calculatePipeCoilParameters({
      ...baseParams,
      coilMethod: CoilMethod.UNEVEN_LAYERS
    })

    const resultBB05 = await calculatePipeCoilParameters({
      ...baseParams,
      coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
    })

    expect(resultBB1.success).toBe(true)
    expect(resultBB05.success).toBe(true)
    
    if (resultBB1.success && resultBB05.success) {
      // BB1 and BB0.5 should give different results
      expect(resultBB1.data.coilLength).not.toEqual(resultBB05.data.coilLength)
      
      // Both should be positive
      expect(resultBB1.data.coilLength).toBeGreaterThan(0)
      expect(resultBB05.data.coilLength).toBeGreaterThan(0)
    }
  })
})

describe('GRAEWE Algorithm - End Position Calculations (Wickelendposition)', () => {
  /**
   * These tests verify basic functionality
   * Actual GRAEWE website comparison tests should be added when available
   */
  
  it('should calculate end position for BB1 method', async () => {
    const params = {
      pipeDiameter: 20,
      innerDiameter: 500,
      pipeLength: 100, // meters
      bundleWidth: 2000,
      calculationMode: CalculationMode.END_POSITION,
      coilMethod: CoilMethod.UNEVEN_LAYERS
    }

    const result = await calculatePipeCoilParameters(params)
    
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.endPosition).toBeDefined()
      expect(result.data.endPosition!.outerDiameter).toBeGreaterThan(params.innerDiameter)
      expect(result.data.endPosition!.bundleWidth).toBeGreaterThan(0)
      expect(result.data.endPosition!.bundleHeight).toBeGreaterThan(0)
      expect(result.data.calculationMethod).toBe(CoilMethod.UNEVEN_LAYERS)
    }
  })

  it('should calculate end position for BB0.5 method', async () => {
    const params = {
      pipeDiameter: 20,
      innerDiameter: 500,
      pipeLength: 100, // meters
      bundleWidth: 2000,
      calculationMode: CalculationMode.END_POSITION,
      coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
    }

    const result = await calculatePipeCoilParameters(params)
    
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.endPosition).toBeDefined()
      expect(result.data.endPosition!.outerDiameter).toBeGreaterThan(params.innerDiameter)
      expect(result.data.endPosition!.bundleWidth).toBeGreaterThan(0)
      expect(result.data.endPosition!.bundleHeight).toBeGreaterThan(0)
      expect(result.data.calculationMethod).toBe(CoilMethod.EVEN_LAYERS_OFFSET)
    }
  })

  it('should calculate reasonable results for both BB1 and BB0.5', async () => {
    const baseParams = {
      pipeDiameter: 20,
      innerDiameter: 500,
      pipeLength: 100,
      bundleWidth: 2000,
      calculationMode: CalculationMode.END_POSITION
    }

    const resultBB1 = await calculatePipeCoilParameters({
      ...baseParams,
      coilMethod: CoilMethod.UNEVEN_LAYERS
    })

    const resultBB05 = await calculatePipeCoilParameters({
      ...baseParams,
      coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
    })

    expect(resultBB1.success).toBe(true)
    expect(resultBB05.success).toBe(true)
    
    if (resultBB1.success && resultBB05.success) {
      // Both should be greater than inner diameter
      expect(resultBB1.data.endPosition!.outerDiameter).toBeGreaterThan(baseParams.innerDiameter)
      expect(resultBB05.data.endPosition!.outerDiameter).toBeGreaterThan(baseParams.innerDiameter)
      
      // Both should produce reasonable results (not too large)
      expect(resultBB1.data.endPosition!.outerDiameter).toBeLessThan(2000)
      expect(resultBB05.data.endPosition!.outerDiameter).toBeLessThan(2000)
    }
  })
})

describe('Parameter Validation', () => {
  const baseParams = {
    pipeDiameter: 20,
    innerDiameter: 500,
    calculationMode: CalculationMode.COIL_LENGTH,
    coilMethod: CoilMethod.UNEVEN_LAYERS
  }

  describe('Coil Length Validation', () => {
    it('should fail without outer diameter', async () => {
      const invalidParams = { 
        ...baseParams,
        bundleWidth: 2000,
        // outerDiameter missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Outer diameter must be greater than inner diameter')
      }
    })

    it('should fail without bundle width', async () => {
      const invalidParams = { 
        ...baseParams,
        outerDiameter: 800,
        // bundleWidth missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Bundle width must be specified')
      }
    })
  })

  describe('End Position Validation', () => {
    it('should fail without pipe length', async () => {
      const invalidParams = { 
        ...baseParams,
        bundleWidth: 2000,
        calculationMode: CalculationMode.END_POSITION
        // pipeLength missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Pipe length must be specified')
      }
    })

    it('should fail without bundle width for end position', async () => {
      const invalidParams = { 
        ...baseParams,
        pipeLength: 100,
        calculationMode: CalculationMode.END_POSITION
        // bundleWidth missing
      }
      
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Bundle width must be specified')
      }
    })
  })

  describe('General Parameter Validation', () => {
    it('should fail when pipe diameter >= inner diameter', async () => {
      const invalidParams = { 
        ...baseParams,
        pipeDiameter: 600,
        outerDiameter: 800,
        bundleWidth: 2000
      }
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Pipe diameter must be smaller than inner diameter')
      }
    })

    it('should fail for zero pipe diameter', async () => {
      const invalidParams = { 
        ...baseParams,
        pipeDiameter: 0,
        outerDiameter: 800,
        bundleWidth: 2000
      }
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Pipe diameter must be greater than 0')
      }
    })

    it('should fail for zero inner diameter', async () => {
      const invalidParams = { 
        ...baseParams,
        innerDiameter: 0,
        outerDiameter: 800,
        bundleWidth: 2000
      }
      const result = await calculatePipeCoilParameters(invalidParams)
      
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error).toContain('Inner diameter must be greater than 0')
      }
    })
  })
})

describe('GRAEWE Website Comparison Tests', () => {
  /**
   * CRITICAL: These tests verify our implementation matches GRAEWE's website exactly
   * Test data from actual GRAEWE website: https://www.graewe.com/produktrechner
   */
  
  describe('Real-world example from GRAEWE website', () => {
    it('should match GRAEWE website result for d=20, di=500, da=800, b=2000 BB1', async () => {
      const params = {
        pipeDiameter: 20,
        innerDiameter: 500,
        outerDiameter: 800,
        bundleWidth: 2000,
        calculationMode: CalculationMode.COIL_LENGTH,
        coilMethod: CoilMethod.UNEVEN_LAYERS
      }

      const result = await calculatePipeCoilParameters(params)
      
      expect(result.success).toBe(true)
      if (result.success) {
        // GRAEWE website shows: 1603.425 m (with actual OD = 782 after fitting layers)
        // Using 3D helix formula with hexagonal packing
        console.log('Test 1 - BB1 Current result:', result.data.coilLength, 'm')
        console.log('Test 1 - BB1 Expected (GRAEWE):', 1603.425, 'm')
        console.log('Test 1 - BB1 Difference:', Math.abs(result.data.coilLength! - 1603.425), 'm')
        
        // Allow small floating point differences (within 1 meter = 0.1% tolerance)
        expect(result.data.coilLength).toBeCloseTo(1603.425, 0)
      }
    })

    it('should match GRAEWE website result for d=20, di=500, da=800, b=2000 BB0.5', async () => {
      const params = {
        pipeDiameter: 20,
        innerDiameter: 500,
        outerDiameter: 800,
        bundleWidth: 2000,
        calculationMode: CalculationMode.COIL_LENGTH,
        coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
      }

      const result = await calculatePipeCoilParameters(params)
      
      expect(result.success).toBe(true)
      if (result.success) {
        // GRAEWE website shows: 1595.584 m (with actual OD = 782, W = 1990)
        // Using 3D helix formula with hexagonal packing and offset
        console.log('Test 2 - BB0.5 Current result:', result.data.coilLength, 'm')
        console.log('Test 2 - BB0.5 Expected (GRAEWE):', 1595.584, 'm')
        console.log('Test 2 - BB0.5 Difference:', Math.abs(result.data.coilLength! - 1595.584), 'm')
        
        // Allow small floating point differences
        expect(result.data.coilLength).toBeCloseTo(1595.584, 0)
      }
    })

    it('should match GRAEWE website result for d=20, di=50, da=80, b=200 BB1', async () => {
      const params = {
        pipeDiameter: 20,
        innerDiameter: 50,
        outerDiameter: 80,
        bundleWidth: 200,
        calculationMode: CalculationMode.COIL_LENGTH,
        coilMethod: CoilMethod.UNEVEN_LAYERS
      }

      const result = await calculatePipeCoilParameters(params)
      
      expect(result.success).toBe(true)
      if (result.success) {
        // GRAEWE website shows: 2.208 m
        console.log('Test 3 - BB1 Small values - Current result:', result.data.coilLength, 'm')
        console.log('Test 3 - BB1 Small values - Expected (GRAEWE):', 2.208, 'm')
        console.log('Test 3 - BB1 Small values - Difference:', Math.abs(result.data.coilLength! - 2.208), 'm')
        
        // This should match closely
        expect(result.data.coilLength).toBeCloseTo(2.208, 2)
      }
    })

    it('should match GRAEWE website result for d=20, di=50, da=80, b=200 BB0.5', async () => {
      const params = {
        pipeDiameter: 20,
        innerDiameter: 50,
        outerDiameter: 80,
        bundleWidth: 200,
        calculationMode: CalculationMode.COIL_LENGTH,
        coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
      }

      const result = await calculatePipeCoilParameters(params)
      
      expect(result.success).toBe(true)
      if (result.success) {
        // GRAEWE website shows: 1.987 m
        console.log('Test 4 - BB0.5 Small values - Current result:', result.data.coilLength, 'm')
        console.log('Test 4 - BB0.5 Small values - Expected (GRAEWE):', 1.987, 'm')
        console.log('Test 4 - BB0.5 Small values - Difference:', Math.abs(result.data.coilLength! - 1.987), 'm')
        
        // This should match closely
        expect(result.data.coilLength).toBeCloseTo(1.987, 2)
      }
    })
    
    it('should return correct OD and W for d=8, di=500, da=800, b=2000 BB1', async () => {
      const params = {
        pipeDiameter: 8,
        innerDiameter: 500,
        outerDiameter: 800,
        bundleWidth: 2000,
        calculationMode: CalculationMode.COIL_LENGTH,
        coilMethod: CoilMethod.UNEVEN_LAYERS
      }

      const result = await calculatePipeCoilParameters(params)
      
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.coilLengthData).toBeDefined()
        
        // Based on GRAEWE algorithm:
        // N = floor(2000 / 8) = 250
        // W = N * ND = 250 * 8 = 2000
        expect(result.data.coilLengthData!.bundleWidth).toBe(2000)
        
        // OD should be calculated based on final layer
        expect(result.data.coilLengthData!.outerDiameter).toBeGreaterThan(500)
        expect(result.data.coilLengthData!.outerDiameter).toBeLessThanOrEqual(800)
      }
    })
    
    it('should return correct OD and W for d=8, di=500, da=800, b=2000 BB0.5', async () => {
      const params = {
        pipeDiameter: 8,
        innerDiameter: 500,
        outerDiameter: 800,
        bundleWidth: 2000,
        calculationMode: CalculationMode.COIL_LENGTH,
        coilMethod: CoilMethod.EVEN_LAYERS_OFFSET
      }

      const result = await calculatePipeCoilParameters(params)
      
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.coilLengthData).toBeDefined()
        
        // Based on GRAEWE algorithm:
        // Ni = floor(2000 / 8 - 0.5) = 249
        // W = Ni * ND + ND / 2 = 249 * 8 + 4 = 1996
        expect(result.data.coilLengthData!.bundleWidth).toBe(1996)
        
        // OD should be calculated based on final layer
        expect(result.data.coilLengthData!.outerDiameter).toBeGreaterThan(500)
        expect(result.data.coilLengthData!.outerDiameter).toBeLessThanOrEqual(800)
      }
    })
  })
})

describe('formatResult', () => {
  it('should format small numbers with 3 decimals (matching GRAEWE)', () => {
    expect(formatResult(2.208, 'm')).toBe('2,208 m')
    expect(formatResult(1.987, 'm')).toBe('1,987 m')
    expect(formatResult(5.123, 'm')).toBe('5,123 m')
  })

  it('should format medium numbers with 3 decimals', () => {
    expect(formatResult(123.456, 'm')).toBe('123,456 m')
    expect(formatResult(99.999, 'mm')).toBe('99,999 mm')
  })

  it('should format large numbers with 3 decimals', () => {
    expect(formatResult(1603.425, 'm')).toBe('1.603,425 m')
    expect(formatResult(1595.584, 'm')).toBe('1.595,584 m')
  })

  it('should format very small numbers with 4 decimals', () => {
    expect(formatResult(0.005, 'm')).toBe('0,005 m')
    expect(formatResult(0.0001, 'm')).toBe('0,0001 m')
  })

  it('should handle explicit precision parameter', () => {
    expect(formatResult(123.456789, 'mm', 2)).toBe('123,46 mm')
    expect(formatResult(123.456789, 'mm', 5)).toBe('123,45679 mm')
  })

  it('should format integers without unnecessary decimals', () => {
    expect(formatResult(100, 'mm')).toBe('100 mm')
    expect(formatResult(1000, 'm')).toBe('1.000 m')
  })

  it('should handle invalid numbers', () => {
    expect(formatResult(NaN, 'mm')).toBe('Invalid')
    expect(formatResult(Infinity, 'm')).toBe('Invalid')
  })
})