/**
 * French (Français) translations for GRAEWE Coiler Calculator
 */

import { TranslationKeys } from './de'

export const fr: TranslationKeys = {
  errors: {
    unknownCalculationError: 'Erreur de calcul inconnue',
    missingParamsCoilLength: 'Paramètres requis manquants pour le calcul de la longueur de bobine',
    missingParamsEndPosition: 'Paramètres requis manquants pour le calcul de la position finale',
    pipeDiameterGreaterThanZero: 'Le diamètre du tuyau doit être supérieur à 0',
    innerDiameterGreaterThanZero: 'Le diamètre intérieur doit être supérieur à 0',
    pipeDiameterSmallerThanInner: 'Le diamètre du tuyau doit être inférieur au diamètre intérieur',
    outerDiameterGreaterThanInner: 'Le diamètre extérieur doit être supérieur au diamètre intérieur pour le calcul de la longueur de bobine',
    bundleWidthRequired: 'La largeur du faisceau doit être spécifiée pour le calcul de la longueur de bobine',
    pipeLengthRequired: 'La longueur du tuyau doit être spécifiée pour le calcul de la position finale',
    pipesPerLayerRequired: 'Le nombre de tuyaux par couche doit être spécifié pour le calcul de la position finale',
    calculationFailed: 'Le calcul a échoué',
    invalidNumber: 'Invalide'
  },
  errorBoundary: {
    title: 'Quelque chose s\'est mal passé',
    description: 'Le calculateur a rencontré une erreur inattendue. Veuillez actualiser la page pour réessayer.',
    refreshButton: 'Actualiser la page',
    errorDetails: 'Détails de l\'erreur (Développement)'
  },
  layout: {
    productCalculator: 'Calculateur de produits',
    headerSubtitle: 'Calculs professionnels de bobines',
    headerDescription: 'Longueur de bobine et position finale',
    quickLinks: 'Liens rapides',
    madeWithLove: 'Fait avec ❤️ pour la fabrication',
    companyInfo: 'Votre partenaire pour les systèmes d\'extrusion professionnels et les calculs de produits dans le traitement des plastiques.',
    visitWebsite: 'Visiter le site web',
    originalCalculator: 'Calculateur de produits original',
    ourProducts: 'Nos produits',
    contact: 'Contact',
    aboutCalculator: 'À propos de ce calculateur',
    aboutDescription: 'Application Web Progressive pour une utilisation mobile et de bureau. Optimisée pour les utilisateurs professionnels en fabrication.',
    version: 'Version 1.0.0 • PWA Ready',
    copyright: '© 2024 GRAEWE GmbH. Tous droits réservés.',
    imprint: 'Mentions légales',
    privacy: 'Confidentialité',
    company: 'Entreprise',
    products: 'Produits',
    service: 'Service',
    social: 'Social',
    language: 'Langue',
    whoIsGraewe: 'Qui est GRAEWE?',
    whatDoesGraewe: 'Que fait GRAEWE?',
    graeweGroup: 'Le groupe GRAEWE',
    pipeExtrusion: 'Extrusion de tubes',
    profileExtrusion: 'Extrusion de profilés',
    sheetExtrusion: 'Extrusion de plaques',
    news: 'Actualités',
    usedMachines: 'Machines d\'occasion',
    downloads: 'Téléchargements',
    visitWebsiteCta: 'Découvrez notre gamme de produits sur graewe.com',
    goToWebsite: 'Aller au site web'
  },
  share: {
    button: 'Partager',
    title: 'Partager la configuration',
    description: 'Ce lien ouvre le calculateur avec vos valeurs et votre langue actuelles.',
    copy: 'Copier le lien',
    copied: 'Copié !'
  },

  provider: {
    contextError: 'useCalculator doit être utilisé dans un CalculatorProvider'
  },

  calculator: {
    title: 'Calculateur GRAEWE',
    subtitle: 'Calcul de la longueur de bobine et de la position finale pour tuyaux et profilés',
    selectCalculationType: 'Sélectionner le type de calcul',
    coilLength: 'Longueur de bobine',
    coilLengthDescription: 'Calcul de la longueur maximale de tuyau',
    endPosition: 'Position finale',
    endPositionDescription: 'Calcul de la position finale',
    basicParameters: 'Paramètres de base',
    pipeDiameter: 'Diamètre du tuyau d [mm]',
    innerDiameter: 'Diamètre intérieur ID [mm]',
    outerDiameter: 'Diamètre extérieur OD [mm]',
    bundleWidth: 'Largeur du faisceau W [mm]',
    pipeLength: 'Longueur L [m]',
    pipesPerLayer: 'Nombre de tuyaux par couche [oE]',
    coilingMethod: 'Méthode d\'enroulement',
    unevenLayers: 'Couches inégales',
    unevenLayersDescription: 'Nombre variable de tuyaux par couche',
    unevenLayersDiagramAlt: 'Schéma d\'enroulement Couches inégales – montre le diamètre du tuyau (d), le diamètre intérieur (ID), le diamètre extérieur (OD) et la largeur du faisceau (W)',
    evenLayersOffset: 'Couches égales décalées',
    evenLayersOffsetDescription: 'Nombre constant de tuyaux, décalé',
    evenLayersOffsetDiagramAlt: 'Schéma d\'enroulement Couches égales décalées – montre le diamètre du tuyau (d), le diamètre intérieur (ID), le diamètre extérieur (OD) et la largeur du faisceau (W)',
    calculate: 'Calculer',
    calculating: 'Calcul en cours...',
    reset: 'Réinitialiser',
    readyToCalculate: 'Prêt pour le calcul',
    readyToCalculateDescription: 'Entrez les paramètres requis pour démarrer le calcul',
    calculationError: 'Erreur de calcul',
    calculationSuccess: 'Calcul réussi',
    results: 'Résultats',
    coilLengthResult: 'Longueur de bobine',
    numberOfLayers: 'Nombre de couches i [oE]',
    pipesOnLastLayer: 'Tuyaux sur la dernière couche ni [oE]',
    numberOfRotations: 'Nombre de rotations r [oE]',
    bundleHeight: 'Hauteur du faisceau H [mm]',
    disclaimer: 'Les longueurs de bobine calculées peuvent varier jusqu\'à 10%. Nous n\'assumons aucune responsabilité pour l\'exactitude des résultats.',
    disclaimerTitle: 'Remarque'
  },

  seo: {
    title: 'Calculateur de longueur de bobinage | GRAEWE Coiler Calculator',
    description:
      'Calculateur en ligne gratuit pour la longueur de bobinage et la position finale de bobinage des tubes et profilés : nombre de couches, tubes par couche, hauteur et diamètre du faisceau.',
    keywords:
      'calcul longueur de bobinage, position finale de bobinage, enrouleur de tubes, largeur du faisceau, extrusion de tubes, GRAEWE',
    heading: 'Calculateur de longueur de bobinage pour tubes',
    aboutTitle: 'À propos du calculateur de bobinage GRAEWE',
    aboutIntro:
      'Le GRAEWE Coiler Calculator détermine la longueur de bobinage et la position finale de bobinage lors de l’enroulement de tubes et de profilés. Il utilise les mêmes formules que les enrouleurs GRAEWE : empilement hexagonal des couches avec une hauteur de couche de d × √3/2 et la longueur hélicoïdale tridimensionnelle de chaque couche. Toutes les dimensions se saisissent en millimètres, la longueur de bobinage est donnée en mètres — directement dans le navigateur, sans installation et utilisable hors ligne.',
    faq1Question: 'Qu’est-ce que la longueur de bobinage ?',
    faq1Answer:
      'La longueur de bobinage est la longueur maximale de tube ou de profilé qui tient sur un faisceau pour un diamètre intérieur (ID), un diamètre extérieur (OD) et une largeur de faisceau (W) donnés. Le calculateur ajoute les couches une à une jusqu’à atteindre le diamètre extérieur et additionne la longueur hélicoïdale de toutes les couches.',
    faq2Question: 'Qu’est-ce que la position finale de bobinage ?',
    faq2Answer:
      'La position finale indique où un tube de longueur connue (L) se termine sur le faisceau. Le calculateur fournit le nombre de couches (i), le nombre de tubes sur la dernière couche (ni), le nombre de rotations (r) ainsi que la hauteur du faisceau (H) et le diamètre extérieur qui en résultent.',
    faq3Question: 'Quelle est la différence entre couches inégales et couches égales décalées ?',
    faq3Answer:
      'Avec les « couches inégales », le nombre de tubes par couche alterne entre n et n−1, de sorte que les tubes de la couche suivante se placent dans les creux de la précédente. Avec les « couches égales décalées », le nombre de tubes par couche reste constant et les couches sont décalées d’un demi-diamètre de tube. Le mode de bobinage influence la largeur utile du faisceau et la longueur de bobinage atteignable.',
    faq4Question: 'Quelles données faut-il saisir ?',
    faq4Answer:
      'Pour la longueur de bobinage : diamètre du tube (d), diamètre intérieur (ID), diamètre extérieur (OD) et largeur du faisceau (W). Pour la position finale : diamètre du tube (d), longueur (L), diamètre intérieur (ID) et nombre de tubes par couche. Les valeurs calculées peuvent varier jusqu’à 10 %.',
    noscript:
      'JavaScript est nécessaire pour le calcul interactif. Veuillez activer JavaScript dans votre navigateur.'
  }
}
