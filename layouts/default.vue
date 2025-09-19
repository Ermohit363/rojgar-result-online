<template>
  <!-- dark class applied to root div -->
  <div :class="{ dark: isDark }" class="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
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
</script>
