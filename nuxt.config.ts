// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Sergio Medina | Front-end Developer & Web Designer',
      meta: [
        { charset: 'utf-8' },
        { name: 'canonical', content: 'https://sergiomedina.netlify.app/' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Web developer based in Spain. Built accessible digital products for the web, focussed in the building simple and beautiful user experiences.'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'robots',
          content:
            'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Sergio Medina'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://sergiomedina.netlify.app/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Sergio Medina | Front-end Developer & Web Designer'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content:
            'Web developer based in Spain. Built accessible digital products for the web, focussed in the building simple and beautiful user experiences.'
        },
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'en_EN'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: 'https://sergiomedina.netlify.app/'
        }
      ],
      bodyAttrs: {
        class: 'bg-dark text-base font-body text-body'
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: [
    '@/assets/main.css'
  ],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Inter: true
    },
    display: 'swap'
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  runtimeConfig: { public: { gtmContainerId: 'GTM-WFNCS2G' } }
})
