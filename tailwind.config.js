/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'graewe': {
          'primary': '#1f2937',      // Dark blue-gray (professional)
          'secondary': '#374151',    // Medium gray
          'accent': '#f59e0b',       // GRAEWE yellow/orange
          'yellow': '#fbbf24',       // Bright yellow
          'orange': '#f97316',       // Orange accent  
          'dark': '#111827',         // Very dark
          'light': '#f9fafb',        // Very light gray
          'white': '#ffffff',
          'gray': {
            '50': '#f9fafb',
            '100': '#f3f4f6',
            '200': '#e5e7eb',
            '300': '#d1d5db',
            '400': '#9ca3af',
            '500': '#6b7280',
            '600': '#4b5563',
            '700': '#374151',
            '800': '#1f2937',
            '900': '#111827'
          }
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      screens: {
        'xs': '375px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
