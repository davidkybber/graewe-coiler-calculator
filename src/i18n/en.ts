/**
 * English translations for GRAEWE Coiler Calculator
 * This serves as a fallback and reference for other languages
 */

import { TranslationKeys } from './de'

export const en: TranslationKeys = {
  // Error messages - Calculations
  errors: {
    unknownCalculationError: 'Unknown calculation error',
    missingParamsCoilLength: 'Missing required parameters for coil length calculation',
    missingParamsEndPosition: 'Missing required parameters for end position calculation',
    pipeDiameterGreaterThanZero: 'Pipe diameter must be greater than 0',
    innerDiameterGreaterThanZero: 'Inner diameter must be greater than 0',
    pipeDiameterSmallerThanInner: 'Pipe diameter must be smaller than inner diameter',
    outerDiameterGreaterThanInner: 'Outer diameter must be greater than inner diameter for coil length calculation',
    bundleWidthRequired: 'Bundle width must be specified for coil length calculation',
    pipeLengthRequired: 'Pipe length must be specified for end position calculation',
    pipesPerLayerRequired: 'Pipes per layer must be specified for end position calculation',
    calculationFailed: 'Calculation failed',
    invalidNumber: 'Invalid'
  },

  // Error Boundary
  errorBoundary: {
    title: 'Something went wrong',
    description: 'The calculator encountered an unexpected error. Please refresh the page to try again.',
    refreshButton: 'Refresh Page',
    errorDetails: 'Error Details (Development)'
  },

  // Layout / Header / Footer
  layout: {
    productCalculator: 'Product Calculator',
    headerSubtitle: 'Professional Coil Calculations',
    headerDescription: 'Coil Length & End Position',
    quickLinks: 'Quick Links',
    madeWithLove: 'Made with ❤️ for manufacturing',
    companyInfo: 'Your partner for professional extrusion systems and product calculations in plastics processing.',
    visitWebsite: 'Visit Website',
    originalCalculator: 'Original Product Calculator',
    ourProducts: 'Our Products',
    contact: 'Contact',
    aboutCalculator: 'About this Calculator',
    aboutDescription: 'Progressive Web App for mobile and desktop use. Optimized for professional users in manufacturing.',
    version: 'Version 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. All rights reserved.',
    imprint: 'Imprint',
    privacy: 'Privacy'
  },

  // Provider errors
  provider: {
    contextError: 'useCalculator must be used within a CalculatorProvider'
  },

  calculator: {
    title: 'GRAEWE Product Calculator',
    subtitle: 'Calculation of coil length and end position for pipes and profiles',
    selectCalculationType: 'Select calculation type',
    coilLength: 'Coil Length',
    coilLengthDescription: 'Calculation of maximum pipe length',
    endPosition: 'End Position',
    endPositionDescription: 'Calculation of end position',
    basicParameters: 'Basic Parameters',
    pipeDiameter: 'Pipe diameter d [mm]',
    innerDiameter: 'Inner diameter ID [mm]',
    outerDiameter: 'Outer diameter OD [mm]',
    bundleWidth: 'Bundle width W [mm]',
    pipeLength: 'Length L [m]',
    pipesPerLayer: 'Pipes per layer [pcs]',
    coilingMethod: 'Coiling Method',
    unevenLayers: 'Uneven Layers',
    unevenLayersDescription: 'Variable number of pipes per layer',
    evenLayersOffset: 'Even Layers Offset',
    evenLayersOffsetDescription: 'Constant number of pipes, offset',
    calculate: 'Calculate',
    calculating: 'Calculating...',
    reset: 'Reset',
    readyToCalculate: 'Ready to calculate',
    readyToCalculateDescription: 'Enter the required parameters to start the calculation',
    calculationError: 'Calculation Error',
    calculationSuccess: 'Calculation successful',
    results: 'Results',
    coilLengthResult: 'Coil Length',
    numberOfLayers: 'Number of layers i [pcs]',
    pipesOnLastLayer: 'Pipes on last layer ni [pcs]',
    numberOfRotations: 'Number of rotations r [pcs]',
    bundleHeight: 'Bundle height H [mm]',
    disclaimer: 'Calculated coil lengths may vary by up to 10%. We assume no responsibility for the accuracy of the results.',
    disclaimerTitle: 'Notice'
  }
}
