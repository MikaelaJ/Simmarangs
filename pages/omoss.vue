<template>
  <v-layout column align-center>
      <v-img class="index-img" :src="require('../assets/img/jarbo.jpg')"></v-img>
    <v-container>
      <v-row>
        <h1 class="blue--text ml-8 my-8">Historik</h1>

      </v-row>
        <v-divider class="blue"></v-divider>
      <v-row>
        <v-col md="12">
          <v-card v-for="(history, i) in historys" :key="i" elevation="1" class="my-10 px-3">
            <v-card-title class="blue--text">
              {{ history.fields.title }}
              <v-card-text class="pl-0">
                <vue-markdown class="black--text">{{ history.fields.text }}</vue-markdown>
                <br />
                <p class="text-right">{{ history.sys.createdAt }}</p>
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
    historys() {
      console.log(this.$store.state.historys.historys[1].sys.createdAt);
      return this.$store.state.historys.historys
    }
    
  },
  async fetch({ store, params }) {
    await store.dispatch('historys/getHistorys', params.slug)
  },
}
</script>

<style>
@import '../assets/style.scss';
</style>
