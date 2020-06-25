require('dotenv').config();

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: `| ${process.eventNames.APP_NAME || ''}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#e53935' },
  /*
  ** Global CSS
  */
  css: [
    'bootstrap/scss/bootstrap-grid.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vee-validate',
    '~/plugins/vue-toast-notification',
    '~/plugins/v-mask',
    { src: '~/plugins/vue-chartjs', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    ['@nuxtjs/dotenv', { path: './' }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/auth',
    'nuxt-fontawesome'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_URL_API,
    headers: { Accept: 'aplication/json' }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: ['vee-validate/dist/rules'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: false }
        }
      }
    },
    cookie: {
      options: {
        maxAge: 3600
      }
    },
    resetOnError: true
  },

  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: ['far']
      }
    ]
  },

  styleResources: {
    scss: './assets/scss/variables/*.scss'
  }
};
