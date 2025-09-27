<template>
  <footer class="bg-amber-500 dark:bg-amber-600 text-white mt-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
      
      <!-- Copyright -->
      <p class="text-sm sm:text-base">&copy; {{ new Date().getFullYear() }} {{ siteName }}. All rights reserved.</p>

      <!-- Footer Links -->
      <div class="mt-2 md:mt-0 space-x-4 text-sm sm:text-base">
        <NuxtLink to="/about" class="hover:text-gray-800 transition">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-gray-800 transition">Contact</NuxtLink>
        <NuxtLink to="/privacy-policy" class="hover:text-gray-800 transition">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
const siteName = config.public.siteName || 'Site Name'
</script>
