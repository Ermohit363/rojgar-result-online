export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    public: {
      siteName: 'Government Aspirant',
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
