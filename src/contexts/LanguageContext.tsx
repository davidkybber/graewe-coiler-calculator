/**
 * Language Context - Manages application language state
 * Provides language switching functionality and persists preference to localStorage
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, DEFAULT_LANGUAGE } from '../i18n'
import { parseShareParams } from '../utils/shareUrl'

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
  // Initialize language with precedence: URL param > localStorage > default.
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      // A language from a shared link wins and is persisted so it "sticks"
      // (and so the browser-detect effect below won't override it).
      const { language: urlLanguage } = parseShareParams(
        typeof window !== 'undefined' ? window.location.search : ''
      )
      if (urlLanguage) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, urlLanguage)
        return urlLanguage
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
  }

  // Detect browser language on first visit
  useEffect(() => {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (!stored && typeof navigator !== 'undefined') {
      const browserLang = navigator.language.split('-')[0] as Language
      const supportedLanguages: Language[] = ['de', 'en', 'fr', 'ru', 'es', 'it', 'zh', 'ja']
      if (supportedLanguages.includes(browserLang)) {
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

