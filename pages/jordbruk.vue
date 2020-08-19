<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(jordbruk, i) in serviceFarm"
              :key="`${i}-${jordbruk.fields.text}`"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="pa-10"
              cols="12"
              md="6"
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


        <v-row justify="center">
          <v-col
            v-for="(pdf, i) in certifikat"
            :key="`${i}-${pdf.fields.title}`"
            cols="12"
            sm="10"
            md="4"
            lg="4"
            xl="4"
            align="center"
          >
            <a
              class="brown--text"
              target="_blank"
              :href="getAssets(pdf.fields.certifikat.fields.file.url)"
            >
              <v-icon class="pr-3">mdi-file-pdf-box</v-icon>
              <!-- {{ pdf.fields.pdf.fields.title }} -->
              {{ pdf.fields.title }}
            </a>
          </v-col>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { mapActions, mapState } from 'vuex'

export default {
  components: {
    VueMarkdown
  },

  head() {
    return {
      title: 'Pressa foder och Dikor'
    }
  },

  data() {
    return {}
  },

  /* ______________ */
  computed: {
    ...mapState('getpage', ['serviceFarm']),
    ...mapState('getpage', ['certifikat'])
  },
  async created() {
    await this.getPage({ content_type: 'serviceFarm' })
    await this.getPage({ content_type: 'certifikat' })
  },
  methods: {
    ...mapActions('getpage', ['getPage']),

    getAssets(bild) {
      let src
      if (bild) {
        src = bild
      }
      return src
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

a {
  color: #3B2E24 !important;
  font-weight: 600;
  text-transform: uppercase;

  &:visited {
    color: inherit;
  }
}
</style>
