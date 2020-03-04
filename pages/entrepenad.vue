<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(post, i) in entreprenad"
              :key="`${i}-${post.fields.text}`"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="text-center pa-10"
              cols="6"
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
                  ><p class="teal--text cardtitle">
                    {{ post.fields.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img :src="post.fields.image.fields.file.url" :alt="post.fields.alt" class="cards pa-0" />
                  </v-responsive>
                  <p>
                    {{ post.fields.text }}
                  </p>
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
  data() {
    return {}
  },

  computed: {
    ...mapState('getservices', ['entreprenad'])
  },

  beforeMount() {
    this.getEntreprenad()
  },

  methods: {
    ...mapActions('getservices', ['getEntreprenad'])
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
