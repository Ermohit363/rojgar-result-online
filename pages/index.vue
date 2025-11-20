<template>
  <div class="w-full px-4 py-8 container mx-auto">
    <h1 class="text-2xl font-bold mb-6">Latest Updates</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

      <!-- Categories -->
      <div v-for="c in mainCategories" :key="c"
        class="bg-white dark:bg-gray-900 shadow rounded-lg flex flex-col hover:shadow-lg">
        <div class="bg-amber-500 dark:bg-amber-600 px-4 py-2">
          <h2 class="text-lg font-semibold text-white">{{ c }}</h2>
        </div>

        <div class="flex-1 p-4 space-y-3">
          <PostCard v-for="p in getPosts(c).slice(0, 10)" :key="p._path" :post="p" />
        </div>

        <div v-if="getPosts(c).length > 10" class="px-4 py-3 text-right border-t dark:border-gray-700">
          <NuxtLink :to="`/category/${slugify(c)}`"
            class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            More →
          </NuxtLink>
        </div>
      </div>

      <!-- Current Affairs -->
      <div class="bg-white dark:bg-gray-900 shadow rounded-lg flex flex-col hover:shadow-lg">
        <div class="bg-amber-500 dark:bg-amber-600 px-4 py-2">
          <h2 class="text-lg font-semibold text-white">Current Affairs</h2>
        </div>

        <div class="flex-1 p-4 space-y-2">
          <ul>
            <li v-for="date in sortedDates" :key="date" class="mb-2">
              <NuxtLink :to="`/current-affair/${slugifyDate(date)}`" target="_blank"
                class="text-blue-600 dark:text-blue-400 hover:underline">
                {{ formatDate(date) }} Current Affair
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div v-if="sortedDates.length > 10" class="px-4 py-3 text-right border-t dark:border-gray-700">
          <NuxtLink to="/current-affair" class="text-blue-600 dark:text-blue-400 font-medium hover:underline">
            More →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
<section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-8 p-6">
  <div class="text-center mb-6">
    <h1 class="text-3xl font-extrabold text-amber-700 dark:text-amber-400 uppercase">
      Rojgar Result Online – Sarkari Naukri & Govt Jobs 2025
    </h1>
    <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
      Latest Jobs, Admit Cards, Results & Sarkari Alerts
    </p>
  </div>

  <div class="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed">
    <div>
      <h2 class="text-xl font-bold text-amber-600 mb-2">
        🔹 Rojgar Result Online – Latest Sarkari Jobs
      </h2>
      <p>
        Rojgar Result Online is your trusted portal for <strong>Sarkari Naukri</strong>, Govt Jobs, Admit Cards, Results, and Job Notifications in 2025.
        Stay updated with the latest recruitment alerts and government exam updates at RojgarResultOnline.Com.
      </p>
    </div>

    <div>
      <p>
        ► <strong>RojgarResultOnline.Com</strong> offers complete information about all latest Govt Jobs & Sarkari Naukri across India including Online Form Notifications, Admit Card updates, Sarkari Results, and Answer Keys. Explore opportunities in various sectors such as Banking, Railway, Police, Teaching, Defence, and more.
      </p>
    </div>

    <div>
      <h2 class="text-xl font-bold text-amber-600 mb-2">
        🔹 Why Choose Rojgar Result Online
      </h2>
      <p>
        ► Students and job seekers rely on <strong>Rojgar Result Online</strong> to access genuine and up-to-date Sarkari Naukri alerts, including eligibility, last date, vacancy details, application link, syllabus, and exam pattern. Our portal provides State-wise and Category-wise job notifications for ease of access.
      </p>
    </div>

    <div>
      <p>
        ► From Railway jobs to Bank jobs, UPSC exams to State PSC recruitment, Rojgar Result Online keeps you informed about every important Sarkari result and job alert so you never miss an opportunity.
      </p>
    </div>

    <div>
      <p>
        ► <strong>Disclaimer:</strong> Rojgar Result Online only publishes information from official government sources. We are not affiliated with any government organization.
      </p>
    </div>
  </div>
