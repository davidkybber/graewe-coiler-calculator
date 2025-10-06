/**
 * GRAEWE Pipe Coiler Calculator - Calculation Service
 * 
 * This service contains the core calculation logic for pipe coiling parameters.
 * Based on GRAEWE's pipe coiling calculations for manufacturing applications.
 */

import { 
  PipeCoilCalculationParams, 
  PipeCoilCalculationResult, 
  Result, 
  CalculationMode,
  CoilMethod
} from '../types/CalculatorTypes'

/**
 * Calculate pipe coil parameters
 * 
 * @param params - Input parameters for the calculation
 * @returns Result containing the calculation output or error
 */
export const calculatePipeCoilParameters = async (
  params: PipeCoilCalculationParams
): Promise<Result<PipeCoilCalculationResult>> => {
  try {
    // Validate input parameters
    const validation = validateCalculationParams(params)
    if (!validation.success) {
      return validation
    }

    if (params.calculationMode === CalculationMode.COIL_LENGTH) {
      return calculateCoilLength(params)
    } else {
      return calculateEndPosition(params)
    }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown calculation error'
    return { success: false, error: errorMessage }
  }
}

/**
 * Calculate coil length (Wickellänge)
 * Based on GRAEWE's ACTUAL algorithm using 3D helical winding
 * 
 * GRAEWE uses hexagonal close packing with 3D helix formula:
 * - Layer height: ND × √3/2 (hexagonal packing)
 * - Helix length: √((π × diameter)² + pitch²) × turns
 * - BB1: Alternating pipe count (odd layers: N, even layers: N-1)
 * - BB0.5: Constant pipe count per layer
 * - Iteratively fits layers until OD is exceeded
 * 
 * Variables (matching GRAEWE notation):
 * - ND = pipe diameter (Rohrdurchmesser)
 * - ID = inner diameter (Innendurchmesser)
 * - OD = outer diameter (Außendurchmesser)
 * - W = bundle width (Bundbreite)
 * - ODi = diameter at layer i
 * - Ni = number of pipes in layer i
 * - Li = length of pipe in layer i
 */
const calculateCoilLength = (
  params: PipeCoilCalculationParams
): Result<PipeCoilCalculationResult> => {
  const {
    pipeDiameter,
    innerDiameter,
    outerDiameter,
    bundleWidth,
    coilMethod
  } = params

  if (!pipeDiameter || !innerDiameter || !outerDiameter || !bundleWidth) {
    return { success: false, error: 'Missing required parameters for coil length calculation' }
  }

  const ND = pipeDiameter
  const ID = innerDiameter
  const OD = outerDiameter
  const W = bundleWidth

  let i = 1  // Layer counter
  let WL = 0  // Total coil length in mm
  let ODi = ID  // Current layer diameter
  let calculatedOD = 0  // Final outer diameter
  let calculatedW = 0  // Actual bundle width

  if (coilMethod === CoilMethod.UNEVEN_LAYERS) {
    // Method BB1 (Ungleiche Lagen) - Alternating pipe count
    const N = Math.floor(W / ND)  // Base number of pipes per layer

    do {
      // Calculate diameter at current layer using hexagonal packing
      // ODi = ID + ND + 2(i-1) × ND × √3/2
      const IDND = ID + ND
      const additionalDi = 2 * (i - 1) * (ND * (Math.sqrt(3) / 2))
      ODi = IDND + additionalDi
      
      // Calculate diameter at next layer to check if we exceed OD
      const additionalDi_next = 2 * i * (ND * (Math.sqrt(3) / 2))
      const ODi_next = IDND + additionalDi_next
      
      // Alternating pipe count: odd layers = N, even layers = N-1
      const Ni = (i % 2 === 1) ? N : (N - 1)
      
      // 3D Helix length formula: L = √((π × D)² + pitch²) × turns
      const var_2PR2 = Math.pow(Math.PI * ODi, 2)
      const var_Wurzel = Math.sqrt(var_2PR2 + Math.pow(ND, 2))
      const Li = var_Wurzel * Ni
      
      WL += Li
      
      // Check if next layer would exceed OD
      if ((ODi_next + ND) > OD) {
        break
      }
      
      i++
    } while (true)
    
    // Calculate final outer diameter and bundle width (matching GRAEWE)
    calculatedOD = Math.round(ODi + ND)
    calculatedW = N * ND
    
  } else {
    // Method BB0.5 (Gleiche Lagen versetzt) - Constant pipe count (offset)
    const Ni = Math.floor(W / ND - 0.5)  // Constant reduced count for offset

    do {
      // Calculate diameter at current layer using hexagonal packing
      ODi = ID + ND + (2 * (i - 1) * (ND * (Math.sqrt(3) / 2)))
      
      // Calculate diameter at next layer
      const ODi_next = ID + ND + (2 * i * (ND * (Math.sqrt(3) / 2)))
      
      // 3D Helix length formula
      const Li = Math.sqrt(Math.pow(Math.PI * ODi, 2) + Math.pow(ND, 2)) * Ni
      
      WL += Li
      
      // Check if next layer would exceed OD
      if ((ODi_next + ND) > OD) {
        break
      }
      
      i++
    } while (true)
    
    // Calculate final outer diameter and bundle width (matching GRAEWE)
    calculatedOD = Math.round(ODi + ND)
    calculatedW = Ni * ND + ND / 2
  }

  // Convert from millimeters to meters
  const totalLength = Math.round(WL) / 1000

  const result: PipeCoilCalculationResult = {
    coilLength: totalLength,
    coilLengthData: {
      coilLength: totalLength,
      outerDiameter: calculatedOD,
      bundleWidth: calculatedW
    },
    calculationMethod: coilMethod,
    warning: undefined
  }

  return { success: true, data: result }
}

