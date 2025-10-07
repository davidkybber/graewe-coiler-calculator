/**
 * Italian (Italiano) translations for GRAEWE Coiler Calculator
 */

import { TranslationKeys } from './de'

export const it: TranslationKeys = {
  errors: {
    unknownCalculationError: 'Errore di calcolo sconosciuto',
    missingParamsCoilLength: 'Parametri richiesti mancanti per il calcolo della lunghezza della bobina',
    missingParamsEndPosition: 'Parametri richiesti mancanti per il calcolo della posizione finale',
    pipeDiameterGreaterThanZero: 'Il diametro del tubo deve essere maggiore di 0',
    innerDiameterGreaterThanZero: 'Il diametro interno deve essere maggiore di 0',
    pipeDiameterSmallerThanInner: 'Il diametro del tubo deve essere inferiore al diametro interno',
    outerDiameterGreaterThanInner: 'Il diametro esterno deve essere maggiore del diametro interno per il calcolo della lunghezza della bobina',
    bundleWidthRequired: 'La larghezza del fascio deve essere specificata per il calcolo della lunghezza della bobina',
    pipeLengthRequired: 'La lunghezza del tubo deve essere specificata per il calcolo della posizione finale',
    pipesPerLayerRequired: 'Il numero di tubi per strato deve essere specificato per il calcolo della posizione finale',
    calculationFailed: 'Calcolo fallito',
    invalidNumber: 'Non valido'
  },
  errorBoundary: {
    title: 'Qualcosa è andato storto',
    description: 'Il calcolatore ha riscontrato un errore imprevisto. Si prega di aggiornare la pagina per riprovare.',
    refreshButton: 'Aggiorna pagina',
    errorDetails: 'Dettagli errore (Sviluppo)'
  },
  layout: {
    productCalculator: 'Calcolatore di prodotti',
    headerSubtitle: 'Calcoli professionali delle bobine',
    headerDescription: 'Lunghezza bobina e posizione finale',
    quickLinks: 'Collegamenti rapidi',
    madeWithLove: 'Fatto con ❤️ per la produzione',
    companyInfo: 'Il vostro partner per sistemi di estrusione professionale e calcoli di prodotti nella lavorazione delle materie plastiche.',
    visitWebsite: 'Visita il sito web',
    originalCalculator: 'Calcolatore di prodotti originale',
    ourProducts: 'I nostri prodotti',
    contact: 'Contatto',
    aboutCalculator: 'Informazioni su questo calcolatore',
    aboutDescription: 'App web progressiva per uso mobile e desktop. Ottimizzata per utenti professionali nella produzione.',
    version: 'Versione 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. Tutti i diritti riservati.',
    imprint: 'Impronta',
    privacy: 'Privacy'
  },
  provider: {
    contextError: 'useCalculator deve essere utilizzato all\'interno di un CalculatorProvider'
  },

  calculator: {
    title: 'Calcolatrice GRAEWE',
    subtitle: 'Calcolo della lunghezza della bobina e della posizione finale per tubi e profili',
    selectCalculationType: 'Seleziona tipo di calcolo',
    coilLength: 'Lunghezza bobina',
    coilLengthDescription: 'Calcolo della lunghezza massima del tubo',
    endPosition: 'Posizione finale',
    endPositionDescription: 'Calcolo della posizione finale',
    basicParameters: 'Parametri di base',
    pipeDiameter: 'Diametro del tubo d [mm]',
    innerDiameter: 'Diametro interno ID [mm]',
    outerDiameter: 'Diametro esterno OD [mm]',
    bundleWidth: 'Larghezza del fascio W [mm]',
    pipeLength: 'Lunghezza L [m]',
    pipesPerLayer: 'Tubi per strato [pz]',
    coilingMethod: 'Metodo di avvolgimento',
    unevenLayers: 'Strati irregolari',
    unevenLayersDescription: 'Numero variabile di tubi per strato',
    evenLayersOffset: 'Strati regolari sfalsati',
    evenLayersOffsetDescription: 'Numero costante di tubi, sfalsato',
    calculate: 'Calcola',
    calculating: 'Calcolo in corso...',
    reset: 'Ripristina',
    readyToCalculate: 'Pronto per calcolare',
    readyToCalculateDescription: 'Inserire i parametri richiesti per avviare il calcolo',
    calculationError: 'Errore di calcolo',
    calculationSuccess: 'Calcolo riuscito',
    results: 'Risultati',
    coilLengthResult: 'Lunghezza bobina',
    numberOfLayers: 'Numero di strati i [pz]',
    pipesOnLastLayer: 'Tubi sull\'ultimo strato ni [pz]',
    numberOfRotations: 'Numero di rotazioni r [pz]',
    bundleHeight: 'Altezza del fascio H [mm]',
    disclaimer: 'Le lunghezze delle bobine calcolate possono variare fino al 10%. Non assumiamo alcuna responsabilità per l\'accuratezza dei risultati.',
    disclaimerTitle: 'Avviso'
  }
}
