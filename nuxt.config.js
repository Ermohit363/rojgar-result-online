export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap'
  ],

  ssr: true,

  runtimeConfig: {
    public: {
      siteName: 'Rojgar Result Online',
      baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },

  seo: {
    siteName: 'Rojgar Result Online',
    siteUrl: 'https://www.rojgarresultonline.com',
    trailingSlash: true,
    description:
      'Rojgar Result Online 2025 – Get the latest Sarkari Result, Sarkari Naukri, Govt Job Vacancies, Admit Cards, Syllabus, Answer Keys and more.',
    keywords: [
      'Rojgar Result Online',
      'Sarkari Result 2025',
      'Govt Jobs',
      'Sarkari Naukri',
      'Admit Card',
      'Latest Jobs',
      'Rojgar Result',
      'Sarkari Result',
      'Rojgar',
      'Result',
    ],
    twitterCard: 'summary_large_image'
  },

 sitemap: {
  site: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
  routes: async () => {
    const fs = await import('fs')
    const path = await import('path')

    const routes = []

    const addRoutesFromFolder = (folderPath, prefix) => {
      if (!fs.existsSync(folderPath)) return
      const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.md'))
      files.forEach(file => {
        routes.push(`${prefix}${file.replace(/\.md$/, '')}`)
      })
    }

    // → Explicit prefix mapping
    addRoutesFromFolder(path.resolve('./content/post'), '/post/')
    addRoutesFromFolder(path.resolve('./content/current-affair'), '/current-affair/')

    return routes
  }
  }
})
