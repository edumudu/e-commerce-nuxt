require('dotenv').config();

export default {
  mode: 'universal',

  env: {
    APP_NAME: process.env.APP_NAME,
  },

  head: {
    title: `| ${process.eventNames.APP_NAME || ''}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  loading: { color: '#e53935' },

  css: [
    'bootstrap/scss/bootstrap-grid.scss',
  ],

  plugins: [
    '~/plugins/globaly-components',
    '~/plugins/vee-validate',
    '~/plugins/vue-toast-notification',
    '~/plugins/v-mask',
    { src: '~/plugins/vue-chartjs', ssr: false },
  ],

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/fontawesome',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],

  axios: {
    baseURL: process.env.BASE_URL_API,
    headers: { Accept: 'aplication/json' },
  },

  build: {
    transpile: ['vee-validate/dist/rules'],

    extend (config, ctx) {
    },
  },

  auth: {
    plugins: ['~/plugins/auth'],
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'get', propertyName: false },
        },
      },
    },
  },

  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      regular: true,
      brands: true,
    },
  },

  styleResources: {
    scss: './assets/scss/variables/*.scss',
  },
};
