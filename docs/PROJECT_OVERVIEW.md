# GRAEWE Coiler Calculator PWA - Project Overview

## Project Description

This project is a Progressive Web Application (PWA) that recreates the GRAEWE pipe coiling calculator. The calculator helps users perform **Wickellänge** (coil length) and **Wickelendposition** (end position) calculations for pipe coiling in manufacturing and industrial applications. It can be easily accessed via QR code or direct URL and provides professional-grade calculations matching GRAEWE's original calculator functionality.

## Goals

1. **Single Page Application**: Create a focused, single-page calculator interface
2. **Mobile-First Design**: Optimize primarily for mobile devices while maintaining desktop compatibility
3. **Brand Consistency**: Maintain GRAEWE's existing visual identity and design language
4. **Business User Friendly**: Simple, intuitive interface for business professionals
5. **PWA Functionality**: Offline capability, installable, responsive
6. **Extensible Architecture**: Easy to modify and extend in the future

## Architecture Decisions

### Framework Choice: React + Vite

**Why React + Vite:**
- **AI-Friendly**: Extensive documentation and community support
- **Simple Setup**: Vite provides fast development environment with minimal configuration
- **PWA Support**: Easy PWA integration with Vite plugins
- **Component-Based**: Modular architecture perfect for extensibility
- **Mobile-First**: Excellent responsive design capabilities
- **Testing Ecosystem**: Comprehensive testing tools available

### Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 6.x
- **Styling**: Tailwind CSS 3.4 + CSS custom properties
- **Internationalization**: German number formatting with `toLocaleString('de-DE')`
- **PWA**: Vite PWA plugin with Workbox
- **Testing**: Vitest + React Testing Library (100% calculation coverage)
- **Deployment**: GitHub Pages via GitHub Actions
- **Code Quality**: ESLint + Prettier
- **Color Scheme**: GRAEWE brand colors (yellow/orange accents)

### Project Structure

```
/
├── docs/                     # Project documentation
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Calculator/      # Calculator-specific components
│   │   ├── UI/             # Generic UI components
│   │   └── Layout/         # Layout components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Business logic and calculations
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   ├── styles/             # Global styles and themes
│   └── tests/              # Test utilities and mocks
├── public/                 # Static assets and PWA files
└── e2e/                   # End-to-end tests
```

## Design Considerations

### Mobile-First Approach
- Touch-friendly interface with large input fields
- Optimized for portrait orientation
- Fast loading and minimal data usage
- Accessible via QR code for instant access

### Responsive Design Strategy
- **Mobile (320px-768px)**: Primary focus, optimized layout
- **Tablet (768px-1024px)**: Adapted mobile layout with more spacing
- **Desktop (1024px+)**: Centered layout with maximum width constraints

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

## Development Guidelines for Future AI Developers

### Persona
Adopt the role of a **Senior Frontend Developer** with expertise in:
- React/TypeScript development
- Mobile-first responsive design
- PWA best practices
- Business application UX
- Industrial/manufacturing domain knowledge

### Core Development Principles

1. **Component-First Development**
   - Create small, reusable components
   - Use composition over inheritance
   - Implement proper TypeScript interfaces

2. **Mobile-First CSS**
   - Start with mobile styles, enhance for larger screens
   - Use CSS Grid and Flexbox for layouts
   - Implement touch-friendly interactions

3. **Performance-First**
   - Lazy load components when possible
   - Optimize images and assets
   - Minimize bundle size

4. **Testing Strategy**
   - Unit tests for all calculation logic
   - Component tests for UI interactions
   - E2E tests for critical user journeys
   - Responsive design tests across devices

### Code Standards

- Use TypeScript strictly (no `any` types)
- Follow React best practices (hooks, functional components)
- Implement proper error boundaries
- Use semantic HTML elements
- Follow accessibility guidelines

## Calculator Requirements

### Core Functionality
- Input fields for pipe coiling parameters:
  - Pipe diameter (Rohrdurchmesser)
  - Pipe length (Rohrlänge) 
  - Inner diameter (Innendurchmesser)
  - Outer diameter (Außendurchmesser)
  - Bundle width (Bündelbreite)
  - Bundle height (Bündelhöhe)
