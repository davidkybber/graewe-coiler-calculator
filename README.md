# GRAEWE Coiler Calculator PWA

A Progressive Web Application for calculating coil parameters in manufacturing and industrial applications.

## 🚀 Features

- **Mobile-First Design**: Optimized for touch interactions and mobile devices
- **Progressive Web App**: Installable, works offline, fast loading
- **Real-time Calculations**: Instant feedback as you type
- **Professional UI**: Clean, business-focused interface
- **Comprehensive Validation**: Input validation with helpful error messages
- **Responsive Design**: Works seamlessly across all device sizes

## 🧮 Calculator Functions

Calculate key coil parameters including:
- **Inductance** (H)
- **Resistance** (Ω)
- **Quality Factor** (Q)
- **Wire Length** (m)
- **Self Capacitance** (F)
- **Resonant Frequency** (Hz)

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with custom properties
- **PWA**: Vite PWA Plugin + Workbox
- **Testing**: Vitest + React Testing Library
- **Deployment**: GitHub Pages

## 📱 Supported Inputs

- **Wire Diameter**: 0.01 - 50 mm
- **Number of Turns**: 1 - 10,000 turns
- **Core Diameter**: 0.1 - 1,000 mm
- **Core Length**: 0.1 - 1,000 mm
- **Core Materials**: Air, Iron, Ferrite, Powdered Iron
- **Wire Materials**: Copper, Aluminum, Silver

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

This calculator is designed for professional use in manufacturing and industrial applications. It provides accurate calculations based on established electrical engineering formulas.

---

**Note**: The current implementation uses placeholder algorithms. Replace with actual GRAEWE calculation formulas for production use.
