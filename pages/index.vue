<template>
  <v-layout column align-center>
    <v-img :src="require('../assets/img/frontimg.jpg')" class="index-img"></v-img>
    <v-container>
      <v-row>
        <h1 class="blue--text ml-8 my-8">Nyheter</h1>
      </v-row>
      <v-divider class="blue"></v-divider>

      <v-row>
        <v-col cols="12" sm="12" md="12" v-for="(newpost, i) in news" :key="`${i}-${newpost.fields.text}`">
          <div class="box">
            <h3 class="blue--text pb-3">{{ newpost.fields.title }}</h3>
            <p>
              <vue-markdown class="black--text text-justify">{{ newpost.fields.text }}</vue-markdown>
            </p>
          </div>
        </v-col>
      </v-row>

      <!-- <v-row>
        <v-col md="12">
          <v-card
            v-for="(newpost, i) in news"
            :key="`${i}-${newpost.fields.text}`"
            elevation="1"
            class="my-10 px-3"
          >
            <v-card-title class="blue--text">
              {{ newpost.fields.title }}
              <v-card-text class="pl-0">
                <vue-markdown class="black--text">{{ newpost.fields.text}}</vue-markdown>
                <br />
                <p class="text-right">{{ newpost.sys.createdAt.substring(0, 10) }}</p>
              </v-card-text>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </v-layout>
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
      title: 'Jordbruk och Entrepenad'
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapState('getposts', ['news'])
  },

  beforeMount() {
    this.getNews()
  },

  methods: {
    ...mapActions('getposts', ['getNews'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

a {
  text-decoration: none !important;
  color: #88BF88 !important;

  &:visited {
    color: inherit;
  }
}

@media only screen and (max-width: 600px) {

  p {
    font-size: 0.85em;
  }
}
</style>
