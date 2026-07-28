# GRAEWE Coiler Calculator PWA

A Progressive Web Application for calculating pipe coiling parameters in manufacturing and industrial applications. This calculator implements GRAEWE's **Wickellänge** (coil length) and **Wickelendposition** (end position) calculations.

## 🚀 Features

- **Mobile-First Design**: Optimized for touch interactions and mobile devices
- **Progressive Web App**: Installable, works offline, fast loading
- **Real-time Calculations**: Instant feedback as you type in German locale
- **GRAEWE Branding**: Professional UI with authentic GRAEWE yellow/orange colors
- **German Interface**: German labels and comma decimal formatting
- **Comprehensive Validation**: Input validation with helpful German error messages
- **Responsive Design**: Works seamlessly across all device sizes

## 🧮 Calculator Functions

Calculate key pipe coiling parameters including:
- **Wickellänge** (Coil Length) - Calculate total coiling length
- **Wickelendposition** (End Position) - Calculate final position after coiling
- **Pipes per Layer** - Determine optimal pipe arrangement
- **Number of Layers** - Calculate required layers for bundle
- **Bundle Dimensions** - Calculate width and height of coiled bundle

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 3.4 + CSS custom properties
- **PWA**: Vite PWA Plugin + Workbox
- **Testing**: Vitest + React Testing Library (100% coverage)
- **Internationalization**: German number formatting
- **Deployment**: GitHub Pages

## 📱 Supported Inputs

- **Rohrdurchmesser** (Pipe Diameter): 0.1 - 1000 mm
- **Rohrlänge** (Pipe Length): 0.1 - 10000 mm  
- **Innendurchmesser** (Inner Diameter): 1 - 5000 mm
- **Außendurchmesser** (Outer Diameter): 1 - 5000 mm
- **Bündelbreite** (Bundle Width): 1 - 10000 mm
- **Bündelhöhe** (Bundle Height): 1 - 10000 mm
- **Calculation Modes**: Wickellänge, Wickelendposition
- **Coil Methods**: Ungleiche Lagen, Gleiche Lagen versetzt

## 🚀 Quick Start

### Development

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
\`\`\`

### Testing

\`\`\`bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
\`\`\`

## 📝 Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── Calculator/      # Calculator-specific components
│   ├── UI/             # Reusable UI components
│   └── Layout/         # Layout components
├── services/           # Business logic and calculations
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── styles/             # Global styles
└── tests/              # Test utilities
\`\`\`

## 🧪 Testing

The application includes comprehensive tests:
- **Unit Tests**: All calculation logic (100% coverage)
- **Component Tests**: UI interactions and validation
- **Integration Tests**: Full user workflows

## 🔧 Configuration

### PWA Configuration

The app is configured as a PWA with:
- Service worker for offline functionality
- Web app manifest for installation
- Optimized caching strategies

### SEO Configuration

The site is deployed at `https://graewe-coiler-calculator.de` and is indexed as one
page per language:

| URL | Purpose |
| --- | --- |
| `/` | `x-default` — adapts to the visitor (stored preference / browser language), self-canonical |
| `/de/`, `/en/`, `/fr/`, `/ru/`, `/es/`, `/it/`, `/zh/`, `/ja/` | One indexable page per language, self-canonical, linked via `hreflang` |

- `src/seo/head.ts` builds the `<head>` block (title, description, canonical,
  hreflang, Open Graph, Twitter cards, JSON-LD `WebApplication` / `WebSite` /
  `Organization` / `FAQPage`), the crawlable `<noscript>` fallback and the sitemap.
- The `seo` Vite plugin in `vite.config.ts` fills the placeholders in `index.html`
  and, after the build, writes `dist/<lang>/index.html` plus `dist/sitemap.xml`.
- All copy lives in the `seo.*` keys of `src/i18n/<lang>.ts` — the rendered page and
  the static markup share the same strings, so they can never drift apart.
- `src/hooks/useSeoSync.ts` keeps title, description, canonical, `<html lang>` and
  the JSON-LD in sync when the language changes at runtime.
- `public/robots.txt` points crawlers at the sitemap; `public/og-image.png` is the
  1200×630 social preview.

To add a language: add it to `SUPPORTED_LANGUAGES` in `src/i18n/index.ts` (plus the
translation file and `OG_LOCALES` in `src/seo/siteConfig.ts`) — the page, hreflang
cluster, sitemap entry and footer link follow automatically.

### Build Configuration

- TypeScript strict mode enabled
- Path mapping for clean imports
- Optimized bundle splitting
- Source maps for debugging

## 📖 Documentation

- [Project Overview](docs/PROJECT_OVERVIEW.md) - Architecture and design decisions
- [Development Setup](docs/DEVELOPMENT_SETUP.md) - Local development guide
- [Cursor Rules](.cursorrules) - AI development guidelines

## 🤝 Contributing

1. Read the project documentation
2. Follow the cursor rules for development
3. Write tests for new features
4. Ensure all tests pass
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🏢 About GRAEWE

This calculator is designed for professional use in manufacturing and industrial applications. It provides accurate pipe coiling calculations based on GRAEWE's established formulas for **Wickellänge** and **Wickelendposition**.

---

**Production Ready**: This implementation uses actual GRAEWE calculation algorithms for pipe coiling, with German number formatting and professional GRAEWE branding.
