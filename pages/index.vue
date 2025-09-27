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
    <!-- Title -->
    <div class="text-center mb-6">
      <h1 class="text-3xl font-extrabold text-amber-700 dark:text-amber-400 uppercase">
        Rojgar Result Online
      </h1>
      <p class="text-lg font-semibold text-gray-700 dark:text-gray-300">
        RojgarResultOnline.Com
      </p>
    </div>

    <!-- Content -->
    <div class="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed">
      <div>
        <h2 class="text-xl font-bold text-amber-600 mb-2">‼ Site Title ‼</h2>
        <p>
          Rojgar Result Online: Rojgar Results, Govt Job, RojgarResultOnline.Com 2025
        </p>
      </div>

      <div>
        <p>
          ► <span class="font-bold">RojgarResultOnline.Com</span> provides all the latest Rojgar Result Online in Hindi,
          RojgarResultOnline.Com notification 2025, Sarkari Education, rojgar results info,
          Govt Job, Rojgar Results Online, RojgarResultOnline 2025, Rojgar and Naukri online form recruitment
          in various Government & Private Job sectors.
        </p>
      </div>

      <div>
        <h2 class="text-xl font-bold text-amber-600 mb-2">‼ Rojgar Result Online ‼</h2>
        <p>
          ► If you are a <span class="font-bold">student</span> and looking for a job, you might have heard about
          the Rojgar Result Online website which has built the trust of students for many years by posting job
          vacancies, admit cards, results, and other updates that can help in any job.
          Rojgar Result Online provides information about Govt Job Alerts and notifications
          including form name, vacancy, post, eligibility, last date, online application link,
          selection process, application fee, eligibility criteria, payment methods,
          notification details, syllabus, and other facts — available on RojgarResultOnline.Com.
        </p>
      </div>

      <div>
        <p>
          ► <span class="font-bold">RojgarResultOnline.Com</span> not only provides the latest job news
          but also helps candidates grab these opportunities by providing State-wise, District-wise,
          and Category-wise notifications about available government posts.
          Candidates searching for Govt Jobs / Private Jobs / Samvida Jobs can visit our website daily
          or subscribe via email for upcoming Sarkari Naukri, Rojgar Samachar, Private Jobs, Interview Jobs,
          and Samvida Jobs full information — all available on RojgarResultOnline.Com.
        </p>
      </div>

      <div>
        <p>
          ► Rojgar Result Online keeps you up to date on all Central government job alerts such as
          Railway jobs, Bank jobs, UPSC / UPPSC / UPSSSC / SSC alerts,
          Uttar Pradesh / Delhi jobs, and many more government exams.
          Please check the RojgarResultOnline.Com website regularly for updates.
        </p>
      </div>

      <div>
        <p>
          ► <span class="font-bold">Disclaimer:</span> Rojgar Result Online only provides
          information about Sarkari Jobs / Government Jobs available on the
          official websites of job providers. It does not have any association with these
          government departments or organizations.
        </p>
      </div>
    </div>
  </section>
  <section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6">
    <!-- Section Title -->
    <div class="text-center mb-6">
      <h2 class="text-2xl font-extrabold text-amber-700 dark:text-amber-400">
        Rojgar Result Online Central Government Jobs Information
      </h2>
    </div>

    <!-- Content -->
    <div class="space-y-6 text-gray-800 dark:text-gray-300 leading-relaxed">
      <div>
        <p>
          ► <span class="font-bold">Rojgar Result Online</span> is a trusted portal that provides
          the latest information on Sarkari Naukri, Recruitment, Results, Admit Cards,
          Syllabus, Answer Keys, and Admission updates. The Rojgar Result Online portal is updated 24×7
          to ensure candidates never miss any government job notification.
        </p>
      </div>

      <div>
        <p>
          ► It covers the latest Online Forms, Exam Dates, Admit Cards, Results, and Answer Keys
          for all major government examinations. Popular categories include
          <span class="font-semibold">Police, Teaching, Railway, and Medical Exams</span>,
          which are considered top job opportunities in India and abroad.
          With <span class="font-bold">direct links</span> available on RojgarResultOnline.Com,
          candidates can quickly access notifications and apply without delays.
        </p>
      </div>

      <div>
        <p>
          ► <span class="font-bold">RojgarResultOnline.Com</span> is the best source for
          Govt Jobs, Private Jobs, Samvida Jobs, Interview Jobs, and Apprentice Jobs.
          Candidates can also find detailed information including Syllabus, Exam Pattern,
          Admit Cards, Results, and Answer Keys — all in one place.
        </p>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="mb-6 text-center pt-4">
      <p class="text-sm text-red-600 dark:text-red-400 font-semibold">
        ⚠️ Rojgar Result Online is NOT a Government Website. It only provides information about government jobs
        and has no connection with any official government department.
      </p>
    </div>

    <!-- Jobs Information -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-800 dark:text-gray-300">
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ Union Public Service Commission (UPSC)
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ Staff Selection Commission (SSC)
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ Army / Navy / Airforce / India Coast Guard
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ Airports Authority of India (AAI)
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ Indian Post Office (Dak Vibhag)
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ RRB Railway Recruitment Board
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ MHA Intelligence Bureau (IB)
      </div>
      <div class="flex items-center gap-2 bg-white dark:bg-gray-800 border rounded-lg p-3 shadow-sm">
        ✅ National Investigation Agency (NIA)
      </div>
    </div>
  </section>
  <section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6">
    <!-- Section Title -->
    <div class="text-center mb-6">
      <h2 class="text-2xl font-extrabold text-green-700 dark:text-green-400">
        How Can Rojgar Result Online Portal Help You?
      </h2>
    </div>

    <!-- Intro Paragraph -->
    <p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
      <strong>Rojgar Result Online Form 2025:</strong> RojgarResultOnline.Com provides you with all the Latest Jobs
      2025,
      Admit Card, Sarkari Alert, Answer Key, Admission, and Rojgar Result Online. Candidates can access job information
      across various sectors including:
    </p>

    <!-- Job Sectors Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6 text-gray-800 dark:text-gray-300">
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ EPFO / GATE / UPSC
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ UPPSC / UPSSSC
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ UPMSSCB / UPMSSB
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ MPOnline / MPESB / MPPEB
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ Vyapam / CG Vyapam
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ RSMSSB / HSSC
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ BPSC / MPPSC / JPSC
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ Bihar Teacher Bharti
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ Navy / Army / Airforce / Defense
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ RRB Railway / Bank
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ Central Police & State Police
      </div>
      <div class="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 border rounded-lg p-2 shadow-sm">
        ✅ Many More Job Alerts
      </div>
    </div>

    <!-- Portal Benefits -->
    <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
      The <strong>Rojgar Result Online Portal</strong> is designed to give candidates easy access to important sections
      such as
      <em>Latest Jobs</em>, <em>Answer Keys</em>, <em>Admit Cards</em>, <em>Results</em>, <em>Admissions</em>, and
      <em>Important Forms</em>. All exam-related details and Sarkari Naukri updates are available in one place to help
      students and job seekers save time and stay updated.
    </p>
  </section>
  <section class="bg-amber-50 dark:bg-gray-900 border rounded-lg shadow-md max-w-5xl mx-auto my-10 p-6">
    <!-- Section Title -->
    <div class="text-center mb-6">
      <h2 class="text-2xl font-extrabold text-indigo-700 dark:text-indigo-400">
        Rojgar Result Online Tools
      </h2>
    </div>

    <!-- Intro -->
    <p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed text-center">
      The link of <strong>Rojgar Result Online Tools</strong> is available on
      <NuxtLink to="/" class="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
        RojgarResultOnline.Com
      </NuxtLink>
      which provides great comfort to candidates. All these <strong>Rojgar Result Online 2025 tools</strong> are
      <span class="font-semibold">absolutely free</span> for everyone.
    </p>

    <!-- Tools Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6 text-gray-800 dark:text-gray-200">
      <div v-for="(tool, index) in tools" :key="index"
        class="flex items-center gap-2 bg-white dark:bg-gray-900 border rounded-lg p-2 shadow-sm hover:shadow-md transition">
        ✅ {{ tool }}
      </div>
    </div>
  </section>
  <section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-10 rounded-lg shadow-md border">
    <!-- Title -->
    <div class="text-center mb-8">
      <h2 class="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
        📢 Rojgar Result Online Notification 2025
      </h2>
      <p class="text-gray-700 dark:text-gray-300 mt-2">
        Get the latest RojgarResultOnline.Com updates for Sarkari Result, Admit Card, Jobs, and Exam Notifications in Hindi &
        English.
      </p>
    </div>

    <!-- Content -->
    <div class="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed">
      <p>
        <strong>Rojgar Result Online</strong> provides you the latest <NuxtLink to="/"
          class="text-blue-600 dark:text-blue-400 hover:underline">RojgarResultOnline.Com</NuxtLink>
        updates for all <strong>Sarkari Jobs</strong>, Results, Admit Cards, and important notifications.
        Candidates can apply online for vacancies like SSC CGL, SSC CHSL, SSC MTS, SSC JE, UP Scholarship 2025, Bharat
        Post GDS, UPSC, Railway, Banking, and more directly through Rojgar Result Online.
      </p>

      <p>
        The trusted platform <strong>Rojgar Result Online 2025</strong> gives all job-related updates including
        <em>Answer Key, Results, Syllabus, Online Forms, and Free Test Series</em>.
        Aspirants can easily find and apply for the latest <strong>Govt Jobs</strong> & <strong>Private Jobs</strong>.
      </p>

      <p>
        At present, every student dreams of working for the government.
        With <strong>Rojgar Result Online</strong>, candidates can stay updated with
        <span class="font-semibold">Railway Jobs, Bank Jobs, Police Jobs, Teacher Jobs</span>
        and more—all from one place.
      </p>

      <p>
        Rojgar Result Online covers recruitment from top organizations including
        <strong>UPSC, SSC, CDS, NDA, IBPS, Army, Navy, Airforce, RRB, NTPC, State PSCs</strong> and
        many more central & state government bodies.
      </p>
    </div>

    <!-- Important Sections -->
    <div class="mt-10">
      <h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">
        ‼ Rojgar Result Online Important Sections ‼
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Admit Card Section -->
        <div class="bg-gray-50 dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
          <h4 class="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">
            ✅ Rojgar Result Online Admit Card 2025
          </h4>
          <p class="text-gray-700 dark:text-gray-300 text-sm">
            Download admit cards for UPSC, SSC, UPSSSC, Railway RRB, NTPC, BPSC, Police Constable, SI, and more exams.
            Direct links available in the Admit Card section at
            <NuxtLink to="/" class="text-blue-600 dark:text-blue-400 hover:underline">RojgarResultOnline.Com</NuxtLink>.
          </p>
        </div>

        <!-- Results Section -->
        <div class="bg-gray-50 dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
          <h4 class="text-lg font-semibold text-amber-600 dark:text-amber-400 mb-2">
            ✅ Rojgar Result Online Results 2025
          </h4>
          <p class="text-gray-700 dark:text-gray-300 text-sm">
            Check the latest results for HSSC, UPSSSC, IBPS, UPSC, SSC, SBI, RRB, ITI, UP Police, Bihar Police,
            Rajasthan Police, Delhi Police, MP Police, Punjab Police, Kolkata Police and more.
            Stay updated with <strong>Rojgar Result Online 2025</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
