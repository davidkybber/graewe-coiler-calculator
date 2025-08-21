# GRAEWE Coiler Calculator PWA - Project Overview

## Project Description

This project aims to recreate the GRAEWE coil calculator as a Progressive Web Application (PWA) that can be easily accessed via QR code or direct URL. The calculator helps users perform coil-related calculations for manufacturing/industrial purposes.

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
- **Build Tool**: Vite
- **Styling**: CSS Modules + Tailwind CSS for utility-first responsive design
- **PWA**: Vite PWA plugin with Workbox
- **Testing**: Vitest + React Testing Library + Playwright for E2E
- **Deployment**: GitHub Pages via GitHub Actions
- **Code Quality**: ESLint + Prettier + Husky

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
- Input fields for coil parameters
- Real-time calculation as user types
- Clear, easy-to-read results display
- Input validation and error handling
- Reset/clear functionality

### Algorithm Implementation
Currently using a placeholder algorithm. The actual calculation logic should be:
1. Easily replaceable in the `services/calculations.ts` file
2. Well-documented with parameter descriptions
3. Unit tested with known input/output pairs
4. Validated against the original calculator

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
