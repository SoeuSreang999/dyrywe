// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  runtimeConfig: {
    mongoUri: process.env.MONGO_URI || 'mongodb+srv://sreangsoeu767:QVghhpQUSmU6yM0u@sreangsoeu.ibugblw.mongodb.net/expressDB?retryWrites=true&w=majority',
  },
  css: ['~/assets/css/main.css'],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  },

  plugins: ['~/plugins/fontawesome.js'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2024-08-22',
})