// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
        //   title: "Byte Movies",
        //   htmlAttrs: {
        //     lang: 'en'
        //   },
        //   meta: [
        //     { charset: 'utf-8' },
        //     { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        //     { hid: 'description', name: 'description', content: '' },
        //     { name: 'format-detection', content: 'telephone=no' }
        //   ],
        //   bodyAttrs: {
        //     class: 'bg-main-300 text-light-300'
        //   },
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
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
      classSuffix: ''
    }
})
