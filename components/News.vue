<template>
  <div>
    <v-card
      v-for="(post, i) in posts"
      :key="`${i}-${post.fields.title}`"
      cols="4"
      class="pa-5 ma-5"
    >
      {{ post.fields }}
      <v-card-title class="headline">{{ post.fields }}</v-card-title>
      <v-card-text>
        <p>
          Vuetify is a progressive Material Design component framework for
          Vue.js. It was designed to empower developers to create amazing
          applications.
        </p>
      </v-card-text>
      <!-- render data of the person -->
      <!-- <h1>{{ person.fields.name }}</h1> -->
      <!-- render blog posts -->
      <!-- <div
      v-for="(post, i) in news"
      :key="`${i}-${posts.fields.title}`"
      cols="4"
    >
      Hej
      {{ post.fields }}
      </div>-->
    </v-card>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
        locale: 'en-US'
      })
    ])
      .then(([entries, posts]) => {
        // return data that should be available
        // in the template
        const items = posts.items
        let postsrc
        let newsposts

        for (let i = 0; i < items.length; i++) {
          newsposts = items[i].fields
          if (items) {
            postsrc[i] = newsposts
          }
        }

        return {
          /* person: entries.items[0], */
          posts: posts.items
        }
      })
      .catch(console.error)
  },
  methods: {
    load() {
      this.iframe.loaded = true
      this.img.loaded = true
    },
    language(data) {
      return data
    }
  }
}
</script>
