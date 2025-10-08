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
      title: 'Rojgar Result Online 2025 - Sarkari Result, Admit Card, Latest Govt Jobs',
      titleTemplate: '%s | Rojgar Result Online',
      meta: [
        {
          name: 'description',
          content:
            'Rojgar Result Online 2025 provides Sarkari Result, Govt Job Alerts, Admit Cards, Results, Answer Keys, Current Affairs, and Syllabus Updates.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'google-adsense-account', content: 'ca-pub-2704961595084200' },
        { name: 'keywords', content: 'Rojgar Result Online, Sarkari Result, Sarkari Naukri, Latest Jobs, Admit Card, Sarkari Exam, rojgarresultonline.com' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.rojgarresultonline.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
          async: true,
          crossorigin: 'anonymous',
          'data-ad-client': 'ca-pub-2704961595084200'
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Rojgar Result Online',
            url: 'https://www.rojgarresultonline.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.rojgarresultonline.com/search?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'application/ld+json': ['innerHTML']
      }
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
        'Rojgar Result Online 2025 – Sarkari Result, Admit Card, Govt Job Vacancies, Syllabus, Answer Keys & Current Affairs.',
      url: 'https://www.rojgarresultonline.com'
    },
    twitter: {
      card: 'summary_large_image',
      site: '@RojgarResultOn',
      creator: '@RojgarResultOn',
      description:
        'Rojgar Result Online 2025 – Latest Sarkari Result, Sarkari Naukri, Admit Card, Online Form, Answer Key, and Current Affairs.',
      title:
        'Rojgar Result Online: Sarkari Result, Latest Jobs, Admit Card, Govt Exams 2025',
      image: '/rojgar-result-online-new.png'
    }
  },

  sitemap: {
    siteUrl: 'https://www.rojgarresultonline.com',
    gzip: true,
    autoLastmod: true,
    changefreq: 'daily',
    priority: 1.0,

    // ✅ Auto-generate from Nuxt Content
    routes: async () => {
      const { serverQueryContent } = await import('#content/server')
      const docs = await serverQueryContent().find()
      return docs.map((doc) => doc._path)
    }
  },

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.rojgarresultonline.com/sitemap.xml'
  }
})
