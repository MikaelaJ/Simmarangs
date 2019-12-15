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
                  ><p class="brown--text cardtitle">{{ card.title }}</p></v-card-title
                >
                <v-card-text class="">
                  <v-responsive>
                    <img
                      class="cards pa-0"
                      :src="card.src"
                      :alt="card.alt"
                    />
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
          src: require('../assets/img/img_jordbruk1.jpg'),
          title: 'Dikor – Kravmärkt',
          text:
            'Vi säljer KRAV-märkt kött från våra dikor… Snöplogning och Sandning… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Dikor – Kravmärkt'
        },
        {
          src: require('../assets/img/img_jordbruk2.jpg'),
          title: 'Pressa foder',
          text: 'Vi kan hjälpa till att pressa både ensilage, halm och hö… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          alt: 'Pressa foder'
        },
        {
          src: require('../assets/img/img_jordbruk3.jpg'),
          title: 'Fastgödselspridare',
          text: 'Vi erbjuder också… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Fastgödselspridare'
        },
        {
          src: require('../assets/img/img_jordbruk4.jpg'),
          title: 'Slå gräs',
          text: 'Vi har all utrustning till att slå olika sorters gräs….Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui sapien eget mi proin sed libero enim sed faucibus.',
          alt: 'Slå gräs'
        }
      ]
    }
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
