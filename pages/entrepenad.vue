<template>
  <v-container>
    <v-layout column justify-center align-center>
      <v-flex>
        <div>
          <v-row>
            <v-col
              v-for="(card, i) in cards"
              :key="i"
              :src="card.src"
              reverse-transition="fade-transition"
              transition="fade-transition"
              class="text-center pa-10"
              cols="6"
            >
              <v-card
                elevation="0"
                color="rgb(0, 0, 0, 0)"
                tile
                flat
                class="text-center"
              >
                <v-card-title
                  class="text-center justify-center"
                  color="rgb(0, 0, 0, 0)"
                  ><p class="teal--text cardtitle">
                    {{ card.title }}
                  </p></v-card-title
                >
                <v-card-text>
                  <v-responsive>
                    <img class="cards pa-0" :src="card.src" :alt="card.alt" />
                  </v-responsive>
                  <p>
                    {{ card.text }}
                  </p>
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
export default {
  data() {
    return {
      cards: [
        {
          src: require('../assets/img/img_entrepenad1.png'),
          title: 'Vinterunderhåll',
          text:
            'Kontakta oss om du behöver hjälp med vinterunderhållet. Snöplogning och Sandning… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          alt: 'Vinterunderhåll'
        },
        {
          src: require('../assets/img/img_entrepenad2.png'),
          title: 'Markarbeten',
          text:
            'Vi utför alla möjliga sorters markarbeten så som grävning och köra dumper… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          alt: 'Markarbeten'
        },
        {
          src: require('../assets/img/img_entrepenad3.png'),
          title: 'Tomtplanering',
          text:
            'Behöver du hjälp med markanläggning och planera tomter… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Tomtplanering'
        },
        {
          src: require('../assets/img/img_entrepenad4.png'),
          title: 'Jordförsäljning',
          text:
            'Planteringstid? Vi säljer prima sorterad jord av alla möjliga varianter… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          alt: 'Jordförsäljning'
        }
      ]
    }
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
