/**
 * Shareable-configuration URL helpers.
 *
 * Serializes the current language + calculator parameters into a compact query
 * string (short keys) and parses them back defensively on load. This is the
 * single source of truth for the share-link contract.
 */

import {
  CalculationMode,
  CoilMethod,
  PipeCoilCalculationParams
} from '../types/CalculatorTypes'
import { Language } from '../i18n'

// Supported languages — used to validate the `lang` param.
const SUPPORTED_LANGUAGES: Language[] = ['de', 'en', 'fr', 'ru', 'es', 'it', 'zh', 'ja']

// Numeric params ↔ short URL keys.
const NUMBER_FIELDS: Record<string, keyof PipeCoilCalculationParams> = {
  pd: 'pipeDiameter',
  pl: 'pipeLength',
  id: 'innerDiameter',
  od: 'outerDiameter',
  bw: 'bundleWidth',
  ppl: 'pipesPerLayer'
}

// Reverse map (field → short key) for building URLs.
const NUMBER_KEYS = Object.fromEntries(
  Object.entries(NUMBER_FIELDS).map(([key, field]) => [field, key])
) as Record<string, string>

/**
 * Build a shareable absolute URL for the given params + language.
 * Only defined params are appended, keeping links short.
 */
export function buildShareUrl(
  params: Partial<PipeCoilCalculationParams>,
  language: Language
): string {
  const search = new URLSearchParams()

  search.set('lang', language)
  search.set('mode', params.calculationMode ?? CalculationMode.COIL_LENGTH)
  search.set('method', params.coilMethod ?? CoilMethod.UNEVEN_LAYERS)

  for (const [field, key] of Object.entries(NUMBER_KEYS)) {
    const value = params[field as keyof PipeCoilCalculationParams]
    if (typeof value === 'number' && Number.isFinite(value)) {
      search.set(key, String(value))
    }
  }

  return `${window.location.origin}${import.meta.env.BASE_URL}?${search.toString()}`
}

/**
 * Parse a location search string back into params + language.
 * Defensive by design: invalid numbers, unknown enum values, and garbage keys
 * are ignored. Never throws — bad input yields empty results.
 */
export function parseShareParams(search: string): {
  params: Partial<PipeCoilCalculationParams>
  language?: Language
} {
  const result: {
    params: Partial<PipeCoilCalculationParams>
    language?: Language
  } = { params: {} }

  let query: URLSearchParams
  try {
    query = new URLSearchParams(search)
  } catch {
    return result
  }

  const lang = query.get('lang')
  if (lang && SUPPORTED_LANGUAGES.includes(lang as Language)) {
    result.language = lang as Language
  }

  const mode = query.get('mode')
  if (mode === CalculationMode.COIL_LENGTH || mode === CalculationMode.END_POSITION) {
    result.params.calculationMode = mode
  }

  const method = query.get('method')
  if (method === CoilMethod.UNEVEN_LAYERS || method === CoilMethod.EVEN_LAYERS_OFFSET) {
    result.params.coilMethod = method
  }

  for (const [key, field] of Object.entries(NUMBER_FIELDS)) {
    const raw = query.get(key)
    if (raw === null || raw.trim() === '') continue
    const value = Number(raw)
    if (Number.isFinite(value)) {
      result.params[field] = value as never
    }
  }

  return result
}
