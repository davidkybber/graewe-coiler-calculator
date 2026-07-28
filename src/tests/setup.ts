import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock localStorage. Recent Node versions ship their own `localStorage` global
// that shadows the jsdom implementation and has no Storage methods, which makes
// every component touching stored preferences throw. An in-memory stand-in keeps
// the suite behaving the same on every Node version.
const createStorage = (): Storage => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => (key in store ? store[key] : null),
    setItem: (key: string, value: string) => {
      store[key] = String(value)
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
    key: (index: number) => Object.keys(store)[index] ?? null,
    get length() {
      return Object.keys(store).length
    },
  } as Storage
}

if (typeof window.localStorage?.getItem !== 'function') {
  for (const target of [window, globalThis]) {
    Object.defineProperty(target, 'localStorage', {
      configurable: true,
      writable: true,
      value: createStorage(),
    })
  }
}

// Mock service worker registration
Object.defineProperty(navigator, 'serviceWorker', {
  writable: true,
  value: {
    register: vi.fn().mockResolvedValue({}),
    ready: Promise.resolve({
      unregister: vi.fn().mockResolvedValue(true),
    }),
  },
})
