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

const isDark = ref(false)

// load initial dark mode
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

// optional: toggle via header button

const config = useRuntimeConfig()

useHead({
  title: 'Rojgar Result Online - Latest Govt Jobs, Results, Admit Cards',
  meta: [
    { name: 'description', content: 'Rojgar Result Online provides Sarkari Result, Govt Job Alerts, Admit Card, Results, Answer Keys, Syllabus and more updates for 2025.' },
    { property: 'og:title', content: 'Rojgar Result Online - Sarkari Result Online & Govt Job Updates' },
    { property: 'og:description', content: 'Get latest Rojgar Result Online updates including Sarkari Results, Govt Jobs, Admit Cards, and Recruitment 2025 notifications.' },
    { property: 'og:url', content: `${useRuntimeConfig().public.baseUrl}` },
    { name: "google-site-verification", content: "google-site-verification=nAu6Mw-j_7wsDOkPoBtw2GCnn7pl9JMxkLOH7jMBEKI" }
  ],
  link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.baseUrl}` }]
})
</script>
