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
    privacy: 'Privacidad',
    company: 'Empresa',
    products: 'Productos',
    service: 'Servicio',
    social: 'Social',
    language: 'Idioma',
    whoIsGraewe: '¿Quién es GRAEWE?',
    whatDoesGraewe: '¿Qué hace GRAEWE?',
    graeweGroup: 'El grupo GRAEWE',
    pipeExtrusion: 'Extrusión de tubos',
    profileExtrusion: 'Extrusión de perfiles',
    sheetExtrusion: 'Extrusión de láminas',
    news: 'Noticias',
    usedMachines: 'Máquinas usadas',
    downloads: 'Descargas',
    visitWebsiteCta: 'Descubra nuestra gama de productos en graewe.com',
    goToWebsite: 'Ir al sitio web'
  },
  share: {
    button: 'Compartir',
    title: 'Compartir configuración',
    description: 'Este enlace abre la calculadora con sus valores e idioma actuales.',
    copy: 'Copiar enlace',
    copied: '¡Copiado!'
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
    unevenLayersDiagramAlt: 'Diagrama de bobinado Capas desiguales – muestra el diámetro del tubo (d), diámetro interior (ID), diámetro exterior (OD) y anchura del paquete (W)',
    evenLayersOffset: 'Capas iguales desplazadas',
    evenLayersOffsetDescription: 'Número constante de tubos, desplazado',
    evenLayersOffsetDiagramAlt: 'Diagrama de bobinado Capas iguales desplazadas – muestra el diámetro del tubo (d), diámetro interior (ID), diámetro exterior (OD) y anchura del paquete (W)',
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
  },

  seo: {
    title: 'Calculadora de longitud de bobinado | GRAEWE Coiler Calculator',
    description:
      'Calculadora en línea gratuita de la longitud de bobinado y la posición final de bobinado de tubos y perfiles: número de capas, tubos por capa, altura del haz y diámetro exterior.',
    keywords:
      'calcular longitud de bobinado, posición final de bobinado, bobinadora de tubos, ancho del haz, extrusión de tubos, GRAEWE',
    heading: 'Calculadora de longitud de bobinado para tubos',
    aboutTitle: 'Acerca de la calculadora de bobinado GRAEWE',
    aboutIntro:
      'El GRAEWE Coiler Calculator determina la longitud de bobinado y la posición final de bobinado al enrollar tubos y perfiles. Utiliza las mismas fórmulas que las bobinadoras de GRAEWE: empaquetado hexagonal de las capas con una altura de capa de d × √3/2 y la longitud helicoidal tridimensional de cada capa. Todas las medidas se introducen en milímetros y la longitud de bobinado se obtiene en metros, directamente en el navegador, sin instalación y también sin conexión.',
    faq1Question: '¿Qué es la longitud de bobinado?',
    faq1Answer:
      'La longitud de bobinado es la longitud máxima de tubo o perfil que cabe en un haz para un diámetro interior (ID), un diámetro exterior (OD) y un ancho de haz (W) determinados. La calculadora añade capa tras capa hasta alcanzar el diámetro exterior y suma la longitud helicoidal de todas las capas.',
    faq2Question: '¿Qué es la posición final de bobinado?',
    faq2Answer:
      'La posición final describe dónde termina un tubo de longitud conocida (L) sobre el haz. La calculadora proporciona el número de capas (i), el número de tubos en la última capa (ni), el número de rotaciones (r), así como la altura del haz (H) y el diámetro exterior resultantes.',
    faq3Question: '¿Qué diferencia hay entre capas desiguales y capas iguales desplazadas?',
    faq3Answer:
      'Con «capas desiguales», el número de tubos por capa alterna entre n y n−1, de modo que los tubos de la capa siguiente se apoyan en los huecos de la anterior. Con «capas iguales desplazadas», el número de tubos por capa se mantiene constante y las capas se desplazan medio diámetro de tubo. El método de bobinado influye tanto en el ancho útil del haz como en la longitud de bobinado alcanzable.',
    faq4Question: '¿Qué datos se necesitan?',
    faq4Answer:
      'Para la longitud de bobinado: diámetro del tubo (d), diámetro interior (ID), diámetro exterior (OD) y ancho del haz (W). Para la posición final: diámetro del tubo (d), longitud (L), diámetro interior (ID) y tubos por capa. Los valores calculados pueden variar hasta un 10 %.',
    noscript:
      'Se necesita JavaScript para el cálculo interactivo. Active JavaScript en su navegador.'
  }
}
