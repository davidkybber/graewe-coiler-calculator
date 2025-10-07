/**
 * German (Deutsch) translations for GRAEWE Coiler Calculator
 * This is the primary language for the application
 */

export const de = {
  // Error messages - Calculations
  errors: {
    unknownCalculationError: 'Unbekannter Berechnungsfehler',
    missingParamsCoilLength: 'Fehlende erforderliche Parameter für die Wickellängenberechnung',
    missingParamsEndPosition: 'Fehlende erforderliche Parameter für die Endpositionsberechnung',
    pipeDiameterGreaterThanZero: 'Rohrdurchmesser muss größer als 0 sein',
    innerDiameterGreaterThanZero: 'Innendurchmesser muss größer als 0 sein',
    pipeDiameterSmallerThanInner: 'Rohrdurchmesser muss kleiner als der Innendurchmesser sein',
    outerDiameterGreaterThanInner: 'Außendurchmesser muss größer als der Innendurchmesser sein für die Wickellängenberechnung',
    bundleWidthRequired: 'Bundbreite muss für die Wickellängenberechnung angegeben werden',
    pipeLengthRequired: 'Länge muss für die Endpositionsberechnung angegeben werden',
    pipesPerLayerRequired: 'Rohranzahl pro Lage muss für die Endpositionsberechnung angegeben werden',
    calculationFailed: 'Berechnung fehlgeschlagen',
    invalidNumber: 'Ungültig'
  },

  // Error Boundary
  errorBoundary: {
    title: 'Etwas ist schief gelaufen',
    description: 'Der Rechner hat einen unerwarteten Fehler festgestellt. Bitte laden Sie die Seite neu, um es erneut zu versuchen.',
    refreshButton: 'Seite neu laden',
    errorDetails: 'Fehlerdetails (Entwicklung)'
  },

  // Layout / Header / Footer
  layout: {
    productCalculator: 'Produktrechner',
    headerSubtitle: 'Professionelle Wickelberechnungen',
    headerDescription: 'Wickellänge & Endposition',
    quickLinks: 'Schnellzugriff',
    madeWithLove: 'Mit ❤️ für die Fertigung erstellt',
    companyInfo: 'Ihr Partner für professionelle Extrusionsanlagen und Produktrechnungen in der Kunststoffverarbeitung.',
    visitWebsite: 'Website besuchen',
    originalCalculator: 'Original Produktrechner',
    ourProducts: 'Unsere Produkte',
    contact: 'Kontakt',
    aboutCalculator: 'Über diesen Rechner',
    aboutDescription: 'Progressive Web App für mobile und Desktop-Nutzung. Optimiert für professionelle Anwender in der Fertigung.',
    version: 'Version 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz'
  },

  // Provider errors
  provider: {
    contextError: 'useCalculator muss innerhalb eines CalculatorProviders verwendet werden'
  },

  // Calculator UI
  calculator: {
    title: 'GRAEWE Produktrechner',
    subtitle: 'Berechnung der Wickellänge und Endposition für Rohre und Profile',
    selectCalculationType: 'Berechnungsart wählen',
    coilLength: 'Wickellänge',
    coilLengthDescription: 'Berechnung der maximalen Rohrlänge',
    endPosition: 'Wickelendposition',
    endPositionDescription: 'Berechnung der Endposition',
    basicParameters: 'Grundparameter',
    pipeDiameter: 'Rohrdurchmesser d [mm]',
    innerDiameter: 'Innendurchmesser ID [mm]',
    outerDiameter: 'Aussendurchmesser OD [mm]',
    bundleWidth: 'Bundbreite W [mm]',
    pipeLength: 'Länge L [m]',
    pipesPerLayer: 'Rohranzahl pro Lage [oE]',
    coilingMethod: 'Wickelbild',
    unevenLayers: 'Ungleiche Lagen',
    unevenLayersDescription: 'Variable Rohranzahl pro Lage',
    evenLayersOffset: 'Gleiche Lagen versetzt',
    evenLayersOffsetDescription: 'Konstante Rohranzahl, versetzt',
    calculate: 'Berechnen',
    calculating: 'Berechnung läuft...',
    reset: 'Zurücksetzen',
    readyToCalculate: 'Bereit für die Berechnung',
    readyToCalculateDescription: 'Geben Sie die erforderlichen Parameter ein, um die Berechnung zu starten',
    calculationError: 'Berechnungsfehler',
    calculationSuccess: 'Berechnung erfolgreich',
    results: 'Ergebnisse',
    coilLengthResult: 'Wickellänge',
    numberOfLayers: 'Lageanzahl i [oE]',
    pipesOnLastLayer: 'Rohranzahl auf der letzten Lage ni [oE]',
    numberOfRotations: 'Rotationsanzahl r [oE]',
    bundleHeight: 'Bundhöhe H [mm]',
    disclaimer: 'Die errechneten Wickellängen können um bis zu 10% abweichen. Für die Richtigkeit der Ergebnisse übernehmen wir keine Gewähr.',
    disclaimerTitle: 'Hinweis'
  }
}

export type TranslationKeys = typeof de
