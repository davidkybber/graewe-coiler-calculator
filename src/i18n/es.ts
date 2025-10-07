/**
 * Spanish (Español) translations for GRAEWE Coiler Calculator
 */

import { TranslationKeys } from './de'

export const es: TranslationKeys = {
  errors: {
    unknownCalculationError: 'Error de cálculo desconocido',
    missingParamsCoilLength: 'Faltan parámetros requeridos para el cálculo de longitud de bobina',
    missingParamsEndPosition: 'Faltan parámetros requeridos para el cálculo de posición final',
    pipeDiameterGreaterThanZero: 'El diámetro de la tubería debe ser mayor que 0',
    innerDiameterGreaterThanZero: 'El diámetro interior debe ser mayor que 0',
    pipeDiameterSmallerThanInner: 'El diámetro de la tubería debe ser menor que el diámetro interior',
    outerDiameterGreaterThanInner: 'El diámetro exterior debe ser mayor que el diámetro interior para el cálculo de longitud de bobina',
    bundleWidthRequired: 'Se debe especificar el ancho del haz para el cálculo de longitud de bobina',
    pipeLengthRequired: 'Se debe especificar la longitud de la tubería para el cálculo de posición final',
    pipesPerLayerRequired: 'Se debe especificar el número de tuberías por capa para el cálculo de posición final',
    calculationFailed: 'El cálculo falló',
    invalidNumber: 'Inválido'
  },
  errorBoundary: {
    title: 'Algo salió mal',
    description: 'La calculadora encontró un error inesperado. Por favor, actualice la página para volver a intentarlo.',
    refreshButton: 'Actualizar página',
    errorDetails: 'Detalles del error (Desarrollo)'
  },
  layout: {
    productCalculator: 'Calculadora de productos',
    headerSubtitle: 'Cálculos profesionales de bobinas',
    headerDescription: 'Longitud de bobina y posición final',
    quickLinks: 'Enlaces rápidos',
    madeWithLove: 'Hecho con ❤️ para la fabricación',
    companyInfo: 'Su socio para sistemas de extrusión profesionales y cálculos de productos en el procesamiento de plásticos.',
    visitWebsite: 'Visitar sitio web',
    originalCalculator: 'Calculadora de productos original',
    ourProducts: 'Nuestros productos',
    contact: 'Contacto',
    aboutCalculator: 'Acerca de esta calculadora',
    aboutDescription: 'Aplicación web progresiva para uso móvil y de escritorio. Optimizada para usuarios profesionales en fabricación.',
    version: 'Versión 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. Todos los derechos reservados.',
    imprint: 'Aviso legal',
    privacy: 'Privacidad'
  },
  provider: {
    contextError: 'useCalculator debe usarse dentro de un CalculatorProvider'
  },

  calculator: {
    title: 'Calculadora GRAEWE',
    subtitle: 'Cálculo de longitud de bobina y posición final para tubos y perfiles',
    selectCalculationType: 'Seleccionar tipo de cálculo',
    coilLength: 'Longitud de bobina',
    coilLengthDescription: 'Cálculo de la longitud máxima del tubo',
    endPosition: 'Posición final',
    endPositionDescription: 'Cálculo de la posición final',
    basicParameters: 'Parámetros básicos',
    pipeDiameter: 'Diámetro del tubo d [mm]',
    innerDiameter: 'Diámetro interior ID [mm]',
    outerDiameter: 'Diámetro exterior OD [mm]',
    bundleWidth: 'Ancho del haz W [mm]',
    pipeLength: 'Longitud L [m]',
    pipesPerLayer: 'Tubos por capa [uds]',
    coilingMethod: 'Método de enrollado',
    unevenLayers: 'Capas desiguales',
    unevenLayersDescription: 'Número variable de tubos por capa',
    evenLayersOffset: 'Capas iguales desplazadas',
    evenLayersOffsetDescription: 'Número constante de tubos, desplazado',
    calculate: 'Calcular',
    calculating: 'Calculando...',
    reset: 'Restablecer',
    readyToCalculate: 'Listo para calcular',
    readyToCalculateDescription: 'Introduzca los parámetros necesarios para iniciar el cálculo',
    calculationError: 'Error de cálculo',
    calculationSuccess: 'Cálculo exitoso',
    results: 'Resultados',
    coilLengthResult: 'Longitud de bobina',
    numberOfLayers: 'Número de capas i [uds]',
    pipesOnLastLayer: 'Tubos en la última capa ni [uds]',
    numberOfRotations: 'Número de rotaciones r [uds]',
    bundleHeight: 'Altura del haz H [mm]',
    disclaimer: 'Las longitudes de bobina calculadas pueden variar hasta un 10%. No asumimos ninguna responsabilidad por la exactitud de los resultados.',
    disclaimerTitle: 'Aviso'
  }
}
