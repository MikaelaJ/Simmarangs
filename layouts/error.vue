<template>
  <v-app>
    <v-container>
      <v-row class="pt-10">
        <v-col md="6" offset-md="3">
          <h1 class="teal--text text-center">404</h1>
          <h3 class="text-center teal--text">
            Hoppsan! Något gick visst snett. Klicka på knappen
            nedan för att komma till startsidan.
          </h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col align="center" md="6" offset-md="3">
          <v-btn to="/" class="white--text text-center teal">Till startsidan</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {

  layout: 'empty',
  components: {
  },
  computed: {
    swishs() {
      return this.$store.state.swishs.swishs
    },
    plusgiros() {
      return this.$store.state.plusgiros.plusgiros
    },
    async fetch({ store, params }) {
      await store.dispatch('swishs/getSwishs', params.slug)
      await store.dispatch('plusgiros/getPlusgiros', params.slug)
    }
  },
  methods: {
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

<style scoped>
h1 {
  font-size: 70px;
}
</style>
