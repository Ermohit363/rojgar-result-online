export default defineNuxtConfig({
    modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  ssr: true,
  runtimeConfig: {
    public: {
      siteName: 'Rojgar Result Online',
      baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    }
  },
 compatibilityDate: '2025-09-20',
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
})
