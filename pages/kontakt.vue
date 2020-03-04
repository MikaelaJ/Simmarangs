<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row justify="center">
            <v-col md="12">
              <h2 class="text-center py-10 green--text">Vi som jobbar här</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(kontakt, i) in kontakts"
              :key="i"
              :src="kontakt.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="text-center pa-10"
              xs="12"
              sm="6"
              md="4"
            >
              <v-avatar size="200" class="pb-10">
                <v-img :src="kontakt.fields.profile.fields.file.url" alt="bild" height="200px"></v-img>
              </v-avatar>
              <h3 class="green--text">{{ kontakt.fields.title }}</h3>
              <p>{{ kontakt.fields.text }}</p>
            </v-col>
          </v-row>
          <div v-for="(location, i) in locations" :key="`${i}-${location.fields.name}`">
            <v-row>
              <v-row justify="center" class="pt-10">
                <v-col>
                  <h3 class="text-center green--text">Adress:</h3>
                  <p class="text-center">{{ location.fields.address }}</p>
                </v-col>
              </v-row>
              <v-col xs="12" sm="12" md="12" lg="12" xl="12" hover>
                <v-responsive>
                  <iframe
                    v-if="location.fields.location"
                    :src="getLocation(location.fields.location)"
                    class="iframe-container"
                    width="100%"
                    height="300"
                    frameborder="0"
                    style="border:0;"
                    allowfullscreen
                  ></iframe>
                </v-responsive>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'Kontakta oss'
    }
  },
  computed: {
    kontakts() {
      console.log(this.$store.state.kontakts.kontakts)
      return this.$store.state.kontakts.kontakts
    },
    locations() {
      console.log(this.$store.state.locations.locations[0].fields.location)
      return this.$store.state.locations.locations
    }
  },
  async fetch({ store, params }, data) {
    await store.dispatch('kontakts/getKontakts', params.slug)
    await store.dispatch('locations/getLocations', params.slug)
  },

  // `env` is available in the context object

  methods: {
    load() {
      this.iframe.loaded = true
      this.img.loaded = true
    },

    getAssets(bild) {
      let srcimg
      if (bild) {
        srcimg = bild
      }
      return srcimg
    },
    getLocation(location) {
      let src
      console.log('src', src)
      if (location) {
        src =
          'https://maps.google.com/maps?q=' +
          JSON.stringify(location.lat) +
          ', ' +
          JSON.stringify(location.lon) +
          '&z=15&output=embed'
      }
      return src
    }
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
