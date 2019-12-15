<template>
  <v-layout column align-center>
    <v-img
      class="index-img"
      :src="require('../assets/img/frontimg.jpg')"
    ></v-img>
    <v-container>
      <v-row>
        <h1 class="blue--text ml-8 my-8">Nyheter</h1>
      </v-row>
      <v-divider class="blue"></v-divider>
      <v-row>
        <v-col md="12">
          <v-card
            v-for="(post, i) in posts"
            :key="i"
            elevation="1"
            class="my-10 px-3"
          >
            <v-card-title class="blue--text">
              {{ post.fields.title }}
              <v-card-text class="pl-0">
                <vue-markdown class="black--text">{{
                  post.fields.text
                }}</vue-markdown>
                <br />
                <p class="text-right">{{ post.sys.createdAt }}</p>
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    // Swish,
    VueMarkdown
  },

  head() {
    return {
      title: 'Startsida'
    }
  },

  data() {
    return {}
  },
  computed: {
    posts() {
      return this.$store.state.posts.posts
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('posts/getPosts', params.slug)
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
