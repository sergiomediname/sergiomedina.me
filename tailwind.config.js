/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontSize: {
      reset: ['16px'],
      sm: ['0.75rem', '1.5'], // 12px
      md: ['0.875rem', '1.5'], // 14px
      base: ['1rem', '1.5'], // 16px
      xl: ['1.125rem', '1.5'], // 18px
      '2xl': ['1.375rem', '1.5'], // 22px
      '3xl': ['2.25rem', '1.5'] // 36px
    },
    extend: {
      colors: {
        dark: '#0D0D0D',
        body: '#A9A9A9',
        highlight: '#FFFFFF',
        accent: '#2DE894',
        alter: '#0090E1'
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xl: '1300px'
        }
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '992px',
        // => @media (min-width: 1024px) { ... }

        xl: '1300px'
        // => @media (min-width: 1280px) { ... }
      },
      animation: {
        gradient: 'gradient 2s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      backgroundSize: {
        gradient: '200% 200%'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
}
