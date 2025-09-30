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

  app: {
    head: {
      title: 'Rojgar Result Online',
      titleTemplate: '%s | Rojgar Result Online',
      meta: [
        {
          name: 'description',
          content:
            'Rojgar Result Online provides Sarkari Result, Govt Job Alerts, Rojgar Result, Admit Card, Results, Answer Keys, Daily Current Affairs, Syllabus and more updates for 2025.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  seo: {
    siteName: 'Rojgar Result Online',
    siteUrl: 'https://www.rojgarresultonline.com',
    trailingSlash: true,
    titleTemplate: '%s | Rojgar Result Online',
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
    openGraph: {
      image: '/rojgar-result-online-new.png',
      title: 'Rojgar Result Online',
      description:
        'Rojgar Result Online 2025 – Get latest Sarkari Result, Sarkari Naukri, Govt Job Vacancies, Admit Cards, Syllabus, Answer Keys and more.',
      url: 'https://www.rojgarresultonline.com'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@YourTwitterHandle',
      creator: '@YourTwitterHandle'
    }
  },

  sitemap: {
    site: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
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

      // Explicit prefix mapping
      addRoutesFromFolder(path.resolve('./content/post'), '/post/')
      addRoutesFromFolder(path.resolve('./content/current-affair'), '/current-affair/')

      return routes
    }
  }
})
