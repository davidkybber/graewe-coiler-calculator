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
          'primary': '#1a1a1a',
          'secondary': '#2d2d2d',
          'accent': '#ffd600',
          'accent-light': '#ffe033',
          'accent-dark': '#e6c000',
          'dark': '#1a1a1a',
          'dark-light': '#2d2d2d',
          'dark-muted': '#4a4a4a',
          'light': '#f5f5f5',
          'white': '#ffffff',
          'gray': {
            '50': '#fafafa',
            '100': '#f5f5f5',
            '200': '#ebebeb',
            '300': '#d4d4d4',
            '400': '#9e9e9e',
            '500': '#6b6b6b',
            '600': '#4a4a4a',
            '700': '#2d2d2d',
            '800': '#1a1a1a',
            '900': '#111111'
          }
        }
      },
      fontFamily: {
        'sans': ['"Helvetica Neue"', 'Arial', '"Nimbus Sans L"', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem'
      },
      screens: {
        'xs': '375px'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
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
