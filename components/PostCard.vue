<template>
  <article
    class="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 
           transition transform hover:shadow-md hover:-translate-y-1 duration-200"
  >
    <NuxtLink :to="`/post/${post.slug}`" class="block space-y-2">
      <!-- Title -->
      <h2
        class="text-lg font-semibold text-gray-900 dark:text-gray-100 
               group-hover:text-blue-600 transition-colors"
      >
        {{ post.title }}
      </h2>

      <!-- Meta info -->
      <p class="text-xs text-gray-500">
        {{ post.category }} • {{ post.date }}
      </p>

      <!-- Summary -->
      <p class="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
        {{ post.summary }}
      </p>
    </NuxtLink>
  </article>
</template>

<script setup>
defineProps({ post: Object })
</script>
