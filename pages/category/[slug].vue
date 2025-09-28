<script setup>
import PostCard from '~/components/PostCard.vue'
import { computed, watchEffect } from 'vue'
import { useRoute, useRuntimeConfig, createError } from '#imports'

const config = useRuntimeConfig() // ✅ composable called at top level
const route = useRoute()

// Data fetching
const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').all()
)

// Reactive values
const slug = computed(() => route.params.slug)
const page = computed(() => parseInt(route.query.page || '1'))
const perPage = 10

// Category name
const categoryName = computed(() =>
  slug.value.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
)

// Filter posts
const filtered = computed(() =>
  (posts.value || [])
    .filter(
      p => p.meta.category?.toLowerCase().replace(/\s+/g, '-') === slug.value
    )
    .sort((a, b) => {
      const dateA = new Date(a.meta?.date || 0)
      const dateB = new Date(b.meta?.date || 0)
      return dateB - dateA
    })
)

const start = computed(() => (page.value - 1) * perPage)
const paged = computed(() => filtered.value.slice(start.value, start.value + perPage))
const hasMore = computed(() => filtered.value.length > start.value + perPage)

// Handle 404
watchEffect(() => {
  if (posts.value && !filtered.value.length) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found' })
  }
})

// SEO — composables are called outside of computed inside useHead
const title = computed(() => `${categoryName.value} - ${config.public.siteName}`)
const description = computed(() => `Posts in ${categoryName.value}`)
const ogTitle = computed(() => `${categoryName.value} - ${config.public.siteName}`)
const ogDescription = computed(() => `Posts in ${categoryName.value}`)
const ogUrl = computed(() => `${config.public.baseUrl}/category/${slug.value}`)
const canonicalUrl = computed(() => `${config.public.baseUrl}/category/${slug.value}`)

useHead({
  title,
  meta: [
    { name: 'description', content: description.value },
    { property: 'og:title', content: ogTitle.value },
    { property: 'og:description', content: ogDescription.value },
    { property: 'og:url', content: ogUrl.value }
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl.value }
  ]
})
</script>

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
