<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(post, i) in serviceEntreprenad"
              :key="`${i}-${post.fields.text}`"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="pa-10"
              cols="12" md="6"
            >
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
                    {{ post.fields.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img :src="post.fields.image.fields.file.url" :alt="post.fields.alt" class="cards pa-0" />
                  </v-responsive>
                  <vue-markdown>{{ post.fields.text }}</vue-markdown>
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
      title: 'Jordbruk och Vinterunderhåll'
    }
  },
  data() {
    return {}
  },

  computed: {
    ...mapState('getpage', ['serviceEntreprenad'])
  },
  async created() {
    await this.getPage({ content_type: 'serviceEntreprenad' })
  },
  methods: {
    ...mapActions('getpage', ['getPage'])
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
