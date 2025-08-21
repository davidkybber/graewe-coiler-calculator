/**
 * Types for the GRAEWE Coiler Calculator
 */

// Result type for error handling
export type Result<T, E = string> = 
  | { success: true; data: T }
  | { success: false; error: E }

// Input parameters for coil calculations
export interface CoilCalculationParams {
  /** Wire diameter in millimeters */
  wireDiameter: number
  /** Number of turns in the coil */
  numberOfTurns: number
  /** Core diameter in millimeters */
  coreDiameter: number
  /** Core length in millimeters */
  coreLength: number
  /** Core material type */
  coreMaterial: CoreMaterial
  /** Wire material type */
  wireMaterial: WireMaterial
}

// Available core materials
export enum CoreMaterial {
  AIR = 'air',
  IRON = 'iron',
  FERRITE = 'ferrite',
  POWDERED_IRON = 'powdered_iron'
}

// Available wire materials  
export enum WireMaterial {
  COPPER = 'copper',
  ALUMINUM = 'aluminum',
  SILVER = 'silver'
}

// Calculation results
export interface CoilCalculationResult {
  /** Inductance in henries */
  inductance: number
  /** Resistance in ohms */
  resistance: number
  /** Quality factor (Q) */
  qualityFactor: number
  /** Wire length in meters */
  wireLength: number
  /** Coil capacitance in farads */
  selfCapacitance: number
  /** Resonant frequency in hertz */
  resonantFrequency: number
}

// Form validation errors
export interface ValidationErrors {
  wireDiameter?: string
  numberOfTurns?: string
  coreDiameter?: string
  coreLength?: string
  coreMaterial?: string
  wireMaterial?: string
}

// Calculator state
export interface CalculatorState {
  params: Partial<CoilCalculationParams>
  result: Result<CoilCalculationResult> | null
  errors: ValidationErrors
  isCalculating: boolean
}

// Calculator actions
export type CalculatorAction =
  | { type: 'SET_PARAM'; field: keyof CoilCalculationParams; value: any }
  | { type: 'SET_ERRORS'; errors: ValidationErrors }
  | { type: 'START_CALCULATION' }
  | { type: 'SET_RESULT'; result: Result<CoilCalculationResult> }
  | { type: 'RESET_CALCULATOR' }

// Validation schema
export interface ValidationRule {
  required?: boolean
  min?: number
  max?: number
  step?: number
  pattern?: RegExp
  message?: string
}

export interface ValidationSchema {
  [key: string]: ValidationRule
}
