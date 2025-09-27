<template>
    <article v-if="post" class="max-w-4xl mx-auto px-4 py-8">
        <!-- Full Content (Markdown Rendered) -->
        <section v-if="post.body" class="mb-8 prose prose-lg dark:prose-dark max-w-none w-full">
            <ContentRenderer :value="post.body" />
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
import { useAsyncData } from '#app'

const route = useRoute()
const slug = route.params.slug

const { data: posts } = await useAsyncData('posts', () =>
    queryCollection('posts').all()
)

const post = computed(() =>
    posts.value?.find(p => p.meta.slug === slug) || null
)

// Button styling logic
const buttonClass = (name) => {
    if (name.toLowerCase().includes('apply')) return 'bg-green-600 text-white'
    if (name.toLowerCase().includes('notification')) return 'bg-red-600 text-white'
    if (name.toLowerCase().includes('official')) return 'bg-blue-600 text-white'
    return 'bg-gray-600 text-white'
}

// Date formatting
const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
</script>
