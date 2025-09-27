<template>
  <section>
    <div class=" bg-white dark:bg-gray-800 shadow-md p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      <!-- ✅ Success Message -->
      <div
        v-if="success"
        class="mb-6 rounded-lg bg-green-100 text-green-800 px-4 py-3 border border-green-300 text-center"
      >
        ✅ Your message has been sent successfully!
      </div>

      <form class="space-y-6" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium mb-2">Name</label>
            <input
              v-model="form.name"
              type="text"
              class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900"
              placeholder="you@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Subject</label>
          <input
            v-model="form.subject"
            type="text"
            class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900"
            placeholder="Subject"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Message</label>
          <textarea
            v-model="form.message"
            rows="6"
            class="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        <div class="text-center">
          <button
            type="submit"
            class="bg-amber-500 text-white font-semibold px-8 py-3 rounded hover:bg-amber-600 transition"
          >
            Send Message
          </button>
        </div>
      </form>

      <!-- Contact info below form -->
      <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 text-center space-y-2">
        <p>
          📧 Email us at: <a href="mailto:support@yourdomain.com" class="text-blue-600 dark:text-blue-400 hover:underline">support@yourdomain.com</a>
        </p>
        <p>Business hours: Monday – Friday, 9 AM – 5 PM IST</p>
      </div>
    </div>

    <!-- Floating success alert -->
    <div
      v-if="success"
      class="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded shadow-lg"
    >
      ✅ Your message has been sent!
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const success = ref(false)

function handleSubmit() {
  console.log('Submit data:', form.value)
  success.value = true
  form.value = { name: '', email: '', subject: '', message: '' }
  setTimeout(() => {
    success.value = false
  }, 4000)
}

useHead({
  title: `Contact - ${config.public.siteName}`,
  meta: [
    { name: 'description', content: 'Contact us for any queries or feedback.' },
    { property: 'og:title', content: `Contact - ${config.public.siteName}` },
    { property: 'og:description', content: 'Contact us for any queries or feedback.' },
    { property: 'og:url', content: `${config.public.baseUrl}/contact` }
  ],
  link: [{ rel: 'canonical', href: `${config.public.baseUrl}/contact` }]
})
</script>
