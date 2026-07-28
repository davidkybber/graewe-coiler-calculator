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
    privacy: 'Privacy',
    company: 'Azienda',
    products: 'Prodotti',
    service: 'Servizio',
    social: 'Social',
    language: 'Lingua',
    whoIsGraewe: 'Chi è GRAEWE?',
    whatDoesGraewe: 'Cosa fa GRAEWE?',
    graeweGroup: 'Il gruppo GRAEWE',
    pipeExtrusion: 'Estrusione di tubi',
    profileExtrusion: 'Estrusione di profili',
    sheetExtrusion: 'Estrusione di lastre',
    news: 'Notizie',
    usedMachines: 'Macchine usate',
    downloads: 'Download',
    visitWebsiteCta: 'Scopri la nostra gamma di prodotti su graewe.com',
    goToWebsite: 'Vai al sito web'
  },
  share: {
    button: 'Condividi',
    title: 'Condividi configurazione',
    description: 'Questo link apre il calcolatore con i tuoi valori e la tua lingua attuali.',
    copy: 'Copia link',
    copied: 'Copiato!'
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
    unevenLayersDiagramAlt: 'Schema di avvolgimento Strati irregolari – mostra il diametro del tubo (d), diametro interno (ID), diametro esterno (OD) e larghezza del fascio (W)',
    evenLayersOffset: 'Strati regolari sfalsati',
    evenLayersOffsetDescription: 'Numero costante di tubi, sfalsato',
    evenLayersOffsetDiagramAlt: 'Schema di avvolgimento Strati regolari sfalsati – mostra il diametro del tubo (d), diametro interno (ID), diametro esterno (OD) e larghezza del fascio (W)',
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
  },

  seo: {
    title: 'Calcolatore di lunghezza di avvolgimento | GRAEWE Coiler Calculator',
    description:
      'Calcolatore online gratuito per la lunghezza di avvolgimento e la posizione finale di avvolgimento di tubi e profili: numero di strati, tubi per strato, altezza e diametro del fascio.',
    keywords:
      'calcolo lunghezza di avvolgimento, posizione finale di avvolgimento, avvolgitore per tubi, larghezza del fascio, estrusione di tubi, GRAEWE',
    heading: 'Calcolatore di lunghezza di avvolgimento per tubi',
    aboutTitle: 'Informazioni sul calcolatore di avvolgimento GRAEWE',
    aboutIntro:
      'Il GRAEWE Coiler Calculator determina la lunghezza di avvolgimento e la posizione finale di avvolgimento durante l’avvolgimento di tubi e profili. Utilizza le stesse formule degli avvolgitori GRAEWE: impacchettamento esagonale degli strati con un’altezza di strato pari a d × √3/2 e la lunghezza elicoidale tridimensionale di ogni singolo strato. Tutte le misure si inseriscono in millimetri e la lunghezza di avvolgimento viene fornita in metri, direttamente nel browser, senza installazione e anche offline.',
    faq1Question: 'Che cos’è la lunghezza di avvolgimento?',
    faq1Answer:
      'La lunghezza di avvolgimento è la massima lunghezza di tubo o profilo che trova posto su un fascio con un dato diametro interno (ID), diametro esterno (OD) e larghezza del fascio (W). Il calcolatore aggiunge uno strato dopo l’altro fino a raggiungere il diametro esterno e somma la lunghezza elicoidale di tutti gli strati.',
    faq2Question: 'Che cos’è la posizione finale di avvolgimento?',
    faq2Answer:
      'La posizione finale indica dove termina sul fascio un tubo di lunghezza nota (L). Il calcolatore fornisce il numero di strati (i), il numero di tubi sull’ultimo strato (ni), il numero di rotazioni (r) nonché l’altezza del fascio (H) e il diametro esterno risultanti.',
    faq3Question: 'Qual è la differenza tra strati disuguali e strati uguali sfalsati?',
    faq3Answer:
      'Con gli «strati disuguali» il numero di tubi per strato si alterna tra n e n−1, così che i tubi dello strato successivo si posizionano negli spazi di quello precedente. Con gli «strati uguali sfalsati» il numero di tubi per strato resta costante e gli strati sono sfalsati di mezzo diametro del tubo. Il metodo di avvolgimento influisce sia sulla larghezza utile del fascio sia sulla lunghezza di avvolgimento ottenibile.',
    faq4Question: 'Quali dati sono necessari?',
    faq4Answer:
      'Per la lunghezza di avvolgimento: diametro del tubo (d), diametro interno (ID), diametro esterno (OD) e larghezza del fascio (W). Per la posizione finale: diametro del tubo (d), lunghezza (L), diametro interno (ID) e tubi per strato. I valori calcolati possono discostarsi fino al 10 %.',
    noscript:
      'Per il calcolo interattivo è necessario JavaScript. Attivare JavaScript nel browser.'
  }
}
