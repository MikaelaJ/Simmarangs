<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(posts, i) in serviceGreen"
              :key="`${i}-${posts.fields.text}`"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="pa-10"
              cols="12" md="6"
            >
              <v-card elevation="0" color="rgb(0, 0, 0, 0)" tile flat>
                <v-card-title class="text-center justify-center" color="rgb(0, 0, 0, 0)">
                  <p class="green--text cardtitle">{{ posts.fields.title }}</p>
                </v-card-title>
                <v-card-text>
                  <v-responsive>
                    <img
                      :src="posts.fields.image.fields.file.url"
                      :alt="posts.fields.alt"
                      class="cards pa-0"
                    />
                  </v-responsive>
                  <vue-markdown class="pt-3">{{ posts.fields.text }}</vue-markdown>
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
      title: 'Grönyteskötsel'
    }
  },

  data() {
    return {}
  },
  /* ______________ */
  computed: {
    ...mapState('getpage', ['serviceGreen'])
  },
  async created() {
    await this.getPage({ content_type: 'serviceGreen' })
  },
  methods: {
    ...mapActions('getpage', ['getPage']),
  }

 /*  computed: {
    ...mapState('getservices', ['green'])
  },

  beforeMount() {
    this.getGreen()
  },

  methods: {
    ...mapActions('getservices', ['getGreen'])
  } */
}
</script>

<style>
@import '../assets/style.scss';
</style>
