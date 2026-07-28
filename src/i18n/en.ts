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
    privacy: 'Privacy',
    company: 'Company',
    products: 'Products',
    service: 'Service',
    social: 'Social',
    language: 'Language',
    whoIsGraewe: 'Who is GRAEWE?',
    whatDoesGraewe: 'What does GRAEWE do?',
    graeweGroup: 'The GRAEWE Group',
    pipeExtrusion: 'Pipe Extrusion',
    profileExtrusion: 'Profile Extrusion',
    sheetExtrusion: 'Sheet Extrusion',
    news: 'News',
    usedMachines: 'Used Machines',
    downloads: 'Downloads',
    visitWebsiteCta: 'Discover our product range at graewe.com',
    goToWebsite: 'Go to Website'
  },

  // Provider errors
  share: {
    button: 'Share',
    title: 'Share configuration',
    description: 'This link opens the calculator with your current values and language.',
    copy: 'Copy link',
    copied: 'Copied!'
  },

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
    unevenLayersDiagramAlt: 'Uneven Layers winding diagram – shows pipe diameter (d), inner diameter (ID), outer diameter (OD) and bundle width (W)',
    evenLayersOffset: 'Even Layers Offset',
    evenLayersOffsetDescription: 'Constant number of pipes, offset',
    evenLayersOffsetDiagramAlt: 'Even Layers Offset winding diagram – shows pipe diameter (d), inner diameter (ID), outer diameter (OD) and bundle width (W)',
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
  },

  seo: {
    title: 'Pipe Coil Length Calculator | GRAEWE Coiler Calculator',
    description:
      'Free online calculator for coil length and coiling end position of pipes and profiles: get number of layers, pipes per layer, bundle height and outer diameter instantly.',
    keywords:
      'coil length calculator, coiling end position, pipe coiler, bundle width, pipe extrusion, winding calculator, GRAEWE',
    heading: 'Coil length & end position calculator for pipes',
    aboutTitle: 'About the GRAEWE coiler calculator',
    aboutIntro:
      'The GRAEWE Coiler Calculator determines the coil length and the coiling end position when winding pipes and profiles. It uses the same formulas as GRAEWE coilers: hexagonal packing of the layers with a layer height of d × √3/2, and the three-dimensional helix length of every single layer. All dimensions are entered in millimetres and the coil length is returned in metres — directly in the browser, with no installation and usable offline.',
    faq1Question: 'What is the coil length?',
    faq1Answer:
      'The coil length is the maximum pipe or profile length that fits onto a bundle for a given inner diameter (ID), outer diameter (OD) and bundle width (W). The calculator adds one layer after another until the outer diameter is reached and sums up the helix length of all layers.',
    faq2Question: 'What is the coiling end position?',
    faq2Answer:
      'The end position describes where a pipe of known length (L) ends up on the bundle. The calculator returns the number of layers (i), the number of pipes on the last layer (ni), the number of rotations (r) as well as the resulting bundle height (H) and outer diameter.',
    faq3Question: 'What is the difference between uneven layers and even layers offset?',
    faq3Answer:
      'With “uneven layers” the number of pipes per layer alternates between n and n−1, so the pipes of the next layer sit in the gaps of the previous one. With “even layers offset” the number of pipes per layer stays constant and the layers are offset by half a pipe diameter. The coiling method affects both the usable bundle width and the achievable coil length.',
    faq4Question: 'Which inputs are required?',
    faq4Answer:
      'For the coil length: pipe diameter (d), inner diameter (ID), outer diameter (OD) and bundle width (W). For the end position: pipe diameter (d), length (L), inner diameter (ID) and pipes per layer. Calculated values may deviate by up to 10%.',
    noscript:
      'JavaScript is required for the interactive calculation. Please enable JavaScript in your browser.'
  }
}
