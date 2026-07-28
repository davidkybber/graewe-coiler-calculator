/**
 * Language Context - Manages application language state
 * Provides language switching functionality and persists preference to localStorage
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from '../i18n'
import { parseShareParams } from '../utils/shareUrl'
import { languageFromPath, languagePath } from '../seo/siteConfig'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

const LANGUAGE_STORAGE_KEY = 'graewe-calculator-language'

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize language with precedence:
  // share-link param > URL path (/en/) > localStorage > browser (effect below) > default.
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      // A language from a shared link or a language URL wins and is persisted so
      // it "sticks" (and so the browser-detect effect below won't override it).
      const { language: urlLanguage } = parseShareParams(
        typeof window !== 'undefined' ? window.location.search : ''
      )
      const pathLanguage =
        typeof window !== 'undefined' ? languageFromPath(window.location.pathname) : undefined

      const explicitLanguage = urlLanguage || pathLanguage
      if (explicitLanguage) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, explicitLanguage)
        return explicitLanguage
      }

      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
      return (stored as Language) || DEFAULT_LANGUAGE
    } catch {
      return DEFAULT_LANGUAGE
    }
  })

  // Update localStorage when language changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage)
    } catch (error) {
      console.warn('Failed to save language preference:', error)
    }

    // On a language page (/en/, /fr/, …) the address bar follows the switch so
    // that URL, content and canonical stay in agreement. The adaptive root page
    // deliberately keeps its own URL — it must remain self-canonical.
    try {
      if (typeof window !== 'undefined' && languageFromPath(window.location.pathname)) {
        window.history.replaceState(null, '', languagePath(newLanguage) + window.location.hash)
      }
    } catch (error) {
      console.warn('Failed to update the language URL:', error)
    }
  }

  // Detect browser language on first visit
  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (!stored && typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0] as Language
      if (SUPPORTED_LANGUAGES.includes(browserLang)) {
        setLanguage(browserLang)
      }
    }
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook to access language context
 * @throws Error if used outside LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
