<template>
    <article v-if="doc" class="max-w-4xl mx-auto px-4 py-8">
        <!-- Full Content (Markdown Rendered) -->
        <section v-if="doc.body" class="mb-8 prose prose-lg dark:prose-dark max-w-none w-full">
            <ContentRenderer :value="doc.body" />
        </section>
    </article>

    <!-- Loading / Not Found -->
    <div v-else class="text-center py-16 text-gray-500">
        Loading post or post not found...
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

// fetch all .md files from content/current-affairs
// const { data: currentAffairs } = await useAsyncData('currentAffairs', () =>
//   queryContent('current-affairs').find()
// )

const { data: currentAffairs } = await useAsyncData('currentAffairs', () =>
    queryCollection('currentAffairs').all()
)
console.log('currentAffairs', currentAffairs.value)

// parse slug into YYYY-MM-DD
const dateStr = computed(() => {
  const [day, month, year] = slug.replace('-current-affair', '').split('-')
  const monthMap = {
    january:'01', february:'02', march:'03', april:'04', may:'05', june:'06',
    july:'07', august:'08', september:'09', october:'10', november:'11', december:'12'
  }
  const mm = monthMap[month.toLowerCase()]
  return `${year}-${mm}-${day.padStart(2,'0')}`
})

// filter docs for this date
const doc = computed(() =>
  currentAffairs.value?.find(a => a.meta.date === dateStr.value)
)
//console.log('doc', doc.value)

// // build items array from markdown body
// const items = computed(() => {
//   if (!doc.value?.body) return []
//   return doc.value.body.children
//     .filter(node => node.type === 'paragraph')
//     .map((node, i) => {
//       const text = node.children.map(c => c.value || '').join('')
//       const [q, a] = text.split('?')
//       return { question: q + '?', answer: a?.trim(), id: i }
//     })
// })

// const pageTitle = computed(() =>
//   doc.value?.title || `${dateStr.value} Current Affair`
// )

const pageTitle = doc.value?.title || `${dateStr.value} Current Affair`

useHead({
    title: pageTitle,
    meta: [
        { name: 'description', content: doc.value?.title || '' }
    ]
})
</script>

