<template>
  <article v-if="doc" class="max-w-4xl mx-auto px-4 py-8">
    <!-- Full Content (Markdown Rendered) -->
    <section
      v-if="doc.body"
      class="mb-8 prose prose-lg dark:prose-dark max-w-none w-full"
    >
      <ContentRenderer :value="doc.body" />
    </section>

    <!-- ✅ Share Buttons -->
    <section class="mt-8 flex flex-wrap gap-3">
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Share on Facebook
      </a>
      <a
        :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 rounded-lg  bg-sky-500 text-white hover:bg-sky-600 transition"
      >
        Share on Twitter
      </a>
      <a
        :href="`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 rounded-lg  bg-blue-800 text-white hover:bg-blue-900 transition"
      >
        Share on LinkedIn
      </a>
      <a
        :href="`https://api.whatsapp.com/send?text=${encodeURIComponent(pageTitle + ' ' + currentUrl)}`"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 rounded-lg  bg-green-600 text-white hover:bg-green-700 transition"
      >
        Share on WhatsApp
      </a>
      <a
        :href="`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`"
        target="_blank"
        rel="noopener"
        class="px-4 py-2 rounded-lg  bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Share on Telegram
      </a>
    </section>
  </article>

  <!-- Loading / Not Found -->
  <div v-else class="text-center py-16 text-gray-500">
    Loading post or post not found...
  </div>
</template>

<script setup>
import { useRoute, useRequestURL } from '#imports'
import { computed } from 'vue'

const route = useRoute()
const url = useRequestURL() // ✅ SSR-safe URL

const slug = route.params.slug

const { data: currentAffairs } = await useAsyncData('currentAffairs', () =>
  queryCollection('currentAffairs').all()
)

// parse slug into YYYY-MM-DD
const dateStr = computed(() => {
  const [day, month, year] = slug.replace('-current-affair', '').split('-')
  const monthMap = {
    january: '01',
    february: '02',
    march: '03',
    april: '04',
    may: '05',
    june: '06',
    july: '07',
    august: '08',
    september: '09',
    october: '10',
    november: '11',
    december: '12'
  }
  const mm = monthMap[month.toLowerCase()]
  return `${year}-${mm}-${day.padStart(2, '0')}`
})

// filter docs for this date
const doc = computed(() =>
  currentAffairs.value?.find((a) => a.meta.date === dateStr.value)
)

const pageTitle = computed(
  () => doc.value?.title || `${dateStr.value} Current Affair`
)

// ✅ Safe current page URL
const currentUrl = computed(() => url.href)

useHead({
  title: pageTitle.value,
  meta: [{ name: 'description', content: doc.value?.title || '' }]
})
</script>
