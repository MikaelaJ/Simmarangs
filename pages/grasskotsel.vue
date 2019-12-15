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
              md="6"
              offset-md="3"
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
                  ><p class="green--text cardtitle">
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
          src: require('../assets/img/img_jordbruk1.jpg'),
          title: 'Klipper trimmar & Rensar',
          text:
            'Vill du ha hjälp med att underhålla föreningens trädgård?… Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
          alt: 'Klipper trimmar & Rensar'
        }
      ]
    }
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
