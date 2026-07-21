import React, { useState, useRef, useEffect } from 'react'
import { useCalculator } from '../Calculator/CalculatorProvider'
import { useLanguage } from '../../contexts/LanguageContext'
import { useTranslation } from '../../hooks/useTranslation'
import { buildShareUrl } from '../../utils/shareUrl'

export const ShareButton: React.FC = () => {
  const { state } = useCalculator()
  const { language } = useLanguage()
  const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Always reflects the current, live configuration.
  const url = buildShareUrl(state.params, language)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Reset the "copied" state whenever the popover closes.
  useEffect(() => {
    if (!isOpen) setCopied(false)
  }, [isOpen])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API unavailable — the read-only field lets the user copy manually.
      setCopied(false)
    }
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-graewe-gray-300 hover:border-graewe-dark bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-graewe-accent"
        aria-label={t('share.button')}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <svg className="w-5 h-5 text-graewe-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
        <span className="text-sm font-medium text-graewe-dark hidden sm:inline">
          {t('share.button')}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-lg border border-graewe-gray-200 z-50 overflow-hidden"
          role="dialog"
          aria-label={t('share.title')}
        >
          {/* Yellow accent bar at top — matches website dropdowns */}
          <div className="h-0.5 bg-graewe-accent"></div>
          <div className="p-4">
            <h3 className="text-sm font-bold text-graewe-dark">{t('share.title')}</h3>
            <p className="mt-1 text-xs text-graewe-dark-muted">{t('share.description')}</p>

            <input
              type="text"
              readOnly
              value={url}
              onFocus={(e) => e.target.select()}
              className="mt-3 w-full px-3 py-2 text-xs text-graewe-dark bg-graewe-gray-100 border border-graewe-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-graewe-accent"
              aria-label={t('share.title')}
            />

            <button
              onClick={handleCopy}
              className="btn-primary mt-3 w-full py-2 px-4 text-sm inline-flex items-center justify-center"
              type="button"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('share.copied')}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {t('share.copy')}
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
