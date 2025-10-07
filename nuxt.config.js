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
        { name: 'robots', content: 'index, follow' },
        { name: 'google-adsense-account', content:'ca-pub-2704961595084200' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.rojgarresultonline.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          async: true,
          crossorigin: "anonymous",
          "data-ad-client": "ca-pub-2704961595084200" // <-- Replace with your AdSense ID
        }
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
      site: '@RojgarResultOn',
      creator: '@RojgarResultOn',
      description: 'Rojgar Result Online 2025 – Get Sarkari Result, Sarkari Naukri, Govt Job Vacancies, Admit Cards, Syllabus, Answer Keys,  Latest Jobs Rojgar Result , Latest Jobs , Latest Result , Admit Card , Online Form , Offline Form , Sarkari Yojana and more.',
      title: 'Rojgar Result Online: RojgarResultOnline.Com | Latest Jobs | Naukari | Result | Admit Card',
      image: '/rojgar-result-online-new.png'
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
