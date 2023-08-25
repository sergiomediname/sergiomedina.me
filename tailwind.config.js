/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.vue',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontSize: {
      body: ['1rem', '1.5']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1300px'
      }
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1300px'
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        primary: '#2DE894',
        secondary: '#0090E1',
        dark: '#0D0D0D',
        base: '#A9A9A9',
        alt: '#676767',
        highlight: '#FFFFFF'
      },
      fontFamily: {
        body: ['Inter', 'sans-serif']
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        }
      },
      animation: {
        gradient: 'gradient 3s ease alternate infinite'
      }
    }
  },
  plugins: []
}
