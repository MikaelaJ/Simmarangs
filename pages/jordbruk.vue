<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(jordbruk, i) in jordbruks"
              :key="i"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="pa-10"
              cols="6">

              <v-card
                elevation="0"
                color="rgb(0, 0, 0, 0)"
                tile
                flat
              >
                <v-card-title
                  class="text-center justify-center"
                  color="rgb(0, 0, 0, 0)"
                  ><p class="brown--text cardtitle">
                    {{ jordbruk.fields.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img :src="jordbruk.fields.image.fields.file.url" :alt="jordbruk.fields.alt" class="cards pa-0" />
                  </v-responsive>
                  <vue-markdown class="pt-3">{{ jordbruk.fields.text }}</vue-markdown>
                </v-card-text>
              </v-card>

            </v-col>
          </v-row>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
components: {
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
    jordbruks() {
      console.log(this.$store.state.jordbruks.jordbruks[0].fields.image.fields.file.url)
      return this.$store.state.jordbruks.jordbruks
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('jordbruks/getJordbruks', params.slug)
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