</section>
<section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6">
  <div class="text-center mb-6">
    <h2 class="text-2xl font-extrabold text-amber-700 dark:text-amber-400">
      Rojgar Result Online – Central Government Jobs & Sarkari Naukri 2025
    </h2>
  </div>

  <div class="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed">
    <p>
      ► <strong>Rojgar Result Online</strong> is your one-stop source for all Central Government Jobs, Sarkari Naukri updates, Admit Cards, Answer Keys, and Exam Notifications in 2025.
    </p>

    <p>
      ► Explore the latest online forms, exam dates, results, and admit card downloads for UPSC, SSC, Railway RRB, Defence, Banking, and other government sectors — all available on <strong>RojgarResultOnline.Com</strong>.
    </p>

    <p>
      ► Get direct links to notifications for Police, Teaching, Railway, Medical, Defence, and State Government jobs. Rojgar Result Online ensures candidates never miss important updates.
    </p>
  </div>

  <div class="mb-6 text-center pt-4">
    <p class="text-sm text-red-600 dark:text-red-400 font-semibold">
      ⚠️ Disclaimer: Rojgar Result Online is not affiliated with any government agency. We only provide information about official notifications.
    </p>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 dark:text-gray-300">
    <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">✅ UPSC Recruitment</div>
    <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">✅ SSC Jobs</div>
    <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">✅ Defence Jobs (Army/Navy/Airforce)</div>
    <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">✅ Railway Jobs (RRB)</div>
    <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">✅ State PSC Jobs</div>
    <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">✅ Banking Jobs (IBPS/SBI)</div>
  </div>
</section>
<section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6">
  <div class="text-center mb-6">
    <h2 class="text-2xl font-extrabold text-green-700 dark:text-green-400">
      How Rojgar Result Online Portal Helps You Find Sarkari Naukri & Govt Jobs
    </h2>
  </div>

  <p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
    <strong>Rojgar Result Online 2025</strong> provides the latest government and private job updates, admit cards, results, and Sarkari Naukri alerts. Candidates can easily access recruitment details for multiple sectors including:
  </p>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6 text-gray-800 dark:text-gray-300">
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ UPSC Jobs</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ SSC Jobs</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ Railway Recruitment</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ Banking Jobs</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ Police Jobs</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ Teaching Jobs</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ Defence Jobs</div>
    <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">✅ State Government Jobs</div>
  </div>

  <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
    Rojgar Result Online gives you direct access to the latest admit cards, results, answer keys, exam syllabus, and recruitment notifications so you can apply to Sarkari Naukri without delay. All updates are available in Hindi and English for easy accessibility.
  </p>
</section>
<section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6">
  <div class="text-center mb-6">
    <h2 class="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400">
      Rojgar Result Online Tools for Sarkari Job Seekers
    </h2>
  </div>

  <p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-center">
    Explore free tools at <strong>RojgarResultOnline.Com</strong> to simplify your search for Sarkari Naukri, Admit Cards, Results, and Govt Jobs in 2025.
  </p>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-gray-800 dark:text-gray-200">
    <div v-for="(tool, index) in tools" :key="index" class="flex items-center gap-2 bg-white dark:bg-gray-900 border rounded-lg p-2 shadow-sm hover:shadow-md transition">
      ✅ {{ tool }}
    </div>
  </div>
</section>
<section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-10 rounded-lg shadow-md border">
  <div class="text-center mb-8">
    <h2 class="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
      Latest Rojgar Result Online Notifications 2025 – Sarkari Naukri Updates
    </h2>
    <p class="text-gray-700 dark:text-gray-300 mt-2">
      Get all Sarkari Job notifications, Admit Cards, Results & Exam Alerts on RojgarResultOnline.Com
    </p>
  </div>

  <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
    <p>
      <strong>Rojgar Result Online</strong> provides the latest Govt Jobs & Sarkari Naukri updates with direct links for online application.
    </p>
    <p>
      Candidates can find Admit Cards, Results, Answer Keys, and Syllabus updates for UPSC, SSC, Railway, Banking, and State PSC exams.
    </p>
    <p>
      Stay updated with Rojgar Result Online for the latest Sarkari job alerts including Railway Jobs, Bank Jobs, Police Jobs, Teacher Jobs, Defence Jobs, and more.
    </p>
  </div>
</section>
<section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-8 rounded-lg shadow-md border">
  <h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
    📌 RojgarResultOnline.Com — Complete Sarkari Naukri & Govt Jobs List 2025
  </h3>

  <p class="text-gray-700 dark:text-gray-300 text-center mb-6">
    Explore the full list of latest Sarkari Naukri, Govt Jobs, Admit Cards, Results, and Recruitment updates available on RojgarResultOnline.Com.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online 2025</p>
      <p class="text-gray-600 dark:text-gray-400">Latest Sarkari Naukri Updates</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Railway Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">Railway Group D & RPF Results</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online SSC Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">SSC CGL, CHSL, MTS & JE Updates</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Defence Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">Army, Navy, Airforce, Coast Guard</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Teacher Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">Bihar Teacher Bharti & State PSC Jobs</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Bank Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">IBPS, SBI, RBI Recruitment Updates</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Private Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">Latest Private Sector Job Alerts</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Admit Cards</p>
      <p class="text-gray-600 dark:text-gray-400">Direct Links for Download</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Exam Results</p>
      <p class="text-gray-600 dark:text-gray-400">Latest Sarkari Exam Results</p>
    </div>
  </div>
