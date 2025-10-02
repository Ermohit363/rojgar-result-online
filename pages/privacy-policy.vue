<template>
  <section>
    <div class="bg-white dark:bg-gray-800 shadow-md p-8">
      <h1 class="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <div class="space-y-6 text-gray-800 dark:text-gray-200">
        <p>
          At <strong>RojgarResultOnline.com</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.
        </p>

        <h2 class="text-2xl font-semibold">Information We Collect</h2>
        <p>
          We may collect certain information such as your IP address, browser type, browsing activity, and other data when you use our website. This helps us improve site performance and deliver relevant content to you.
        </p>

        <h2 class="text-2xl font-semibold">Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize advertisements. You can disable cookies in your browser settings, but some features of the site may not function properly.
        </p>

        <h2 class="text-2xl font-semibold">Third-Party Services</h2>
        <p>
          We use third-party services such as <strong>Google AdSense</strong> and <strong>Google Analytics</strong>. These services may collect information about your browsing activity on our site to provide advertisements and analytics data. This information is governed by their respective privacy policies.
        </p>

        <h2 class="text-2xl font-semibold">How We Use Information</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>To improve our website and provide better services.</li>
          <li>To personalize your experience.</li>
          <li>To deliver targeted advertisements.</li>
          <li>To monitor website performance and traffic.</li>
        </ul>

        <h2 class="text-2xl font-semibold">Your Rights</h2>
        <p>
          You have the right to control your personal information. You can opt-out of cookies, disable tracking, or request the deletion of your data by contacting us.
        </p>

        <h2 class="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or how your data is handled, please contact us at:  
          <a href="mailto:contact.rojgarresultonline@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">
            contact.rojgarresultonline@gmail.com
          </a>
        </p>

        <p class="font-semibold mt-4">
          Thank you for trusting <strong>RojgarResultOnline.com</strong>.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()

useHead({
  title: `Privacy Policy - ${config.public.siteName}`,
  meta: [
    { name: 'description', content: 'Privacy Policy of RojgarResultOnline.com explaining how we collect, use, and protect your data, and comply with Google AdSense requirements.' },
    { name: 'keywords', content: 'privacy policy, rojgar result online privacy, data collection, cookies policy, AdSense compliance, Sarkari Naukri privacy' },
    { property: 'og:title', content: `Privacy Policy - ${config.public.siteName}` },
    { property: 'og:description', content: 'Privacy Policy of RojgarResultOnline.com explaining how we collect, use, and protect your data, and comply with Google AdSense requirements.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${config.public.baseUrl}/privacy-policy` },
    { property: 'og:image', content: `${config.public.baseUrl}/logo.png` }
  ],
  link: [
    { rel: 'canonical', href: `${config.public.baseUrl}/privacy-policy` }
  ]
})
</script>
