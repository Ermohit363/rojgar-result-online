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
      'Latest Jobs'
    ],
    twitterCard: 'summary_large_image'
  },

  sitemap: {
   site: {
      url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000"
    },
    gzip: true,
    routes: async () => {
      const { $content } = useNuxtApp();

      // Get posts
      const posts = await $content('posts').fetch();

      // Get current affairs
      const affairs = await $content('current-affairs').fetch();

      // Map to routes
      const postRoutes = posts.map(post => `/post/${post.slug || post._path.replace('/posts/', '')}`);
      const affairRoutes = affairs.map(affair => `/current-affair/${affair.slug || affair._path.replace('/current-affairs/', '')}`);

      return [...postRoutes, ...affairRoutes];
    }
  }
})