</section>
<section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-8 rounded-lg shadow-md border">
  <h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
    Rojgar Result Online FAQ – Sarkari Naukri & Govt Jobs 2025
  </h3>

  <div class="space-y-6 text-gray-800 dark:text-gray-200">
    <div>
      <h4 class="text-lg font-semibold">Q1: What is Rojgar Result Online?</h4>
      <p>
        Rojgar Result Online is a trusted portal for Sarkari Naukri & Govt Jobs, providing daily updates about Admit Cards, Results, Syllabus, Answer Keys, and recruitment notifications.
      </p>
    </div>
    <div>
      <h4 class="text-lg font-semibold">Q2: Is Rojgar Result Online updated daily?</h4>
      <p>
        Yes, Rojgar Result Online updates daily with the latest Sarkari Naukri, Online Forms, Admit Cards, and Results to ensure candidates never miss any important government job notification.
      </p>
    </div>
    <div>
      <h4 class="text-lg font-semibold">Q3: Is Rojgar Result Online a Government Website?</h4>
      <p>
        No. Rojgar Result Online is not affiliated with any government department. It provides official Sarkari Job information collected from authentic sources.
      </p>
    </div>
    <div>
      <h4 class="text-lg font-semibold">Q4: Does Rojgar Result Online offer job alerts for all sectors?</h4>
      <p>
        Yes, it provides comprehensive job alerts including Railway, Banking, Police, Teaching, Defence, UPSC, SSC, and State PSC exams.
      </p>
    </div>
    <div>
      <h4 class="text-lg font-semibold">Q5: Can I access Rojgar Result Online on mobile?</h4>
      <p>
        Yes, Rojgar Result Online is accessible on all devices, and you can also join our Telegram, WhatsApp, and social media channels for instant updates.
      </p>
    </div>
  </div>
</section>  
</template>
<script setup>
useHead({
  title: "Rojgar Result Online – Sarkari Result, Admit Card, Latest Govt Jobs",
  meta: [
    {
      property: "og:title",
      content: "Rojgar Result Online – Sarkari Result, Admit Card, Latest Govt Jobs"
    }
  ]
})

import PostCard from '~/components/PostCard.vue'
import { computed } from 'vue'

const tools = [
  'Rojgar Result Online',
  'Rojgar Result Online',
  'Rojgar Result Online',
  'Rojgar Result Online',
  'Rojgar Result Online',
  'Rojgar Result Online &',
  'Rojgar Result Online',
  'Rojgar Result Online &',
  'Rojgar Result Online',
  'Rojgar Result Online',
  'Rojgar Result Online'
]

// Categories
const mainCategories = ['Latest Jobs', 'Admit Card', 'Result', 'Answer Key', 'Syllabus']

// Fetch posts
const { data: postsData } = await useAsyncData('posts', async () => {
  const posts = await queryCollection('posts').all()
  return posts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
})

// Fetch current affairs
const { data: currentAffairsData } = await useAsyncData('currentAffairs', async () => {
  const affairs = await queryCollection('currentAffairs').all()
  return affairs.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date))
})

// Filter posts by category
const getPosts = (category) =>
  (postsData.value || []).filter((p) => p.meta.category === category)


// Group current affairs by date
const grouped = computed(() =>
  (currentAffairsData.value || []).reduce((acc, item) => {
    if (!item.meta?.date) return acc
    if (!acc[item.meta.date]) acc[item.meta.date] = []
    acc[item.meta.date].push(item)
    return acc
  }, {})
)

// Sorted dates
const sortedDates = computed(() =>
  Object.keys(grouped.value).sort((a, b) => b.localeCompare(a))
)
// console.log('Grouped Current Affairs:', grouped.value)
// console.log('Sorted Dates:', sortedDates.value)

// Helpers
const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-')
const formatDate = (d) =>
  new Date(d).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
const slugifyDate = (d) =>
  formatDate(d).toLowerCase().replace(/\s+/g, '-')
</script>
