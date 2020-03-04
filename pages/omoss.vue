<template>
  <v-layout column align-center>
    <v-img :src="require('../assets/img/jarbo.jpg')" class="index-img"></v-img>
    <v-container>
      <v-row>
        <h1 class="blue--text ml-8 my-8">Historik</h1>
      </v-row>
      <v-divider class="blue"></v-divider>
      <v-row>
        <v-col md="12">
          <v-card
            v-for="(newpost, i) in about"
            :key="`${i}-${newpost.fields.text}`"
            elevation="1"
            class="my-10 px-3"
          >
            <v-card-title class="blue--text">
              {{ newpost.fields.title }}
              <v-card-text class="pl-0">
                <vue-markdown class="black--text">{{ newpost.fields.text }}</vue-markdown>
                <br />
                <p class="text-right">{{ newpost.sys.createdAt }}</p>
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },

  head() {
    return {
      title: 'Om oss'
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapState('getposts', ['about'])
  },

  beforeMount() {
    this.getAbout()
  },

  methods: {
    ...mapActions('getposts', ['getAbout'])
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
