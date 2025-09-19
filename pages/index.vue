<template>
  <div class="w-full px-4 py-8 container mx-auto">
    <h1 class="text-2xl font-bold mb-6">Latest Updates</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Other categories -->
      <div
        v-for="c in mainCategories"
        :key="c"
        class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden flex flex-col transition hover:shadow-lg"
      >
        <div class="bg-amber-500 dark:bg-amber-600 px-4 py-2">
          <h2 class="text-lg font-semibold text-white">{{ c }}</h2>
        </div>

        <div class="flex-1 p-4 space-y-3">
          <PostCard
            v-for="p in getPosts(c).slice(0, 10)"
            :key="p.slug"
            :post="p"
          />
        </div>

        <div v-if="getPosts(c).length > 10" class="px-4 py-3 text-right border-t dark:border-gray-700">
          <NuxtLink
           :to="`/post/${p.slug}`"
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            More →
          </NuxtLink>
        </div>
      </div>

      <!-- Current Affairs Card -->
      <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden flex flex-col transition hover:shadow-lg">
        <div class="bg-amber-500 dark:bg-amber-600 px-4 py-2">
          <h2 class="text-lg font-semibold text-white">Current Affairs</h2>
        </div>

        <div class="flex-1 p-4 space-y-2">
          <ul>
            <li v-for="date in pagedDates" :key="date" class="mb-2">
              <NuxtLink
                :to="`/current-affair/${slugifyDate(date)}-current-affair`"
                class="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {{ formatDate(date) }} Current Affair
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-if="sortedDates.length > 10" class="px-4 py-3 text-right border-t dark:border-gray-700">
          <NuxtLink
            to="/current-affair"
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            More →
          </NuxtLink>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import PostCard from '~/components/PostCard.vue'

const posts = ref([])
const currentAffairs = ref([])

// Categories
const mainCategories = ['Latest Jobs', 'Admit Card', 'Result', 'Answer Key', 'Syllabus']

// Fetch posts and current affairs from server APIs
onMounted(async () => {
  posts.value = await $fetch('/api/posts')
  currentAffairs.value = await $fetch('/api/current-affairs')
})

// Functions
const getPosts = (category) =>
  posts.value.filter(p => p.category === category).sort((a,b) => b.date.localeCompare(a.date))

const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-')

// Group current affairs by date
const grouped = computed(() => {
  return currentAffairs.value.reduce((acc, item) => {
    if (!acc[item.date]) acc[item.date] = []
    acc[item.date].push(item)
    return acc
  }, {})
})

const sortedDates = computed(() => Object.keys(grouped.value).sort((a,b) => b.localeCompare(a)))

// Pagination
const page = ref(1)
const perPage = 10
const start = computed(() => (page.value - 1) * perPage)
const pagedDates = computed(() => sortedDates.value.slice(start.value, start.value + perPage))
const hasMore = computed(() => sortedDates.value.length > start.value + perPage)

// Helpers
const formatDate = (d) => new Date(d).toLocaleDateString('en-GB', { day:'numeric', month:'long', year:'numeric' })
const slugifyDate = (d) => formatDate(d).toLowerCase().replace(/\s+/g,'-')
</script>