<section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-8 rounded-lg shadow-md border">
  <h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
    📌 RojgarResultOnline.Com — Rojgar Result Online List
  </h3>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online</p>
      <p class="text-gray-600 dark:text-gray-400">RojgarResultOnline.Com</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online 10th 2025</p>
      <p class="text-gray-600 dark:text-gray-400">Rojgar Result Online Railway Group D</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online 2025</p>
      <p class="text-gray-600 dark:text-gray-400">Rojgar Result Online rpf</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">RojgarresultOnline</p>
      <p class="text-gray-600 dark:text-gray-400">Sarkari Job Result</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">rojgar Result Online</p>
      <p class="text-gray-600 dark:text-gray-400">MBBS in Abroad</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online Private Jobs</p>
      <p class="text-gray-600 dark:text-gray-400">Alert RojgarResultOnline</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Best Jobs in the World with High Salary</p>
      <p class="text-gray-600 dark:text-gray-400">Rojgar Result Online for girl</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">RojgarResultOnline Result 2018 19</p>
      <p class="text-gray-600 dark:text-gray-400">Rojgar Result Online National and International Jobs</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Top 10 University in the World</p>
      <p class="text-gray-600 dark:text-gray-400">Jobs in Other Countries outside India</p>
    </div>

    <div class="bg-white dark:bg-gray-800 border rounded-lg p-4 shadow-sm">
      <p class="font-semibold text-gray-800 dark:text-gray-200">Rojgar Result Online 10+2 latest job</p>
      <p class="text-gray-600 dark:text-gray-400">Top Highest Paying Jobs in the World</p>
    </div>
  </div>
