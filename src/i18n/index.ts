/**
 * Internationalization (i18n) system for GRAEWE Coiler Calculator
 * 
 * This module provides a simple, type-safe translation system that makes it
 * easy to add new languages in the future.
 * 
 * To add a new language:
 * 1. Create a new language file (e.g., fr.ts for French)
 * 2. Import TranslationKeys from './de' and implement all keys
 * 3. Import and add to the translations object below
 * 4. Update the Language type and DEFAULT_LANGUAGE if needed
 */

import { de, TranslationKeys } from './de'
import { en } from './en'
import { fr } from './fr'
import { ru } from './ru'
import { es } from './es'
import { it } from './it'
import { zh } from './zh'
import { ja } from './ja'

// Available languages
export type Language = 'de' | 'en' | 'fr' | 'ru' | 'es' | 'it' | 'zh' | 'ja'

// Default language for the application
export const DEFAULT_LANGUAGE: Language = 'de'

// All available translations
const translations: Record<Language, TranslationKeys> = {
  de,
  en,
  fr,
  ru,
  es,
  it,
  zh,
  ja
}

/**
 * Get translation for a specific key path
 * 
 * @example
 * t('errors.unknownCalculationError') // Returns German translation
 * t('errors.calculationFailed', 'en') // Returns English translation
 */
export function t(keyPath: string, language: Language = DEFAULT_LANGUAGE): string {
  const keys = keyPath.split('.')
  const translation = translations[language] || translations[DEFAULT_LANGUAGE]
  
  let value: any = translation
  for (const key of keys) {
    value = value?.[key]
    if (value === undefined) {
      console.warn(`Translation key not found: ${keyPath}`)
      return keyPath
    }
  }
  
  return typeof value === 'string' ? value : keyPath
}

/**
 * Get the entire translation object for a language
 * Useful for contexts where you want to pass all translations at once
 */
export function getTranslations(language: Language = DEFAULT_LANGUAGE): TranslationKeys {
  return translations[language] || translations[DEFAULT_LANGUAGE]
}

/**
 * Type-safe translation helper that ensures key paths exist
 * This provides autocomplete and type checking for translation keys
 */
type NestedKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${NestedKeyOf<T[K]>}`
          : `${K}`
        : never
    }[keyof T]
  : never

export type TranslationKey = NestedKeyOf<TranslationKeys>

/**
 * Type-safe translation function
 * Use this in TypeScript for full type safety and autocomplete
 */
export function translate(key: TranslationKey, language: Language = DEFAULT_LANGUAGE): string {
  return t(key, language)
}

// Export translation objects for direct access if needed
export { de, en, fr, ru, es, it, zh, ja }
export type { TranslationKeys }

/**
 * Hook for getting translation function with current language from context
 * This should be imported from a separate file to avoid circular dependencies
 * Import this from '../hooks/useTranslation' instead
 */
