<template>
    <section class="max-w-2xl mx-auto py-12 px-4">
        <h1 class="text-3xl font-bold mb-6">Contact Us</h1>
        <form class="space-y-4">
            <div>
                <label class="block text-sm font-medium mb-1">Name</label>
                <input type="text" class="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Your Name" required />
            </div>
            <div>
                <label class="block text-sm font-medium mb-1">Email</label>
                <input type="email" class="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    placeholder="you@example.com" required />
            </div>
            <div>
                <label class="block text-sm font-medium mb-1">Message</label>
                <textarea rows="5" class="w-full border rounded-lg px-3 py-2 dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Send
            </button>
        </form>
    </section>
</template>

<script setup>
useHead({
    title: `Contact - ${useRuntimeConfig().public.siteName}`,
    meta: [
        { name: 'description', content: 'Contact us for any queries or feedback.' },
        { property: 'og:title', content: `Contact - ${useRuntimeConfig().public.siteName}` },
        { property: 'og:description', content: 'Contact us for any queries or feedback.' },
        { property: 'og:url', content: `${useRuntimeConfig().public.baseUrl}/contact` }
    ],
    link: [{ rel: 'canonical', href: `${useRuntimeConfig().public.baseUrl}/contact` }]
})
</script>
