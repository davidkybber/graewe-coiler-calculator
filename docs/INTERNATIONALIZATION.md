# Internationalization (i18n) Guide

## Overview

The GRAEWE Coiler Calculator uses a simple, type-safe internationalization system that makes it easy to add new languages. The current primary language is **German (Deutsch)**, with English available as a fallback/reference.

## Architecture

### File Structure

```
src/
├── i18n/
│   ├── index.ts       # Translation utilities and exports
│   ├── de.ts          # German translations (primary)
│   ├── en.ts          # English translations (reference/fallback)
│   └── [lang].ts      # Add new language files here
```

### Key Components

1. **Language Files** (`de.ts`, `en.ts`, etc.)
   - Contains all translatable strings organized by category
   - Uses TypeScript for type safety
   - Primary language (`de.ts`) defines the structure

2. **Translation Utilities** (`index.ts`)
   - `t()` - Simple translation function
   - `translate()` - Type-safe translation with autocomplete
   - `getTranslations()` - Get entire translation object

## How to Add a New Language

### Step 1: Create Language File

Create a new file in `src/i18n/` named after the [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code (e.g., `fr.ts` for French, `es.ts` for Spanish).

```typescript
// src/i18n/fr.ts
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
    headerSubtitle: 'Calculs professionnels de bobines',
    quickLinks: 'Liens rapides',
    madeWithLove: 'Fait avec ❤️ pour l\'industrie manufacturière'
  },
  provider: {
    contextError: 'useCalculator doit être utilisé dans un CalculatorProvider'
  }
}
```

**Important Notes:**
- Import `TranslationKeys` from `./de` to ensure type safety
- Implement **all** translation keys from the German file
- TypeScript will show errors if any keys are missing
- Keep the same structure and nesting as the source file

### Step 2: Register Language

Add your new language to `src/i18n/index.ts`:

```typescript
import { de, TranslationKeys } from './de'
import { en } from './en'
import { fr } from './fr'  // Add import

// Update type to include new language
export type Language = 'de' | 'en' | 'fr'  // Add 'fr'

// Register translation
const translations: Record<Language, TranslationKeys> = {
  de,
  en,
  fr  // Add to object
}
```

### Step 3: (Optional) Update Default Language

If you want to change the default language, update the constant:

```typescript
export const DEFAULT_LANGUAGE: Language = 'fr'  // Change from 'de' to 'fr'
```

### Step 4: Test Your Translation

1. Build the application: `npm run build`
2. Run tests: `npm run test`
3. Check that all strings display correctly
4. Verify TypeScript compilation with no errors

## Using Translations in Code

### Basic Usage

Import the translation function and use it:

```typescript
import { t } from '../i18n'

// Simple usage
const errorMessage = t('errors.unknownCalculationError')

// With specific language
const englishMessage = t('errors.calculationFailed', 'en')
```

### Type-Safe Usage (Recommended)

For better IDE support with autocomplete:

```typescript
import { translate } from '../i18n'

// TypeScript will autocomplete available keys
const message = translate('errors.pipeDiameterGreaterThanZero')
```

### In React Components

```typescript
import React from 'react'
import { t } from '../../i18n'

export const MyComponent: React.FC = () => {
  return (
    <div>
      <h1>{t('errorBoundary.title')}</h1>
      <p>{t('errorBoundary.description')}</p>
      <button>{t('errorBoundary.refreshButton')}</button>
    </div>
  )
}
```

### In Service Functions

```typescript
import { t } from '../i18n'

export function validateInput(value: number): string | null {
  if (value <= 0) {
    return t('errors.pipeDiameterGreaterThanZero')
  }
  return null
}
```

## Translation Structure

### Current Categories

1. **errors** - Error messages for calculations and validation
   - Calculation errors
   - Validation errors
   - Generic error messages

2. **errorBoundary** - Error boundary UI text
   - Error page title and description
   - Action buttons
   - Debug information labels

3. **layout** - Header, footer, and navigation text
   - Header subtitle
   - Footer links
   - Branding messages

4. **provider** - Context and provider errors
   - Developer-facing error messages

### Adding New Categories

To add a new category (e.g., for a new feature):

1. **Update the primary language file** (`de.ts`):
```typescript
export const de = {
  // ... existing categories
  
  // New category
  newFeature: {
    title: 'Neues Feature',
    description: 'Beschreibung des Features',
    buttonLabel: 'Aktion ausführen'
  }
} as const
```

2. **Update all other language files** to include the new category
3. TypeScript will enforce consistency across all languages

## Best Practices

### DO ✅

- **Use descriptive key names** that indicate what the text is for
  - Good: `errors.pipeDiameterGreaterThanZero`
  - Bad: `errors.error1`

- **Group related translations** under appropriate categories
  - Errors together
  - UI text together
  - Feature-specific text together

- **Keep translations consistent** across languages
  - Same tone and formality
  - Same technical terms
  - Same level of detail

- **Test all translations** after adding/modifying
  - Check for typos
  - Verify formatting
  - Test with real data

- **Document context** for complex translations
  ```typescript
  // Used in error boundary when React catches an error
  title: 'Etwas ist schief gelaufen'
  ```

### DON'T ❌

- **Don't hardcode strings** in components
  - Bad: `<button>Refresh Page</button>`
  - Good: `<button>{t('errorBoundary.refreshButton')}</button>`

- **Don't mix languages** in the same translation object
  - Keep each language file pure

- **Don't skip translations** for any language
  - All languages must have complete translations
  - TypeScript will catch missing keys

- **Don't use concatenation** for dynamic text
  - Use interpolation or separate keys instead
  - Consider using a more advanced i18n library if needed

## Language-Specific Formatting

### Number Formatting

The application uses German number formatting by default:

```typescript
// In services/calculations.ts
const formattedNumber = value.toLocaleString('de-DE', formatOptions)
```

For language-specific formatting:
- German: `1.234,56` (period for thousands, comma for decimals)
- English: `1,234.56` (comma for thousands, period for decimals)
- French: `1 234,56` (space for thousands, comma for decimals)

### Date/Time Formatting

When adding date/time features, use `toLocaleString()` with language parameter:

```typescript
const date = new Date()
const formatted = date.toLocaleString('de-DE')  // German format
```

## Future Enhancements

### If You Need More Advanced i18n Features

Consider upgrading to a full i18n library like:
- **react-i18next** - Most popular, feature-rich
- **FormatJS** - Industry standard from Format.js team
- **LinguiJS** - Modern, type-safe approach

These provide:
- Pluralization rules
- String interpolation with variables
- Date/time formatting
- RTL (Right-to-Left) support
- Translation management tools

### Migration Path

Our current simple system can be easily migrated:

1. Install i18n library: `npm install react-i18next i18next`
2. Convert language files to library format
3. Replace `t()` function with library's translation function
4. Keep the same file structure and organization

## Troubleshooting

### Translation Not Showing

1. Check that the key exists in the language file
2. Verify import path is correct: `import { t } from '../i18n'` or `'../../i18n'`
3. Check browser console for warnings
4. Ensure language file is registered in `index.ts`

### TypeScript Errors

1. Make sure all language files implement `TranslationKeys` type
2. Check that all keys from `de.ts` are present in other language files
3. Run `npm run type-check` to see detailed errors

### Missing Translations

1. The system will log warnings to console: `Translation key not found: [key]`
2. Missing keys will display as the key path itself
3. Check all language files have the same structure

## Testing Translations

### Manual Testing

1. Change `DEFAULT_LANGUAGE` in `src/i18n/index.ts`
2. Build and run the application
3. Navigate through all features
4. Verify all text displays correctly

### Automated Testing

Add tests for translation completeness:

```typescript
import { de, en } from '../i18n'

describe('Translations', () => {
  it('should have all keys in English', () => {
    // Compare keys between de and en
    expect(Object.keys(en)).toEqual(Object.keys(de))
  })
})
```

## Support

For questions about internationalization:
1. Check this documentation
2. Review existing language files for examples
3. Consult TypeScript errors for guidance
4. Test changes thoroughly before committing

---

**Remember:** Good internationalization makes the application accessible to users worldwide. Take time to ensure translations are accurate and culturally appropriate.

