<template>
  <article v-if="post" class="max-w-4xl mx-auto px-4 py-8">
    <!-- Full Content (Markdown Rendered) -->
    <section v-if="post.body" class="mb-8 prose prose-lg dark:prose-dark max-w-none w-full">
      <ContentRenderer :value="post.body" />
    </section>

    <!-- Social Media Share Buttons -->
    <section class="mt-8 flex flex-wrap gap-3">
      <!-- ✅ Facebook -->
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Share on Facebook
      </a>

      <!-- ✅ Twitter/X -->
      <a
        :href="`https://twitter.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
      >
        Share on Twitter/X
      </a>

      <!-- ✅ WhatsApp -->
      <a
        :href="`https://wa.me/?text=${pageTitle} - ${currentUrl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
      >
        Share on WhatsApp
      </a>

      <!-- ✅ LinkedIn -->
      <a
        :href="`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`"
        target="_blank"
        rel="noopener noreferrer"
        class="px-4 py-2 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
      >
        Share on LinkedIn
      </a>

      <!-- ✅ Copy Link -->
      <button
        @click="copyLink"
        class="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700"
      >
        Copy Link
      </button>
    </section>
  </article>

  <!-- Loading / Not Found -->
  <div v-else class="text-center py-16 text-gray-500">
    Loading post or post not found...
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useAsyncData, useHead } from '#app'

const route = useRoute()
const slug = route.params.slug

const { data: posts } = await useAsyncData('posts', () =>
  queryCollection('posts').all()
)

const post = computed(() =>
  posts.value?.find(p => p.meta.slug === slug) || null
)

const pageTitle =
  post.value?.title ||
  slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())

// 👇 replace with your actual deployed domain
const currentUrl = `https://yourdomain.com/${slug}` 

// Copy link function
const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(currentUrl)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

// SEO
useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: post.value?.summary || '' }]
})
</script>
