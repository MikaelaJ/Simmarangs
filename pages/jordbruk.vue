<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(jordbruk, i) in farm"
              :key="`${i}-${jordbruk.fields.text}`"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="pa-10"
              cols="6"
            >
              <v-card elevation="0" color="rgb(0, 0, 0, 0)" tile flat>
                <v-card-title class="text-center justify-center" color="rgb(0, 0, 0, 0)">
                  <p class="brown--text cardtitle">{{ jordbruk.fields.title }}</p>
                </v-card-title>
                <v-card-text>
                  <v-responsive>
                    <img
                      :src="jordbruk.fields.image.fields.file.url"
                      :alt="jordbruk.fields.alt"
                      class="cards pa-0"
                    />
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
import { mapActions, mapState } from 'vuex'
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },

  head() {
    return {
      title: 'Jordbruk'
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapState('getservices', ['farm'])
  },

  beforeMount() {
    this.getFarm()
  },

  methods: {
    ...mapActions('getservices', ['getFarm'])
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
