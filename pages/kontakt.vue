<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row justify="center">
            <v-col md="12">
              <h2 class="text-center py-10 brown--text">Vi som jobbar här</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(kontakt, i) in kontakts"
              :key="i"
              :src="kontakt.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="text-center pa-10 brown--text"
              xs="12"
              sm="6"
              md="4"
            >
              <v-avatar size="200" class="pb-10">
                <v-img
                  :src="kontakt.fields.profile.fields.file.url"
                  alt="bild"
                  height="200px"
                ></v-img>
              </v-avatar>
              <h3>{{ kontakt.fields.title }}</h3>
              <p>{{ kontakt.fields.text }}</p>
            </v-col>
          </v-row>
          <v-row justify="center" class="pt-10">
            <v-col>
              <h3 class="text-center brown--text">Adress:</h3>
              <p class="text-center">Södra Åmotanvägen 10, 812 94 Åshammar</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(location, i) in locations"
              :key="`${i}-${location.fields.name}`"
              xs="12"
              sm="12"
              md="12"
              lg="12"
              xl="12"
              hover
            >
              <v-responsive>
                <iframe
                  v-if="location.fields.karta"
                  :src="getLocation(location.fields.karta)"
                  class="iframe-container"
                  width="100%"
                  height="300"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                ></iframe
              ></v-responsive>
            </v-col>
          </v-row>
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
      return this.$store.state.kontakts.kontakts
    },
    locations() {
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
    getLocation(karta) {
      let src
      if (karta) {
        src =
          'https://maps.google.com/maps?q=' +
          JSON.stringify(karta.lat) +
          ', ' +
          JSON.stringify(karta.lon) +
          '&z=15&output=embed'
      }
      return src
    }
  }
}
/* data() {
    return {
      cards: [
        {
          src: require('../assets/img/profile.jpeg'),
          title: 'Mari Jönsson',
          text:
            'Mari jobbar som... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Mari Jönsson'
        },
        {
          src: require('../assets/img/profile.jpeg'),
          title: 'Namn Namnsson',
          text: 'Vi kan hjälpa till att pressa både ensilage, halm och hö… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          alt: 'Namn Namnsson'
        },
        {
          src: require('../assets/img/profile.jpeg'),
          title: 'Mari Jönsson',
          text:
            'Mari jobbar som... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Mari Jönsson'
        },
        {
          src: require('../assets/img/profile.jpeg'),
          title: 'Namn Namnsson',
          text: 'Vi kan hjälpa till att pressa både ensilage, halm och hö… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          alt: 'Namn Namnsson'
        }
      ]
    }
  } */
</script>

<style>
@import '../assets/style.scss';
</style>
