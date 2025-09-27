<template>
  <div class="max-w-7xl mx-auto w-full px-4 py-8">
    <!-- Category Title -->
    <h1 class="text-2xl font-bold mb-6">
      Category: {{ categoryName }}
    </h1>

    <!-- Posts -->
    <div class="space-y-4">
      <PostCard v-for="p in paged" :key="p.id" :post="p" />
    </div>

    <!-- Pagination -->
    <div class="mt-8 flex justify-between items-center">
      <NuxtLink
        v-if="page > 1"
        :to="`/category/${slug}?page=${page - 1}`"
        class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition"
      >
        ← Previous
      </NuxtLink>

      <NuxtLink
        v-if="hasMore"
        :to="`/category/${slug}?page=${page + 1}`"
        class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 transition ml-auto"
      >
        Next →
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import PostCard from '~/components/PostCard.vue'
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').all()
)
console.log('Fetched Posts:', posts.value)

const route = useRoute()

// ✅ reactive values
const slug = computed(() => route.params.slug)
const page = computed(() => parseInt(route.query.page || '1'))
const perPage = 10

// Category name for display
const categoryName = computed(() =>
  slug.value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
)
console.log('Category Slug:', slug.value)
console.log('Category Name:', categoryName.value)


// ✅ FIX: use p.meta.date (not p.date) + safe fallback
const filtered = computed(() =>
  (posts.value || [])
    .filter(
      p => p.meta.category?.toLowerCase().replace(/\s+/g, '-') === slug.value
    )
    .sort((a, b) => {
      const dateA = new Date(a.meta?.date || 0)
      const dateB = new Date(b.meta?.date || 0)
      return dateB - dateA // newest first
    })
)

console.log('Filtered Posts:', filtered.value)

const start = computed(() => (page.value - 1) * perPage)
const paged = computed(() => filtered.value.slice(start.value, start.value + perPage))
const hasMore = computed(() => filtered.value.length > start.value + perPage)

// Handle 404 if category is empty
watchEffect(() => {
  if (posts.value && !filtered.value.length) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }
})

// SEO
useHead({
  title: computed(() => `${categoryName.value} - ${useRuntimeConfig().public.siteName}`),
  meta: [
    { name: 'description', content: computed(() => `Posts in ${categoryName.value}`) },
    { property: 'og:title', content: computed(() => `${categoryName.value} - ${useRuntimeConfig().public.siteName}`) },
    { property: 'og:description', content: computed(() => `Posts in ${categoryName.value}`) },
    { property: 'og:url', content: computed(() => `${useRuntimeConfig().public.baseUrl}/category/${slug.value}`) }
  ],
  link: [
    { rel: 'canonical', href: computed(() => `${useRuntimeConfig().public.baseUrl}/category/${slug.value}`) }
  ]
})
</script>

