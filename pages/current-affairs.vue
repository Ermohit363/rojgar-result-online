<template>
  <div class="max-w-5xl mx-auto w-full px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-amber-600 dark:text-amber-400">
      Current Affairs
    </h1>

    <!-- Paginated Entries -->
    <div v-for="entry in pagedEntries" :key="entry.date" class="mb-8">
      <h2 class="text-xl font-semibold mb-4">{{ entry.date }}</h2>
      <ul class="space-y-3">
        <li
          v-for="(item, i) in entry.items"
          :key="i"
          class="p-4 rounded-lg shadow bg-white dark:bg-gray-800"
        >
          <p class="font-semibold text-gray-800 dark:text-gray-200">
            Q{{ i + 1 }}. {{ item.q }}
          </p>
          <p class="mt-2 text-green-700 dark:text-green-400">
            ➡️ {{ item.a }}
          </p>
        </li>
      </ul>
    </div>

    <!-- Pagination Controls -->
    <div class="mt-8 flex justify-between items-center">
      <NuxtLink
        v-if="page > 1"
        :to="`/current-affairs?page=${page - 1}`"
        class="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
      >
        ← Previous
      </NuxtLink>

      <NuxtLink
        v-if="hasMore"
        :to="`/current-affairs?page=${page + 1}`"
        class="ml-auto px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
      >
        Next →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import currentAffairs from '~/data/current-affairs.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const page = parseInt(route.query.page || '1')
const perPage = 7 // number of days per page

// Sort entries by date (latest first)
const sorted = [...currentAffairs].sort((a, b) => b.date.localeCompare(a.date))

// Calculate pagination
const start = (page - 1) * perPage
const pagedEntries = computed(() => sorted.slice(start, start + perPage))
const hasMore = computed(() => sorted.length > start + perPage)
</script>
