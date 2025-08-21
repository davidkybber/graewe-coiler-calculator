/**
 * Types for the GRAEWE Pipe Coiler Calculator
 * Based on GRAEWE's pipe coiling calculations for manufacturing
 */

// Result type for error handling
export type Result<T, E = string> = 
  | { success: true; data: T }
  | { success: false; error: E }

// Calculation mode
export enum CalculationMode {
  COIL_LENGTH = 'coil_length',        // Wickellänge calculation
  END_POSITION = 'end_position'       // Wickelendposition calculation
}

// Coiling method
export enum CoilMethod {
  UNEVEN_LAYERS = 'uneven_layers',              // Ungleiche Lagen
  EVEN_LAYERS_OFFSET = 'even_layers_offset'     // Gleiche Lagen versetzt
}

// Input parameters for pipe coil calculations
export interface PipeCoilCalculationParams {
  /** Pipe diameter in millimeters (Rohrdurchmesser d) */
  pipeDiameter: number
  /** Pipe length in meters (Länge L) - for end position calculation */
  pipeLength?: number
  /** Inner diameter in millimeters (Innendurchmesser ID) */
  innerDiameter: number
  /** Outer diameter in millimeters (Aussendurchmesser OD) */
  outerDiameter?: number
  /** Bundle width in millimeters (Bundbreite W) */
  bundleWidth?: number
  /** Bundle height in millimeters (Bundhöhe H) */
  bundleHeight?: number
  /** Number of pipes per layer (Rohranzahl pro Lage) */
  pipesPerLayer?: number
  /** Number of layers (Lageanzahl i) */
  numberOfLayers?: number
  /** Number of pipes on last layer (Rohranzahl auf der letzten Lage ni) */
  pipesLastLayer?: number
  /** Number of rotations (Rotationsanzahl r) */
  numberOfRotations?: number
  /** Calculation mode */
  calculationMode: CalculationMode
  /** Coiling method */
  coilMethod: CoilMethod
}

// Calculation results
export interface PipeCoilCalculationResult {
  /** Calculated coil length in meters (Wickellänge) */
  coilLength?: number
  /** End position results (Wickelendposition) */
  endPosition?: {
    outerDiameter: number
    bundleWidth: number
    bundleHeight: number
  }
  /** Calculation method used */
  calculationMethod: CoilMethod
  /** Warning message if applicable */
  warning?: string
}

// Form validation errors
export interface ValidationErrors {
  pipeDiameter?: string
  pipeLength?: string
  innerDiameter?: string
  outerDiameter?: string
  bundleWidth?: string
  bundleHeight?: string
  pipesPerLayer?: string
  numberOfLayers?: string
  pipesLastLayer?: string
  numberOfRotations?: string
  calculationMode?: string
  coilMethod?: string
}

// Calculator state
export interface CalculatorState {
  params: Partial<PipeCoilCalculationParams>
  result: Result<PipeCoilCalculationResult> | null
  errors: ValidationErrors
  isCalculating: boolean
}

// Calculator actions
export type CalculatorAction =
  | { type: 'SET_PARAM'; field: keyof PipeCoilCalculationParams; value: any }
  | { type: 'SET_ERRORS'; errors: ValidationErrors }
  | { type: 'START_CALCULATION' }
  | { type: 'SET_RESULT'; result: Result<PipeCoilCalculationResult> }
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