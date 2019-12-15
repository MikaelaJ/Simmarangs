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
                <v-card-text class="">
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
          src: require('../assets/img/img_uthyrning1.jpg'),
          title: 'Kontor',
          text:
            'Behöver du en kontorsplats? Vi hyr ut…. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Kontor'
        },
        {
          src: require('../assets/img/img_uthyrning2.jpg'),
          title: 'Garage',
          text:
            'Vi hyr även ut garage… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Garage'
        },
        {
          src: require('../assets/img/img_uthyrning3.jpg'),
          title: 'Vinterförvaring',
          text:
            'Ställplatser för husvagn, husbil och båt… sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Vinterförvaring'
        },
        {
          src: require('../assets/img/img_uthyrning4.jpg'),
          title: 'Verkstadslokaler',
          text:
            'Vi kan hjälpa dig med både större och mindre verkstadslokaler..Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Verkstadslokaler'
        }
      ]
    }
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