/**
 * Calculate end position (Wickelendposition)
 * Based on GRAEWE's ACTUAL algorithm using 3D helical winding
 * 
 * Uses same hexagonal packing and 3D helix formula as coil length calculation
 * Iteratively adds layers until target pipe length is reached
 * 
 * Variables (matching GRAEWE notation):
 * - ND = pipe diameter (Rohrdurchmesser)
 * - L = pipe length target (Rohrlänge)
 * - RD = inner diameter (Innendurchmesser) 
 * - CPL = pipes per layer count
 * - RDa = resulting outer diameter (Außendurchmesser)
 */
const calculateEndPosition = (
  params: PipeCoilCalculationParams
): Result<PipeCoilCalculationResult> => {
  const {
    pipeDiameter,
    pipeLength,
    innerDiameter,
    bundleWidth,
    coilMethod
  } = params

  if (!pipeDiameter || !pipeLength || !innerDiameter || !bundleWidth) {
    return { success: false, error: 'Missing required parameters for end position calculation' }
  }

  const ND = pipeDiameter
  const L = pipeLength * 1000  // Convert meters to millimeters
  const RD = innerDiameter
  const W = bundleWidth
  const CPL = Math.floor(W / ND)  // Pipes per layer based on bundle width
  
  let i = 1  // Layer counter
  let Lm = 0  // Accumulated pipe length
  let Lmi = 0  // Length up to previous layer
  let r = 0  // Total rotations
  let RDi = 0  // Diameter at current layer
  let BB = 0  // Bundle width
  let BH = 0  // Bundle height
  let RDa = 0  // Resulting outer diameter
  
  const G = 1  // Safety factor (GRAEWE uses this)

  if (coilMethod === CoilMethod.UNEVEN_LAYERS) {
    // Method BB1 (Ungleiche Lagen) - Alternating pipe count
    BB = ND * CPL
    
    do {
      // Calculate diameter at current layer using hexagonal packing
      RDi = RD + ND + (2 * (i - 1) * (ND * (Math.sqrt(3) / 2)))
      
      let ni = 0  // Pipes in current layer
      let Li = 0  // Length in current layer
      
      // Alternating pipe count
      if (i % 2 !== 0) {
        // Odd layer: full count (CPL)
        do {
          ni = ni + 0.25
          r = r + 0.25
          Li = ni * Math.sqrt(Math.pow(3.1415 * RDi, 2) + Math.pow(ND, 2))
          Lm = Lmi + Li
        } while (!((ni >= CPL) || (Lm >= (L * G))))
        
        Lmi = Lmi + (CPL * Math.sqrt(Math.pow(3.1415 * RDi, 2) + Math.pow(ND, 2)))
      } else {
        // Even layer: reduced count (CPL - 1)
        do {
          ni = ni + 0.25
          r = r + 0.25
          Li = ni * Math.sqrt(Math.pow(3.1415 * RDi, 2) + Math.pow(ND, 2))
          Lm = Lmi + Li
        } while (!((ni >= CPL - 1) || (Lm >= (L * G))))
        
        Lmi = Lmi + ((CPL - 1) * Math.sqrt(Math.pow(3.1415 * RDi, 2) + Math.pow(ND, 2)))
      }
      
      if (!(Lm >= (L * G))) {
        i++
      }
    } while (!(Lm >= (L * G)))
    
    BH = Math.round(ND + ((i - 1) * (ND * (Math.sqrt(3) / 2))))
    RDa = Math.round(RD + 2 * (ND + ((i - 1) * (ND * (Math.sqrt(3) / 2)))))
    
  } else {
    // Method BB0.5 (Gleiche Lagen versetzt) - Constant pipe count
    BB = ND * (CPL + 0.5)
    
    do {
      // Calculate diameter at current layer using hexagonal packing
      RDi = RD + ND + (2 * (i - 1) * (ND * (Math.sqrt(3) / 2)))
      
      let ni = 0  // Pipes in current layer
      let Li = 0  // Length in current layer
      
      // Constant count per layer (CPL)
      do {
        ni = ni + 0.25
        r = r + 0.25
        Li = ni * Math.sqrt(Math.pow(3.1415 * RDi, 2) + Math.pow(ND, 2))
        Lm = Lmi + Li
      } while (!((ni >= CPL) || (Lm >= (L * G))))
      
      Lmi = Lmi + (CPL * Math.sqrt(Math.pow(3.1415 * RDi, 2) + Math.pow(ND, 2)))
      
      if (!(Lm >= (L * G))) {
        i++
      }
    } while (!(Lm >= (L * G)))
    
    BH = Math.round(ND + ((i - 1) * (ND * (Math.sqrt(3) / 2))))
    RDa = Math.round(RD + 2 * (ND + ((i - 1) * (ND * (Math.sqrt(3) / 2)))))
  }

  const result: PipeCoilCalculationResult = {
    endPosition: {
      outerDiameter: RDa,
      bundleWidth: BB,
      bundleHeight: BH
    },
    calculationMethod: coilMethod,
    warning: undefined
  }

  return { success: true, data: result }
}

