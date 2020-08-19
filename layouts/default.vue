<template>
  <v-app app>
    <Header />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header
  },

head() {
    return {
      titleTemplate: '%s - Simmarängs',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Åshammar, dikor och entrepenad'
        }
      ]
    }
  },

  data() {
    return {}
  }
}
</script>
