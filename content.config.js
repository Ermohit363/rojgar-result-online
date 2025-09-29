import { defineContentConfig, defineCollection } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    posts: defineCollection(
      asSeoCollection({
        type: 'page',
        source: 'post/**/*.md'
      })
    ),
    currentAffairs: defineCollection(
      asSeoCollection({
        type: 'page',
        source: 'current-affair/**/*.md'
      })
    )
  }
})
