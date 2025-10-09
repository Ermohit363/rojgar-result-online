<template>
  <!-- dark class applied to root div -->
  <div :class="{ dark: isDark }"
    class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Header />

    <main class="flex-1 max-w-7xl mx-auto px-4 py-8">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isDark = ref(false)

// load initial dark mode
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

// optional: toggle via header button

const config = useRuntimeConfig()

useHead({
  title: 'Rojgar Result Online : RojgarResultOnline.Com | Latest Jobs | Naukari | Result | Admit Card | Answer Key | Syllabus | Daily Current Affairs',
  meta: [
    { name: 'description', content: 'Rojgar Result Online provides Sarkari Result, Govt Job Alerts, Rojgar Result, Admit Card, Results, Answer Keys, Daily Current Affairs, Syllabus and more updates for 2025.' },
    //{ property: 'og:title', content: 'Rojgar Result Online - Sarkari Result Online & Govt Job Updates' },
    // { property: 'og:description', content: 'Get latest Rojgar Result Online updates including Rojgar Result, Sarkari Results, Govt Jobs, Admit Cards, Daily Current Affairs and Recruitment 2025 notifications.' },
    { property: 'og:site_name', content: `${useRuntimeConfig().public.baseUrl}` },
    { hid: 'og:image', property: 'og:image', content: 'https://www.rojgarresultonline.com/rojgar-result-online-new.png' },
    { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
    { hid: 'og:image:height', property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Rojgar Result Online - Sarkari Result Online & Govt Job Updates' },
    { name: 'twitter:description', content: 'Get latest Rojgar Result Online updates including Rojgar Result, Sarkari Results, Govt Jobs, Admit Cards, Daily Current Affairs and Recruitment 2025 notifications.' },
    { name: 'twitter:image', content: 'https://www.rojgarresultonline.com/rojgar-result-online-new.png' },
    { name: "google-site-verification", content: "nAu6Mw-j_7wsDOkPoBtw2GCnn7pl9JMxkLOH7jMBEKI" }
  ],
  link: [{ rel: 'canonical', href: 'https://www.rojgarresultonline.com' + route.path }]
})
</script>
