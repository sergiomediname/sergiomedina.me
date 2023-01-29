// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
          title: "Sergio Medina 🚀 Front-end Developer",
          htmlAttrs: {
            lang: 'en'
          },
          meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Specialist in Web Development and UX/UI Design with +5 years of experience creating an ❤️ emotional relationship between brands and their consumers.' },
            { name: 'format-detection', content: 'telephone=no' }
          ],
          link: [
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap'
            }
          ]
        }
      },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['@/assets/scss/main.scss'],
    modules: [
      '@nuxtjs/color-mode',
      '@nuxt/content'
    ],
    colorMode: {
      classSuffix: ''
    }
})
