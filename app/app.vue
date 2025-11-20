<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script setup>
useHead({
  title: "Rojgar Result Online",
  titleTemplate: "%s | Rojgar Result Online",
  meta: [
    {
      name: "description",
      content:
        "Rojgar Result Online – Latest government jobs, Sarkari result, admit cards, online forms, and exam notifications."
    },
    {
      property: "og:title",
      content: "Rojgar Result Online"
    },
    {
      property: "og:site_name",
      content: "Rojgar Result Online"
    },
    {
      property: "og:type",
      content: "website"
    },
    {
      property: "og:url",
      content: "https://rojgarresultonline.com"
    }
  ],
  link: [
    { rel: "canonical", href: "https://rojgarresultonline.com" }
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Rojgar Result Online",
        "url": "https://rojgarresultonline.com",
        "potentialAction": {
          "@type": "SearchAction",
          "target":
            "https://rojgarresultonline.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }
  ]
})
</script>