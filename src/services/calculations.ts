/**
 * GRAEWE Coiler Calculator - Calculation Service
 * 
 * This service contains the core calculation logic for coil parameters.
 * The current implementation uses placeholder algorithms that should be
 * replaced with the actual GRAEWE calculation formulas.
 */

import { 
  CoilCalculationParams, 
  CoilCalculationResult, 
  Result, 
  CoreMaterial, 
  WireMaterial 
} from '../types/CalculatorTypes'

// Material constants (placeholder values)
const CORE_MATERIAL_PERMEABILITY = {
  [CoreMaterial.AIR]: 1.0,
  [CoreMaterial.IRON]: 5000,
  [CoreMaterial.FERRITE]: 2300,
  [CoreMaterial.POWDERED_IRON]: 125
} as const

const WIRE_MATERIAL_RESISTIVITY = {
  [WireMaterial.COPPER]: 1.68e-8, // ohm⋅m at 20°C
  [WireMaterial.ALUMINUM]: 2.65e-8,
  [WireMaterial.SILVER]: 1.59e-8
} as const

/**
 * Calculate coil parameters
 * 
 * @param params - Input parameters for the calculation
 * @returns Result containing the calculation output or error
 */
export const calculateCoilParameters = async (
  params: CoilCalculationParams
): Promise<Result<CoilCalculationResult>> => {
  try {
    // Validate input parameters
    const validation = validateCalculationParams(params)
    if (!validation.success) {
      return validation
    }

    // Extract parameters
    const {
      wireDiameter,
      numberOfTurns,
      coreDiameter,
      coreLength,
      coreMaterial,
      wireMaterial
    } = params

    // Convert millimeters to meters for calculations
    const wireDiameterM = wireDiameter / 1000
    const coreDiameterM = coreDiameter / 1000
    const coreLengthM = coreLength / 1000

    // Calculate inductance using Wheeler's formula (placeholder)
    // L = (μ₀ * μᵣ * N² * A) / l
    const mu0 = 4 * Math.PI * 1e-7 // Permeability of free space
    const muR = CORE_MATERIAL_PERMEABILITY[coreMaterial]
    const coreArea = Math.PI * Math.pow(coreDiameterM / 2, 2)
    const inductance = (mu0 * muR * Math.pow(numberOfTurns, 2) * coreArea) / coreLengthM

    // Calculate wire length
    // Approximation: Wire length ≈ N * π * (core diameter + wire diameter)
    const averageLoopDiameter = coreDiameterM + wireDiameterM
    const wireLength = numberOfTurns * Math.PI * averageLoopDiameter

    // Calculate resistance
    // R = ρ * l / A
    const wireResistivity = WIRE_MATERIAL_RESISTIVITY[wireMaterial]
    const wireCrossSection = Math.PI * Math.pow(wireDiameterM / 2, 2)
    const resistance = (wireResistivity * wireLength) / wireCrossSection

    // Calculate self-capacitance (simplified approximation)
    // C ≈ ε₀ * εᵣ * l / ln(D/d) where D is coil diameter, d is wire diameter
    const epsilon0 = 8.854e-12 // Permittivity of free space
    const epsilonR = 1.0 // Relative permittivity (air approximation)
    const selfCapacitance = (epsilon0 * epsilonR * coreLengthM) / 
      Math.log(coreDiameterM / wireDiameterM)

    // Calculate resonant frequency
    // f₀ = 1 / (2π√(LC))
    const resonantFrequency = 1 / (2 * Math.PI * Math.sqrt(inductance * selfCapacitance))

    // Calculate quality factor (simplified)
    // Q = ωL / R = 2πfL / R
    const qualityFactor = (2 * Math.PI * resonantFrequency * inductance) / resistance

    const result: CoilCalculationResult = {
      inductance,
      resistance,
      qualityFactor,
      wireLength,
      selfCapacitance,
      resonantFrequency
    }

    return { success: true, data: result }

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown calculation error'
    return { success: false, error: errorMessage }
  }
}

/**
 * Validate calculation parameters
 */
const validateCalculationParams = (
  params: CoilCalculationParams
): Result<true> => {
  const { wireDiameter, numberOfTurns, coreDiameter, coreLength } = params

  if (wireDiameter <= 0) {
    return { success: false, error: 'Wire diameter must be greater than 0' }
  }

  if (numberOfTurns <= 0 || !Number.isInteger(numberOfTurns)) {
    return { success: false, error: 'Number of turns must be a positive integer' }
  }

  if (coreDiameter <= 0) {
    return { success: false, error: 'Core diameter must be greater than 0' }
  }

  if (coreLength <= 0) {
    return { success: false, error: 'Core length must be greater than 0' }
  }

  if (wireDiameter >= coreDiameter) {
    return { success: false, error: 'Wire diameter must be smaller than core diameter' }
  }

  return { success: true, data: true }
}

/**
 * Format a number for display with appropriate precision
 */
export const formatResult = (value: number, unit: string, precision: number = 3): string => {
  if (isNaN(value) || !isFinite(value)) {
    return 'Invalid'
  }

  // Handle very small or very large numbers with scientific notation
  if (Math.abs(value) <= 1e-6 || Math.abs(value) >= 1e6) {
    return `${value.toExponential(precision - 1)} ${unit}`
  }

  return `${value.toPrecision(precision)} ${unit}`
}

/**
 * Calculate optimal wire gauge recommendation
 * (Placeholder implementation)
 */
export const getWireGaugeRecommendation = (
  coreDiameter: number,
  numberOfTurns: number
): string => {
  // Simplified recommendation logic
  const approximateWireDiameter = coreDiameter / (numberOfTurns * 1.5)
  
  if (approximateWireDiameter > 2.0) return 'AWG 12 or larger'
  if (approximateWireDiameter > 1.5) return 'AWG 14'
  if (approximateWireDiameter > 1.0) return 'AWG 16'
  if (approximateWireDiameter > 0.8) return 'AWG 18'
  if (approximateWireDiameter > 0.6) return 'AWG 20'
  if (approximateWireDiameter > 0.4) return 'AWG 22'
  return 'AWG 24 or smaller'
}
