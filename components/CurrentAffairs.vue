<template>
  <div class="max-w-5xl mx-auto w-full px-4 py-8">
    <h2 class="text-2xl font-bold mb-6 text-amber-600 dark:text-amber-400">
      आज के करेंट अफेयर्स ({{ today }})
    </h2>

    <ul class="space-y-4">
      <li
        v-for="(item, i) in todayItems"
        :key="i"
        class="p-4 rounded-lg shadow bg-white dark:bg-gray-800"
      >
        <p class="font-semibold text-gray-800 dark:text-gray-200">
          Q{{ i + 1 }}. {{ item.q }}
        </p>
        <p class="mt-2 text-green-700 dark:text-green-400">
          ➡️ {{ item.a }}
        </p>
      </li>
    </ul>

    <!-- See More -->
    <div class="mt-6 text-right">
      <NuxtLink
        to="/current-affairs"
        class="text-amber-600 dark:text-amber-400 font-semibold hover:underline"
      >
        👉 See All Current Affairs
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import currentAffairs from '~/data/current-affairs.json'

// today’s date (adjust if you save in IST)
const today = new Date().toISOString().split('T')[0]

// Find today’s entry
const todayEntry = currentAffairs.find(e => e.date === today)

// Show today’s Q&A (or fallback if no entry found)
const todayItems = computed(() => todayEntry ? todayEntry.items : [])
</script>
