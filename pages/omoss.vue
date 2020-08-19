<template>
  <v-layout column align-center>
    <v-img :src="require('../assets/img/jarbo.jpg')" class="index-img"></v-img>
    <v-container>
      <v-row>
        <h1 class="blue--text ml-8 my-8">Historik</h1>
      </v-row>
      <v-divider class="blue"></v-divider>
      <v-row>
        <v-col cols="12" sm="12" md="12" v-for="(newpost, i) in about" :key="`${i}-${newpost.fields.text}`">
          <div class="box">
            <h3 class="blue--text pb-3">{{ newpost.fields.title }}</h3>
            <p>
              <vue-markdown class="black--text">{{ newpost.fields.text }}</vue-markdown>
            </p>
          </div>
        </v-col>
      </v-row>
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
      title: 'Om oss'
    }
  },

  data() {
    return {}
  },

  computed: {
    ...mapState('getposts', ['about'])
  },

  beforeMount() {
    this.getAbout()
  },

  methods: {
    ...mapActions('getposts', ['getAbout'])
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

@media only screen and (max-width: 600px) {

  p {
    font-size: 0.85em;
  }
}

</style>
