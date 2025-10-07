/**
 * Translation Hook - Provides context-aware translation function
 * 
 * This hook combines the language context with the translation system
 * to provide translations in the current selected language
 */

import { useLanguage } from '../contexts/LanguageContext'
import { t as translateFn } from '../i18n'

/**
 * Hook to get translation function for current language
 * 
 * @returns Translation function that uses current language from context
 * 
 * @example
 * const { t } = useTranslation()
 * return <h1>{t('layout.headerSubtitle')}</h1>
 */
export const useTranslation = () => {
  const { language } = useLanguage()
  
  const t = (key: string): string => {
    return translateFn(key, language)
  }
  
  return { t, language }
}

