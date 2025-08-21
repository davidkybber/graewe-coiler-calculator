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
 * Based on available space and pipe dimensions
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

  // Calculate available space for coiling
  const radialSpace = (outerDiameter - innerDiameter) / 2
  const possibleLayers = Math.floor(radialSpace / pipeDiameter)
  
  // Calculate total pipe length based on coiling method
  let totalLength = 0
  
  if (coilMethod === CoilMethod.UNEVEN_LAYERS) {
    // Ungleiche Lagen: each layer can have different number of pipes
    for (let layer = 1; layer <= possibleLayers; layer++) {
      const layerRadius = innerDiameter / 2 + (layer - 0.5) * pipeDiameter
      const layerCircumference = 2 * Math.PI * layerRadius
      // Calculate actual pipe length: (axial turns) × (circumference)
      const axialTurns = bundleWidth / pipeDiameter
      const lengthInLayer = axialTurns * layerCircumference
      totalLength += lengthInLayer
    }
  } else {
    // Gleiche Lagen versetzt: consistent pipes per layer, offset arrangement
    // Calculate average circumference for all layers
    const averageRadius = innerDiameter / 2 + (possibleLayers / 2) * pipeDiameter
    const averageCircumference = 2 * Math.PI * averageRadius
    const axialTurns = bundleWidth / pipeDiameter
    const lengthPerLayer = axialTurns * averageCircumference
    totalLength = lengthPerLayer * possibleLayers
  }


  const result: PipeCoilCalculationResult = {
    coilLength: totalLength,
    calculationMethod: coilMethod,
    warning: totalLength > 10000 ? 'Calculated length exceeds typical coiling limits' : undefined
  }

  return { success: true, data: result }
}

/**
 * Calculate end position (Wickelendposition)
 * Based on pipe length and coiling parameters
 */
const calculateEndPosition = (
  params: PipeCoilCalculationParams
): Result<PipeCoilCalculationResult> => {
  const {
    pipeDiameter,
    pipeLength,
    innerDiameter,
    pipesPerLayer,
    numberOfLayers,
    coilMethod
  } = params

  if (!pipeDiameter || !pipeLength || !innerDiameter) {
    return { success: false, error: 'Missing required parameters for end position calculation' }
  }

  // Calculate based on provided parameters or estimate
  const effectivePipesPerLayer = pipesPerLayer || calculatePipesPerLayer(innerDiameter, pipeDiameter)
  const effectiveNumberOfLayers = numberOfLayers || calculateNumberOfLayers(pipeLength, effectivePipesPerLayer)
  
  // Calculate final dimensions
  const finalOuterDiameter = innerDiameter + (2 * effectiveNumberOfLayers * pipeDiameter)
  const finalBundleWidth = calculateBundleWidth(pipeLength, effectivePipesPerLayer, effectiveNumberOfLayers)
  const finalBundleHeight = effectiveNumberOfLayers * pipeDiameter

  const result: PipeCoilCalculationResult = {
    endPosition: {
      outerDiameter: finalOuterDiameter,
      bundleWidth: finalBundleWidth,
      bundleHeight: finalBundleHeight
    },
    calculationMethod: coilMethod,
    warning: 'Calculated values may vary up to 10% depending on actual coiling conditions'
  }

  return { success: true, data: result }
}

/**
 * Helper function to calculate pipes per layer
 */
const calculatePipesPerLayer = (innerDiameter: number, pipeDiameter: number): number => {
  const circumference = Math.PI * innerDiameter
  return Math.floor(circumference / pipeDiameter)
}

/**
 * Helper function to calculate number of layers needed
 */
const calculateNumberOfLayers = (
  pipeLength: number, 
  pipesPerLayer: number
): number => {
  // Simplified calculation - assumes each layer can hold similar amount
  const estimatedElementsPerLayer = pipesPerLayer * 10 // rough estimate
  return Math.ceil((pipeLength * 1000) / estimatedElementsPerLayer)
}

/**
 * Helper function to calculate bundle width
 */
const calculateBundleWidth = (
  pipeLength: number,
  _pipesPerLayer: number, // Prefix with underscore to indicate intentionally unused
  numberOfLayers: number
): number => {
  const totalElements = pipeLength * 1000 // Convert to mm
  const elementsPerLayer = totalElements / numberOfLayers
  return elementsPerLayer
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
  }

  return { success: true, data: true }
}

/**
 * Format a number for display with appropriate precision using German locale
 */
export const formatResult = (value: number, unit: string, precision: number = 2): string => {
  if (isNaN(value) || !isFinite(value)) {
    return 'Invalid'
  }

  // Use German locale formatting consistently
  const formatOptions: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: precision
  }

  // Handle different ranges appropriately
  if (value < 0.01) {
    formatOptions.maximumFractionDigits = 4
  } else if (value < 1) {
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