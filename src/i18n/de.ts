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
    privacy: 'Datenschutz',
    company: 'Unternehmen',
    products: 'Produkte',
    service: 'Service',
    social: 'Social',
    language: 'Sprache',
    whoIsGraewe: 'Wer ist GRAEWE?',
    whatDoesGraewe: 'Was macht GRAEWE?',
    graeweGroup: 'Die GRAEWE Gruppe',
    pipeExtrusion: 'Rohrextrusion',
    profileExtrusion: 'Profilextrusion',
    sheetExtrusion: 'Plattenextrusion',
    news: 'Aktuelles',
    usedMachines: 'Gebrauchtmaschinen',
    downloads: 'Downloads',
    visitWebsiteCta: 'Entdecken Sie unser Produktprogramm auf graewe.com',
    goToWebsite: 'Zur Website'
  },

  // Share configuration
  share: {
    button: 'Teilen',
    title: 'Konfiguration teilen',
    description: 'Dieser Link öffnet den Rechner mit Ihren aktuellen Werten und Ihrer Sprache.',
    copy: 'Link kopieren',
    copied: 'Kopiert!'
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
    unevenLayersDiagramAlt: 'Wickelbild Ungleiche Lagen – zeigt Rohrdurchmesser (d), Innendurchmesser (ID), Außendurchmesser (OD) und Bundbreite (W)',
    evenLayersOffset: 'Gleiche Lagen versetzt',
    evenLayersOffsetDescription: 'Konstante Rohranzahl, versetzt',
    evenLayersOffsetDiagramAlt: 'Wickelbild Gleiche Lagen versetzt – zeigt Rohrdurchmesser (d), Innendurchmesser (ID), Außendurchmesser (OD) und Bundbreite (W)',
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
  },

  // SEO — page metadata and indexable page content.
  // These strings are used both by the rendered app and by the static
  // per-language HTML pages generated at build time (see src/seo/head.ts).
  seo: {
    title: 'Wickellängen-Rechner für Rohre | GRAEWE Coiler Calculator',
    description:
      'Kostenloser Online-Rechner für Wickellänge und Wickelendposition von Rohren und Profilen: Lagenanzahl, Rohre pro Lage, Bundhöhe und Außendurchmesser sofort berechnen.',
    keywords:
      'Wickellänge berechnen, Wickelendposition, Rohrwickler, Coiler, Bundbreite, Rohrextrusion, Wickelrechner, GRAEWE',
    heading: 'Wickellängen-Rechner für Rohre und Profile',
    aboutTitle: 'Über den GRAEWE Wickelrechner',
    aboutIntro:
      'Der GRAEWE Coiler Calculator berechnet die Wickellänge und die Wickelendposition beim Aufwickeln von Rohren und Profilen. Grundlage sind dieselben Formeln wie in den Wicklern von GRAEWE: hexagonale Packung der Lagen mit einer Lagenhöhe von d × √3/2 und die räumliche Helixlänge jeder einzelnen Lage. Alle Maße werden in Millimetern eingegeben, die Wickellänge wird in Metern ausgegeben – direkt im Browser, ohne Installation und auch offline nutzbar.',
    faq1Question: 'Was ist die Wickellänge?',
    faq1Answer:
      'Die Wickellänge ist die maximale Rohr- oder Profillänge, die bei gegebenem Innendurchmesser (ID), Außendurchmesser (OD) und Bundbreite (W) auf einen Bund passt. Der Rechner legt dazu Lage für Lage an, bis der Außendurchmesser erreicht ist, und summiert die Helixlänge aller Lagen.',
    faq2Question: 'Was ist die Wickelendposition?',
    faq2Answer:
      'Die Wickelendposition beschreibt, wo ein Rohr mit bekannter Länge (L) auf dem Bund endet. Der Rechner liefert die Lageanzahl (i), die Rohranzahl auf der letzten Lage (ni), die Rotationsanzahl (r) sowie die daraus resultierende Bundhöhe (H) und den Außendurchmesser.',
    faq3Question: 'Worin unterscheiden sich ungleiche Lagen und gleiche Lagen versetzt?',
    faq3Answer:
      'Bei „Ungleiche Lagen“ wechselt die Rohranzahl pro Lage zwischen n und n−1, sodass die Rohre der nächsten Lage in den Zwickeln liegen. Bei „Gleiche Lagen versetzt“ bleibt die Rohranzahl je Lage konstant und die Lagen sind um einen halben Rohrdurchmesser versetzt. Das Wickelbild beeinflusst sowohl die nutzbare Bundbreite als auch die erreichbare Wickellänge.',
    faq4Question: 'Welche Eingaben werden benötigt?',
    faq4Answer:
      'Für die Wickellänge: Rohrdurchmesser (d), Innendurchmesser (ID), Außendurchmesser (OD) und Bundbreite (W). Für die Wickelendposition: Rohrdurchmesser (d), Länge (L), Innendurchmesser (ID) und Rohranzahl pro Lage. Die errechneten Werte können um bis zu 10 % abweichen.',
    noscript:
      'Für die interaktive Berechnung wird JavaScript benötigt. Bitte aktivieren Sie JavaScript in Ihrem Browser.'
  }
}

export type TranslationKeys = typeof de
