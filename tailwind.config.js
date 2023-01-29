/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./components/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'main-100': '#2286e0',
        'main-200': '#6bb4f6',
        'base-100': '#2a2a2a',
        'base-200': '#181818',
        'light-100': '#f5f5f5',
        'light-200': '#e8e8e8',
      },
      fontSize: {
        'h1': ['2.6rem', '1.5'],
        'h2': ['1.8rem', '1.5'],
        'h3': ['1.5rem', '1.5'],
        'h4': ['1.25rem', '1.5'],
        'h5': ['1.rem', '1.7']
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          xl: "1400px",
        },
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 1024px) { ... }

        xl: "1230px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
