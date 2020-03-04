<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>

          <v-row>
            <v-col
              v-for="(lease, i) in leasing"
            :key="`${i}-${lease.fields.text}`"
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
                  ><p class="teal--text cardtitle">
                    {{ lease.fields.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img :src="lease.fields.image.fields.file.url" :alt="lease.fields.alt" class="cards pa-0" />
                  </v-responsive>
                  <vue-markdown class="pt-3">{{ lease.fields.text }}</vue-markdown>
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
import { mapActions, mapState } from 'vuex'
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
    ...mapState('getservices', ['leasing'])
  },

  beforeMount() {
    this.getLeasing()
  },

  methods: {
    ...mapActions('getservices', ['getLeasing'])
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
