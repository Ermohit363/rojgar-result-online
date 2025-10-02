// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  ssr: true,

  runtimeConfig: {
    public: {
      siteName: 'Rojgar Result Online',
      baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.rojgarresultonline.com'
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
            'Rojgar Result Online provides Sarkari Result, Govt Job Alerts, Admit Cards, Results, Answer Keys, Current Affairs, Syllabus and more for 2025.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.rojgarresultonline.com' },
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
      'Rojgar Result Online 2025 – Get Sarkari Result, Sarkari Naukri, Govt Job Vacancies, Admit Cards, Syllabus, Answer Keys and more.',
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
      'Result'
    ],
    openGraph: {
      image: '/rojgar-result-online-new.png',
      title: 'Rojgar Result Online',
      description:
        'Rojgar Result Online 2025 – Get Sarkari Result, Sarkari Naukri, Govt Job Vacancies, Admit Cards, Syllabus, Answer Keys and more.',
      url: 'https://www.rojgarresultonline.com'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@YourTwitterHandle',
      creator: '@YourTwitterHandle'
    }
  },

  sitemap: {
    siteUrl: 'https://www.rojgarresultonline.com',
    gzip: true,
    autoLastmod: true,

    // ✅ Auto-generate all Nuxt Content routes
    routes: async () => {
      const { serverQueryContent } = await import('#content/server')
      const docs = await serverQueryContent().find()

      return docs.map(doc => doc._path) // every .md file URL
    }
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.rojgarresultonline.com/sitemap.xml'
  }
})
