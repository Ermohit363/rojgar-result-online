<template>
 <NuxtLink
    :to="`/post/${post.meta.slug}`" target="_blank"
    class="block p-4 rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition"
  >
    <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">
      {{ post.title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 line-clamp-2">
      {{ post.summary }}
    </p>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
