/**
 * Validation utilities for form inputs
 */

import { ValidationErrors, ValidationSchema, CoilCalculationParams } from '../types/CalculatorTypes'

// Validation schema for calculator inputs
export const calculatorValidationSchema: ValidationSchema = {
  wireDiameter: {
    required: true,
    min: 0.01,
    max: 50,
    step: 0.01,
    message: 'Wire diameter must be between 0.01 and 50 mm'
  },
  numberOfTurns: {
    required: true,
    min: 1,
    max: 10000,
    step: 1,
    message: 'Number of turns must be between 1 and 10000'
  },
  coreDiameter: {
    required: true,
    min: 0.1,
    max: 1000,
    step: 0.1,
    message: 'Core diameter must be between 0.1 and 1000 mm'
  },
  coreLength: {
    required: true,
    min: 0.1,
    max: 1000,
    step: 0.1,
    message: 'Core length must be between 0.1 and 1000 mm'
  },
  coreMaterial: {
    required: true,
    message: 'Please select a core material'
  },
  wireMaterial: {
    required: true,
    message: 'Please select a wire material'
  }
}

/**
 * Validate form values against schema
 */
export const validateForm = (
  values: Partial<CoilCalculationParams>,
  schema: ValidationSchema = calculatorValidationSchema
): ValidationErrors => {
  const errors: ValidationErrors = {}

  Object.entries(schema).forEach(([field, rule]) => {
    const value = values[field as keyof CoilCalculationParams]

    // Check required fields
    if (rule.required && !value) {
      errors[field as keyof ValidationErrors] = rule.message || `${field} is required`
      return
    }

    // Skip further validation if field is empty and not required
    if (!value) {
      return
    }

    // Validate numeric fields
    if (typeof value === 'number') {
      if (rule.min !== undefined && value < rule.min) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${field} must be at least ${rule.min}`
      }

      if (rule.max !== undefined && value > rule.max) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${field} must be at most ${rule.max}`
      }

      if (isNaN(value) || !isFinite(value)) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${field} must be a valid number`
      }
    }

    // Validate string patterns
    if (typeof value === 'string' && rule.pattern) {
      if (!rule.pattern.test(value)) {
        errors[field as keyof ValidationErrors] = 
          rule.message || `${field} format is invalid`
      }
    }
  })

  // Custom cross-field validation
  if (values.wireDiameter && values.coreDiameter) {
    if (values.wireDiameter >= values.coreDiameter) {
      errors.wireDiameter = 'Wire diameter must be smaller than core diameter'
    }
  }

  return errors
}

/**
 * Check if form has any validation errors
 */
export const hasValidationErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0
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
