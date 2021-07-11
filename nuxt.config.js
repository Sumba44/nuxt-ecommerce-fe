import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt Ecommerce' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;700',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#42b682',
    height: '3px',
    throttle: 0,
  },

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],

  eslint: {
    fix: true
  },

  fontawesome: {
    icons: {
      solid: [
        'faBars',
        'faSort',
        'faBusinessTime',
        'faSmile',
        'faTruck',
        'faInfoCircle',
        'faHome',
        'faShoppingCart',
        'faUser',
        'faEnvelope',
        'faPhone',
        'faGlobe',
        'faLaptopCode',
        'faGem',
        'faHeart',
        'faStar',
        'faSearch',
      ],
      regular: ['faStar'],
      brands: [
        'faApple',
        'faFacebook',
        'faInstagram',
        'faYoutube',
        'faLinkedin',
        'faTwitter',
        'faHtml5',
        'faCss3',
        'faJs',
        'faPhp',
        'faWordpress',
        'faReact',
        'faVuejs',
        'faSass',
        'faGithub',
        'faBootstrap',
      ],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
   
  },
}