</section>
  <section class="bg-amber-50 dark:bg-gray-900 max-w-5xl mx-auto my-10 px-6 py-8 rounded-lg shadow-md border">
    <h3 class="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">
      📌 RojgarResultOnline.Com — Rojgar Result Online FAQ
    </h3>

    <div class="space-y-6 text-gray-800 dark:text-gray-200">
      <!-- Question 1 -->
      <div>
        <h4 class="text-lg font-semibold">Question No. 1: What is Rojgar Result Online?</h4>
        <p class="mt-2">
          Answer: Go to Google and type <strong>Rojgar Result Online</strong> then click on the website
          <strong>RojgarResultOnline.Com</strong> and get all the latest updates.
          <strong>RojgarResultOnline.Com</strong> provides National and International jobs information on the latest Rojgar
          result, sarkari naukri, Latest Rojgar & Recruitment Jobs Information, Results, Admit card, Syllabus, Answer
          Key, Admission etc.
        </p>
      </div>

      <!-- Question 2 -->
      <div>
        <h4 class="text-lg font-semibold">Question No. 2: Is the Rojgar Result Online Updated Daily?</h4>
        <p class="mt-2">
          Answer: Rojgar Result Online 24×7 Updated webpage to provide information about the latest notification of the
          Government Exams
          such as Latest online form, exam date, admit cards and result, answer key etc.
        </p>
      </div>

      <!-- Question 3 -->
      <div>
        <h4 class="text-lg font-semibold">Question No. 3: Which website is Best for Government Jobs & Private Jobs
          Notifications?</h4>
        <p class="mt-2">
          Answer: <strong>Rojgar Result Online & Rojgar Result RojgarResultOnline.Com</strong> is the best website for Government
          Jobs / Private Jobs / Samvida Jobs / Interview Jobs / Apprentice Jobs.
          Here, you can get notifications of the latest jobs, syllabus, exam pattern, admit cards, results, answer keys
          and much more.
        </p>
      </div>

      <!-- Question 4 -->
      <div>
        <h4 class="text-lg font-semibold">Question No. 4: Is Rojgar Result Online a Government Website?</h4>
        <p class="mt-2">
          Answer: Rojgar Result Online is not a government website, it only gives information about government jobs, it has no
          connection with any government department.
        </p>
      </div>

      <!-- Question 5 -->
      <div>
        <h4 class="text-lg font-semibold">Question No. 5: Is Rojgar Result Online available on social media platforms?</h4>
        <p class="mt-2">
          Answer: Yes, Rojgar Result Online – <strong>RojgarResultOnline.Com</strong> is available on Telegram Channel / WhatsApp
          Channel / Twitter / X / Facebook / Instagram.
          Rojgar Result Online Name | Rojgar Result Online Mobile Apps are also available on Google Play Store.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
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
