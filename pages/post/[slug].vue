<template>
    <article v-if="post" class="max-w-4xl mx-auto px-4 py-8">
        <!-- Title -->
        <h1 class="text-3xl font-bold text-amber-600 mb-2">{{ post.title }}</h1>
        <p class="text-sm text-gray-500 mb-6">
            {{ post.category }} • {{ post.date }}
        </p>

        <!-- Highlights / Summary -->
        <div class="bg-amber-50 dark:bg-gray-800 border-l-4 border-amber-500 p-4 rounded-lg shadow mb-6">
            <h2 class="text-lg font-semibold mb-2">Quick Overview</h2>
            <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {{ post.summary }}
            </p>
        </div>

        <!-- Important Dates -->
        <section v-if="post.dates" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Important Dates</h2>
                </div>
                <div class="p-4">
                    <table class="w-full text-sm border">
                        <tbody>
                            <tr v-for="(val, key) in post.dates" :key="key"
                                class="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td class="p-2 font-medium capitalize">{{ key }}</td>
                                <td class="p-2">{{ val }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Application Fee -->
        <section v-if="post.applicationFee" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Application Fee</h2>
                </div>
                <div class="p-4">
                    <table class="w-full text-sm border">
                        <tbody>
                            <tr v-for="(val, key) in post.applicationFee" :key="key"
                                class="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td class="p-2 font-medium capitalize">{{ key }}</td>
                                <td class="p-2">{{ val }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Vacancy Details -->
        <section v-if="post.vacancy" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Vacancy Details</h2>
                </div>
                <div class="p-4">
                    <table class="w-full text-sm border">
                        <thead class="bg-amber-100 dark:bg-gray-700">
                            <tr>
                                <th class="p-2 border">Post Name</th>
                                <th class="p-2 border">Total</th>
                                <th class="p-2 border">Eligibility</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, i) in post.vacancy" :key="i"
                                class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td class="p-2 border">{{ item.name }}</td>
                                <td class="p-2 border">{{ item.total }}</td>
                                <td class="p-2 border">{{ item.eligibility }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Age Limit -->
        <section v-if="post.ageLimit" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Age Limit</h2>
                </div>
                <div class="p-4">
                    <table class="w-full text-sm border">
                        <thead class="bg-amber-100 dark:bg-gray-700">
                            <tr>
                                <th class="p-2 border">Post</th>
                                <th class="p-2 border">Minimum Age</th>
                                <th class="p-2 border">Maximum Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(age, i) in post.ageLimit" :key="i"
                                class="hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td class="p-2 border">{{ age.post }}</td>
                                <td class="p-2 border">{{ age.minimumAge }}</td>
                                <td class="p-2 border">{{ age.maximumAge }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Age Relaxation -->
        <section v-if="post.ageRelaxation" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Age Relaxation</h2>
                </div>
                <div class="p-4">
                    <table class="w-full text-sm border">
                        <tbody>
                            <tr v-for="(val, key) in post.ageRelaxation" :key="key"
                                class="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                                <td class="p-2 font-medium uppercase">{{ key }}</td>
                                <td class="p-2">{{ val }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Selection Process -->
        <section v-if="post.selectionProcess" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Selection Process</h2>
                </div>
                <div class="p-4 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {{ post.selectionProcess }}
                </div>
            </div>
        </section>

        <!-- Full Content -->
        <section v-if="post.content" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Full Notification</h2>
                </div>
                <div class="p-4 whitespace-pre-line">
                    {{ post.content }}
                </div>
            </div>
        </section>

        <!-- Important Links -->
        <section v-if="post.links" class="mb-8">
            <div class="bg-white dark:bg-gray-900 shadow rounded-lg overflow-hidden">
                <div class="bg-amber-500 px-4 py-2">
                    <h2 class="text-lg font-semibold text-white">Important Links</h2>
                </div>
                <div class="p-4 space-y-3">
                    <a v-for="(url, name) in post.links" :key="name" :href="url" target="_blank"
                        class="block text-center px-4 py-2 rounded font-medium shadow hover:opacity-90 transition"
                        :class="buttonClass(name)">
                        {{ name }}
                    </a>
                </div>
            </div>
        </section>

    </article>

    <!-- Loading / Not Found -->
    <div v-else class="text-center py-16 text-gray-500">
        Loading post or post not found...
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug
const post = ref(null)

// Colored buttons mapping
const buttonClass = (name) => {
    if (name.toLowerCase().includes('apply')) return 'bg-green-600 text-white'
    if (name.toLowerCase().includes('notification')) return 'bg-red-600 text-white'
    if (name.toLowerCase().includes('official')) return 'bg-blue-600 text-white'
    return 'bg-gray-600 text-white'
}

// Fetch post data from server API
onMounted(async () => {
    try {
        const allPosts = await $fetch('/api/posts') // fetch posts API
        post.value = allPosts.find(p => p.slug === slug)
    } catch (err) {
        console.error(err)
    }
})

// SEO / Head
useHead(() => ({
    title: post.value ? `${post.value.title} - ${useRuntimeConfig().public.siteName}` : 'Post Detail',
    meta: [
        { name: 'description', content: post.value?.summary || '' },
        { property: 'og:title', content: post.value ? `${post.value.title} - ${useRuntimeConfig().public.siteName}` : '' },
        { property: 'og:description', content: post.value?.summary || '' },
        { property: 'og:url', content: post.value ? `${useRuntimeConfig().public.baseUrl}/post/${slug}` : '' },
    ],
    link: [
        { rel: 'canonical', href: post.value ? `${useRuntimeConfig().public.baseUrl}/post/${slug}` : '' },
    ],
}))
</script>
