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
    privacy: 'Confidentialité'
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
    evenLayersOffset: 'Couches égales décalées',
    evenLayersOffsetDescription: 'Nombre constant de tuyaux, décalé',
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
  }
}
