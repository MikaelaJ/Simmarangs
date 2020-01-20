<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>

          <v-row>
            <v-col
              v-for="(uthyrning, i) in uthyrnings"
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
                    {{ uthyrning.fields.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img :src="uthyrning.fields.image.fields.file.url" :alt="uthyrning.fields.alt" class="cards pa-0" />
                  </v-responsive>
                  <vue-markdown class="pt-3">{{ uthyrning.fields.text }}</vue-markdown>
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
      title: 'Uthyrning'
    }
  },

  data() {
    return {}
  },
  computed: {
    uthyrnings() {
      console.log(this.$store.state.uthyrnings.uthyrnings[0].fields.image.fields.file.url)
      return this.$store.state.uthyrnings.uthyrnings
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('uthyrnings/getUthyrnings', params.slug)
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
