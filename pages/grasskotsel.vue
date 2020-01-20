<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>

<v-row>
            <v-col
              v-for="(grasskotsel, i) in grasskotsels"
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
                    {{ grasskotsel.fields.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img :src="grasskotsel.fields.image.fields.file.url" :alt="grasskotsel.fields.alt" class="cards pa-0" />
                  </v-responsive>
                  <vue-markdown class="pt-3">{{ grasskotsel.fields.text }}</vue-markdown>
                </v-card-text>
              </v-card>

            </v-col>
          </v-row>

         <!--  <v-row>
            <v-col
              v-for="(card, i) in cards"
              :key="i"
              :src="card.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="text-center pa-10"
              md="6"
              offset-md="3"
            >
              <v-card
                elevation="0"
                color="rgb(0, 0, 0, 0)"
                tile
                flat
                class="text-center"
              >
                <v-card-title
                  class="text-center justify-center"
                  color="rgb(0, 0, 0, 0)"
                  ><p class="green--text cardtitle">
                    {{ card.title }}
                  </p></v-card-title
                >
                <v-card-text class="">
                  <v-responsive>
                    <img :src="card.src" :alt="card.alt" class="cards pa-0" />
                  </v-responsive>
                  <p>
                    {{ card.text }}
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row> -->
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
      title: 'Grönyteskötsel'
    }
  },

  data() {
    return {}
  },
  computed: {
    grasskotsels() {
      /* console.log(this.$store.state.grasskotsels.grasskotsels[0].fields.image.fields.file.url) */
      return this.$store.state.grasskotsels.grasskotsels
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('grasskotsels/getGrasskotsels', params.slug)
  }

}
</script>

<style>
@import '../assets/style.scss';
</style>
