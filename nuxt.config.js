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
            'Rojgar Result Online provides Sarkari Result, Govt Job Alerts, Rojgar Result, Admit Card, Results, Answer Keys, Daily Current Affairs, Syllabus and more updates for 2025.'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'index, follow' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.rojgarresultonline.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        // { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-C5EDDM3RWR',
          async: true
        },
        {
          children: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-C5EDDM3RWR');
          `,
          type: 'text/javascript'
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
      'Result'
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
    site: 'https://www.rojgarresultonline.com',
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

      addRoutesFromFolder(path.resolve('./content/post'), '/post/')
      addRoutesFromFolder(path.resolve('./content/current-affair'), '/current-affair/')

      return routes
    }
  }
})
