/**
 * Validation utilities for pipe coil calculator form inputs
 */

import { ValidationErrors, ValidationSchema, PipeCoilCalculationParams, CalculationMode } from '../types/CalculatorTypes'

// Validation schema for pipe coil calculator inputs
export const pipeCoilValidationSchema: ValidationSchema = {
  pipeDiameter: {
    required: true,
    min: 0.1,
    max: 500,
    step: 0.1,
    message: 'Rohrdurchmesser muss zwischen 0.1 und 500 mm liegen'
  },
  pipeLength: {
    required: false, // Required only for end position calculation
    min: 1,
    max: 10000,
    step: 1,
    message: 'Länge muss zwischen 1 und 10000 m liegen'
  },
  innerDiameter: {
    required: true,
    min: 1,
    max: 5000,
    step: 1,
    message: 'Innendurchmesser muss zwischen 1 und 5000 mm liegen'
  },
  outerDiameter: {
    required: false, // Required only for coil length calculation
    min: 1,
    max: 5000,
    step: 1,
    message: 'Aussendurchmesser muss zwischen 1 und 5000 mm liegen'
  },
  bundleWidth: {
    required: false, // Required only for coil length calculation
    min: 1,
    max: 10000,
    step: 1,
    message: 'Bundbreite muss zwischen 1 und 10000 mm liegen'
  },
  calculationMode: {
    required: true,
    message: 'Bitte wählen Sie eine Berechnungsart'
  },
  coilMethod: {
    required: true,
    message: 'Bitte wählen Sie ein Wickelbild'
  }
}

/**
 * Validate form values against schema with dynamic requirements
 */
export const validateForm = (
  values: Partial<PipeCoilCalculationParams>,
  schema: ValidationSchema = pipeCoilValidationSchema
): ValidationErrors => {
  const errors: ValidationErrors = {}

  // Get calculation mode to determine required fields
  const calculationMode = values.calculationMode

  Object.entries(schema).forEach(([field, rule]) => {
    const value = values[field as keyof PipeCoilCalculationParams]
    
    // Determine if field is required based on calculation mode
    let isRequired = rule.required
    
    if (calculationMode === CalculationMode.COIL_LENGTH) {
      if (field === 'outerDiameter' || field === 'bundleWidth') {
        isRequired = true
      }
      if (field === 'pipeLength') {
        isRequired = false
      }
    } else if (calculationMode === CalculationMode.END_POSITION) {
      if (field === 'pipeLength') {
        isRequired = true
      }
      if (field === 'outerDiameter' || field === 'bundleWidth') {
        isRequired = false
      }
    }

    // Check required fields - handle different value types
    const isEmpty = value === null || 
                   value === undefined || 
                   (typeof value === 'string' && value.trim() === '') ||
                   (typeof value === 'number' && isNaN(value))
    
    if (isRequired && isEmpty) {
      errors[field as keyof ValidationErrors] = `${getFieldDisplayName(field)} ist erforderlich`
      return
    }

    // Skip further validation if field is empty and not required
    if (isEmpty) {
      return
    }

    // Validate numeric fields
    if (typeof value === 'number') {
      if (rule.min !== undefined && value < rule.min) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${getFieldDisplayName(field)} muss mindestens ${rule.min} sein`
      }

      if (rule.max !== undefined && value > rule.max) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${getFieldDisplayName(field)} darf höchstens ${rule.max} sein`
      }

      if (isNaN(value) || !isFinite(value)) {
        errors[field as keyof ValidationErrors] = 
          `${getFieldDisplayName(field)} muss eine gültige Zahl sein`
      }
    }

    // Validate string patterns
    if (typeof value === 'string' && rule.pattern) {
      if (!rule.pattern.test(value)) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${getFieldDisplayName(field)} Format ist ungültig`
      }
    }
  })

  // Custom cross-field validation
  if (values.pipeDiameter && values.innerDiameter) {
    if (values.pipeDiameter >= values.innerDiameter) {
      errors.pipeDiameter = 'Rohrdurchmesser muss kleiner als der Innendurchmesser sein'
    }
  }

  if (values.innerDiameter && values.outerDiameter) {
    if (values.innerDiameter >= values.outerDiameter) {
      errors.outerDiameter = 'Aussendurchmesser muss größer als der Innendurchmesser sein'
    }
  }

  return errors
}

/**
 * Get display name for form field
 */
const getFieldDisplayName = (field: string): string => {
  const displayNames: Record<string, string> = {
    pipeDiameter: 'Rohrdurchmesser',
    pipeLength: 'Länge',
    innerDiameter: 'Innendurchmesser',
    outerDiameter: 'Aussendurchmesser',
    bundleWidth: 'Bundbreite',
    bundleHeight: 'Bundhöhe',
    calculationMode: 'Berechnungsart',
    coilMethod: 'Wickelbild'
  }
  
  return displayNames[field] || field
}

/**
 * Check if form has any validation errors
 */
export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.values(errors).some(error => error !== undefined && error !== '')
}

/**
 * Format number input to ensure proper decimal places
 */
export const formatNumberInput = (value: string, decimals: number = 2): string => {
  // Remove any non-numeric characters except decimal point
  const cleaned = value.replace(/[^0-9.]/g, '')
  
  // Ensure only one decimal point
  const parts = cleaned.split('.')
  if (parts.length > 2) {
    return parts[0] + '.' + parts.slice(1).join('')
  }
  
  // Limit decimal places
  if (parts.length === 2 && parts[1].length > decimals) {
    return parts[0] + '.' + parts[1].substring(0, decimals)
  }
  
  return cleaned
}

/**
 * Parse string input to number with validation
 */
export const parseNumberInput = (value: string): number | null => {
  if (value === '' || value === undefined || value === null) {
    return null
  }
  
  const parsed = parseFloat(value)
  return isNaN(parsed) ? null : parsed
}

/**
 * Debounce function for real-time validation
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}