<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">{{ pageTitle }}</h1>

    <!-- Cards for each Q&A -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="qa in items"
        :key="qa.id"
        class="bg-white dark:bg-gray-900 border rounded-lg p-4 shadow hover:shadow-lg transition"
      >
        <p class="font-semibold mb-2">Q: {{ qa.question }}</p>
        <p class="text-gray-600 dark:text-gray-400">Ans: {{ qa.answer }}</p>
      </div>
    </div>

    <div v-if="!items.length" class="text-center text-gray-500 py-16">
      Loading current affairs...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

const items = ref([])
const pageTitle = ref('')

// Helper to convert slug date part
const monthMap = {
  january:'01', february:'02', march:'03', april:'04', may:'05', june:'06',
  july:'07', august:'08', september:'09', october:'10', november:'11', december:'12'
}

onMounted(async () => {
  try {
    // Fetch current affairs from API (which reads from Google Drive)
    const allCurrentAffairs = await $fetch('/api/current-affairs')

    // Remove "-current-affair" from slug
    const slugDatePart = slug.replace('-current-affair','')
    const [day, monthName, year] = slugDatePart.split('-')
    const month = monthMap[monthName.toLowerCase()]
    if (!month) throw createError({ statusCode: 404, statusMessage: 'Invalid date' })

    const dateStr = `${year}-${month}-${day.padStart(2,'0')}`

    // Filter items for this date
    items.value = allCurrentAffairs.filter(ca => ca.date === dateStr)
    if (!items.value.length) throw createError({ statusCode:404, statusMessage:'No Current Affair found' })

    pageTitle.value = `${day} ${monthName.charAt(0).toUpperCase() + monthName.slice(1)} ${year} Current Affair`
  } catch (err) {
    console.error(err)
  }
})
</script>