/**
 * Validate calculation parameters
 */
const validateCalculationParams = (
  params: PipeCoilCalculationParams
): Result<true> => {
  const { pipeDiameter, innerDiameter, calculationMode } = params

  if (!pipeDiameter || pipeDiameter <= 0) {
    return { success: false, error: 'Pipe diameter must be greater than 0' }
  }

  if (!innerDiameter || innerDiameter <= 0) {
    return { success: false, error: 'Inner diameter must be greater than 0' }
  }

  if (pipeDiameter >= innerDiameter) {
    return { success: false, error: 'Pipe diameter must be smaller than inner diameter' }
  }

  if (calculationMode === CalculationMode.COIL_LENGTH) {
    if (!params.outerDiameter || params.outerDiameter <= innerDiameter) {
      return { success: false, error: 'Outer diameter must be greater than inner diameter for coil length calculation' }
    }
    if (!params.bundleWidth || params.bundleWidth <= 0) {
      return { success: false, error: 'Bundle width must be specified for coil length calculation' }
    }
  }

  if (calculationMode === CalculationMode.END_POSITION) {
    if (!params.pipeLength || params.pipeLength <= 0) {
      return { success: false, error: 'Pipe length must be specified for end position calculation' }
    }
    if (!params.bundleWidth || params.bundleWidth <= 0) {
      return { success: false, error: 'Bundle width must be specified for end position calculation' }
    }
  }

  return { success: true, data: true }
}

/**
 * Format a number for display with appropriate precision using German locale
 * Matches GRAEWE's display precision:
 * - Values < 10: 3 decimal places
 * - Values >= 10: 2 decimal places
 * - Very small values (< 0.01): 4 decimal places
 */
export const formatResult = (value: number, unit: string, precision?: number): string => {
  if (isNaN(value) || !isFinite(value)) {
    return 'Invalid'
  }

  // Use German locale formatting consistently
  const formatOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2  // Default
  }

  // Determine precision based on value magnitude (matching GRAEWE's behavior)
  if (precision !== undefined) {
    // Explicit precision provided
    formatOptions.maximumFractionDigits = precision
  } else if (value < 0.01) {
    // Very small values: 4 decimals
    formatOptions.maximumFractionDigits = 4
  } else if (value < 10) {
    // Small values (< 10): 3 decimals (like GRAEWE shows 2.208, 1.987)
    formatOptions.maximumFractionDigits = 3
  } else if (value < 100) {
    // Medium values: 3 decimals
    formatOptions.maximumFractionDigits = 3
  } else {
    // Large values: 2 decimals (like GRAEWE shows 1603.425, 1595.584)
    formatOptions.maximumFractionDigits = 3
  }

  const formattedNumber = value.toLocaleString('de-DE', formatOptions)
  return `${formattedNumber} ${unit}`
}

/**
 * Get recommended coiling method based on parameters
 */
export const getRecommendedCoilMethod = (
  pipeDiameter: number,
  innerDiameter: number
): CoilMethod => {
  const ratio = innerDiameter / pipeDiameter
  
  // If ratio is high, uneven layers might be more efficient
  return ratio > 50 ? CoilMethod.UNEVEN_LAYERS : CoilMethod.EVEN_LAYERS_OFFSET
}

// Legacy function for backward compatibility - to be removed
export const calculateCoilParameters = calculatePipeCoilParameters