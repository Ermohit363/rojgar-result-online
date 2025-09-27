export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo'
  ],
  ssr: true,
  runtimeConfig: {
    public: {
      siteName: 'Rojgar Result Online',
      baseUrl: process.env.BASE_URL || 'https://www.rojgarresultonline.com'
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
  },
  seo: {
    siteName: 'Rojgar Result Online',
    siteUrl: 'https://www.rojgarresultonline.com',
    trailingSlash: true,
    description: 'Rojgar Result Online 2025 – Get the latest Sarkari Result, Sarkari Naukri, Govt Job Vacancies, Admit Cards, Syllabus, Answer Keys and more.',
    keywords: [
      'Rojgar Result Online',
      'Sarkari Result 2025',
      'Govt Jobs',
      'Sarkari Naukri',
      'Admit Card',
      'Latest Jobs'
    ],
    twitterCard: 'summary_large_image',
  },
  sitemap: {
    hostname: 'https://www.rojgarresultonline.com', // 🔴 change to your domain
    gzip: true,
    routes: async () => {
      const fs = await import('fs')
      const path = await import('path')

      const dirs = [
        { folder: './content/posts', prefix: '/post/' },
        { folder: './content/current-affairs', prefix: '/current-affair/' }
      ]

      let routes = []

      for (const { folder, prefix } of dirs) {
        const dirPath = path.resolve(folder)
        if (!fs.existsSync(dirPath)) continue

        const files = fs.readdirSync(dirPath)
        routes.push(
          ...files
            .filter(file => file.endsWith('.md'))
            .map(file => `${prefix}${file.replace(/\.md$/, '')}`)
        )
      }

      return routes
    }
  }
})
