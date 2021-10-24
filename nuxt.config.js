export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ennovuejs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue-typed.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
  ],

  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    langDir: '~/src/locales/', // here is languages directory
    locales: [ 
        { code: 'de', iso: 'de-DE', file: 'de.json', },
        { code: 'en', iso: 'en-EN', file: 'en.json', },
    ],
    vueI18n: {
      fallbackLocale: process.env.VUE_APP_I18N_LOCALE || 'en',         

    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },

  mixin:{
    data: function() {
      return {
        GlobalVar:'CodeChief is Awesome!'
      }
    }
  }

}