- Calculation mode selection (Wickellänge vs Wickelendposition)
- Coil method selection (Ungleiche Lagen vs Gleiche Lagen versetzt)
- Real-time calculation as user types
- German number formatting (comma decimal separator)
- Clear, easy-to-read results display
- Input validation and error handling in German
- Reset/clear functionality

### Algorithm Implementation
Implements **exact GRAEWE pipe coiling algorithms** using **3D helical winding with hexagonal close packing**:

#### Core Mathematical Model
GRAEWE uses a sophisticated 3D helix model, not simple 2D circular calculations:

1. **Hexagonal Close Packing**: Layer height = `ND × √3/2`
2. **3D Helix Length Formula**: `L = √((π × D)² + pitch²) × turns`
3. **Layer Diameter**: `ODi = ID + ND + 2(i-1) × ND × √3/2`

#### Wickellänge (Coil Length) Calculation
1. **Method BB1 (Ungleiche Lagen / Uneven Layers)**
   - Alternating pipe count: odd layers = N, even layers = N-1
   - Iterates through layers until OD is exceeded
   - Each layer uses 3D helix formula: `Li = √((π × ODi)² + ND²) × Ni`
   - Returns sum of all layer lengths

2. **Method BB0.5 (Gleiche Lagen versetzt / Even Layers Offset)**
   - Constant reduced pipe count: `Ni = floor(W/ND - 0.5)`
   - Iterates through layers until OD is exceeded  
   - Each layer uses 3D helix formula with constant Ni
   - Returns sum of all layer lengths

#### Wickelendposition (End Position) Calculation
3. **Method BB1 (Ungleiche Lagen)**
   - Iteratively adds layers with alternating pipe counts
   - Uses 3D helix formula for each layer
   - Stops when accumulated length ≥ target length
   - Returns final outer diameter and bundle dimensions

4. **Method BB0.5 (Gleiche Lagen versetzt)**
   - Iteratively adds layers with constant pipe count
   - Uses 3D helix formula for each layer
   - Stops when accumulated length ≥ target length
   - Returns final outer diameter and bundle dimensions

#### Implementation Details
- **Parameter notation** (matching GRAEWE):
  - ND = pipe diameter (Rohrdurchmesser)
  - ID = inner diameter (Innendurchmesser)
  - OD = outer diameter (Außendurchmesser)
  - W = bundle width (Bundbreite)
  - L = pipe length (Rohrlänge)
  - ODi = diameter at layer i
  - Ni = number of pipes in layer i
  - √3/2 ≈ 0.866 (hexagonal packing factor)
- All calculations in `services/calculations.ts`
- Direct port from GRAEWE's JavaScript implementation
- **EXACT match verified**: Test results show 0 m difference from GRAEWE website
- Comprehensive test suite (31 tests) validates all scenarios
- Real-world test cases from GRAEWE website included

## Deployment Strategy

### GitHub Pages Setup
- Automated deployment via GitHub Actions
- Custom domain support ready
- HTTPS enforced
- PWA manifest and service worker properly configured

### PWA Features
- Offline functionality for core calculations
- Install prompts on mobile devices
- App-like experience when installed
- Fast loading with service worker caching

## Future Considerations

### Potential Enhancements
1. **Multiple Calculator Types**: Architecture supports adding new calculators
2. **User Preferences**: Save user settings and history
3. **Internationalization**: Multi-language support structure
4. **Advanced Features**: Charts, graphs, export functionality
5. **Backend Integration**: API for complex calculations or user data

### Maintenance Notes
- Regular dependency updates
- Browser compatibility testing
- Performance monitoring
- User feedback integration

## Success Metrics

- **Performance**: < 3s initial load on 3G
- **Accessibility**: WCAG 2.1 AA compliance
- **PWA**: Lighthouse PWA score > 90
- **Mobile Experience**: Smooth interaction on all target devices
- **User Adoption**: Easy QR code access and usage

---

This documentation serves as the foundation for all development work on the GRAEWE Coiler Calculator PWA. All future modifications should reference and update this document accordingly.
