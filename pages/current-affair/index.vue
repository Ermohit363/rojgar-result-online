<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">Current Affairs</h1>

    <!-- Cards for each date -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="date in pagedDates"
        :key="date"
        class="bg-white dark:bg-gray-900 border rounded-lg p-4 shadow hover:shadow-lg transition"
      >
        <NuxtLink
         :to="`/current-affair/${slugifyDate(date)}`"
          class="block text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          {{ formatDate(date) }} Current Affair
        </NuxtLink>
        <p class="text-gray-600 dark:text-gray-400 mt-2">
          <!-- {{ grouped[date].length }}  -->Daily Top 10 Current Affairs
        </p>
      </div>
    </div>

    <!-- Pagination -->
    <div class="mt-6 flex justify-between">
      <NuxtLink
        v-if="page > 1"
        :to="`/current-affair?page=${page - 1}`"
        class="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Previous
      </NuxtLink>

      <NuxtLink
        v-if="hasMore"
        :to="`/current-affair?page=${page + 1}`"
        class="text-blue-600 dark:text-blue-400 hover:underline ml-auto"
      >
        Next
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// ✅ Fetch data (replace with queryContent if using @nuxt/content)
const { data: currentAffairs } = await useAsyncData('currentAffairs', () =>
  queryCollection('currentAffairs').all()
)

// ✅ Group by date (reactive)
const grouped = computed(() => {
  return (currentAffairs.value || []).reduce((acc, item) => {
    if (!acc[item.meta.date]) acc[item.meta.date] = []
    acc[item.meta.date].push(item)
    return acc
  }, {})
})

// ✅ Sort newest first
const sortedDates = computed(() =>
  Object.keys(grouped.value).sort((a, b) => b.localeCompare(a))
)

// ✅ Pagination
const route = useRoute()
const page = parseInt(route.query.page || '1')
const perPage = 10
const start = (page - 1) * perPage

const pagedDates = computed(() =>
  sortedDates.value.slice(start, start + perPage)
)
const hasMore = computed(() => sortedDates.value.length > start + perPage)

// ✅ Helpers
const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

const slugifyDate = (d) =>  formatDate(d).toLowerCase().replace(/\s+/g, '-')
</script>
