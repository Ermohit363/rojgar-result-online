<template>
    <header class="bg-amber-500 dark:bg-amber-600 text-white shadow-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">

            <!-- Logo -->
            <NuxtLink :to="'/'" class="text-xl font-bold hover:text-gray-800 transition">
                <img src="/rojgar-result-online-new.png" alt="rojgar result online" class="h-12 w-auto mr-3" />
                <!-- {{ siteName }} -->
            </NuxtLink>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-4 text-sm sm:text-base items-center">
                <NuxtLink to="/" class="font-semibold hover:text-gray-800 transition">Home</NuxtLink>
                <NuxtLink v-for="c in categories" :key="c" :to="`/category/${slugify(c)}`"
                    class="font-semibold hover:text-gray-800 transition">
                    {{ c }}
                </NuxtLink>
                <NuxtLink to="/contact" class="font-semibold hover:text-gray-800 transition">Contact</NuxtLink>

                <!-- Dark Mode Toggle -->
                <button @click="toggleDark" class="ml-4 p-1 rounded hover:bg-white/20 transition">
                    <span v-if="!isDark">🌙</span>
                    <span v-else>☀️</span>
                </button>
            </nav>

            <!-- Mobile Hamburger -->
            <div class="md:hidden flex items-center">
                <button @click="mobileOpen = !mobileOpen" class="p-2 rounded hover:bg-white/20 transition">
                    <svg v-if="!mobileOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileOpen" class="md:hidden bg-amber-500 dark:bg-gray-900 px-4 pb-4 space-y-2">
            <NuxtLink v-for="c in categories" :key="c" :to="`/category/${slugify(c)}`"
                class="block text-white hover:text-blue-300 transition" @click="mobileOpen = false">
                {{ c }}
            </NuxtLink>
            <NuxtLink to="/contact" class="block text-white hover:text-blue-300 transition" @click="mobileOpen = false">
                Contact
            </NuxtLink>

            <!-- Dark Mode Toggle -->
            <button @click="toggleDark"
                class="mt-2 w-full p-2 rounded bg-white/10 hover:bg-white/20 transition text-white">
                <span v-if="!isDark">🌙 Dark Mode</span>
                <span v-else>☀️ Light Mode</span>
            </button>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const config = useRuntimeConfig()
const siteName = config.public.siteName || 'ROjgar Result Online'

const categories = ['Latest Jobs', 'Admit Card', 'Result', 'Answer Key', 'Syllabus']
const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-')

// Mobile menu state
const mobileOpen = ref(false)

// Dark mode state
const isDark = ref(false)

// Load initial dark mode from localStorage / prefers-color-scheme
onMounted(() => {
    isDark.value = document.documentElement.classList.contains('dark')
})

const toggleDark = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark', isDark.value)
}
</script>
