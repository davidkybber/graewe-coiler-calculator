import { defineConfig, Plugin, ResolvedConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { SUPPORTED_LANGUAGES, Language } from './src/i18n'
import {
  BODY_END,
  BODY_PLACEHOLDER,
  BODY_START,
  HEAD_END,
  HEAD_PLACEHOLDER,
  HEAD_START,
  buildSeoBody,
  buildSeoHead,
  buildSitemap
} from './src/seo/head'

/** Swap the content between two markers (markers included in `replacement`). */
const replaceRegion = (
  html: string,
  start: string,
  end: string,
  replacement: string
): string => {
  const from = html.indexOf(start)
  const to = html.indexOf(end)
  if (from === -1 || to === -1) {
    throw new Error(`SEO markers ${start}…${end} not found in built index.html`)
  }
  return html.slice(0, from) + replacement + html.slice(to + end.length)
}

/**
 * SEO plugin.
 *
 * 1. Fills the placeholders in index.html with the block for the adaptive root
 *    page (x-default). Runs through Vite's normal HTML pipeline so the PWA
 *    precache revision stays in sync with the emitted file.
 * 2. After the build, writes one static page per language (dist/<lang>/index.html)
 *    plus the sitemap. These are additive — index.html is never rewritten.
 */
const seo = (): Plugin => {
  let config: ResolvedConfig

  return {
    name: 'graewe-seo',
    configResolved(resolved) {
      config = resolved
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace(HEAD_PLACEHOLDER, buildSeoHead())
          .replace(BODY_PLACEHOLDER, buildSeoBody())
      }
    },
    async closeBundle() {
      const outDir = resolve(config.root, config.build.outDir)
      const rootHtml = await readFile(resolve(outDir, 'index.html'), 'utf-8')

      await Promise.all(
        SUPPORTED_LANGUAGES.map(async (language: Language) => {
          const translated = replaceRegion(
            replaceRegion(rootHtml, HEAD_START, HEAD_END, buildSeoHead(language)),
            BODY_START,
            BODY_END,
            buildSeoBody(language)
          )
          const html = translated.replace('<html lang="de">', `<html lang="${language}">`)
          if (language !== 'de' && html === translated) {
            throw new Error(`Could not set <html lang> for the ${language} page`)
          }

          const dir = resolve(outDir, language)
          await mkdir(dir, { recursive: true })
          await writeFile(resolve(dir, 'index.html'), html, 'utf-8')
        })
      )

      await writeFile(resolve(outDir, 'sitemap.xml'), buildSitemap(), 'utf-8')
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    seo(),
VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'favicon-32x32.png', 'apple-touch-icon.png', 'graewe-logo.jpg', 'og-image.png', 'robots.txt'],
      manifest: {
        name: 'GRAEWE Coiler Calculator',
        short_name: 'Coiler Calc',
        description: 'Professional coil calculator for manufacturing and industrial applications',
        lang: 'de',
        theme_color: '#ffd600',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts'
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
})
