<template>
    <section class="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-6xl font-bold text-red-600">{{ error.statusCode }}</h1>
        <p class="text-xl mt-4">{{ error.statusMessage || 'Page not found' }}</p>
        <NuxtLink to="/" class="mt-6 text-blue-600 hover:underline">
            Go back home
        </NuxtLink>
    </section>
</template>

<script setup>
defineProps({
    error: {
        type: Object,
        required: true
    }
})
</script>
