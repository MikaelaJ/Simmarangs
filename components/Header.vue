<template>
  <v-app-bar>
    <v-container class="hidden-sm-and-down">
      <v-row>
        <v-toolbar flat>
          <v-toolbar-title>
            <nuxt-link to="/">
              <v-img :src="require('../assets/img/simmarangs_2.png')" alt="logo" width="120px"></v-img>
            </nuxt-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <div md="10" class="pt-1">
            <v-btn
              v-for="link in links"
              :key="link.text"
              :to="link.route"
              color="blue"
              text
              nuxt
              rounded
              class="my-6"
            >{{ link.text }}</v-btn>
          </div>
        </v-toolbar>
      </v-row>
    </v-container>

    <v-container class="hidden-md-and-up" width="100%">
      <v-toolbar flat>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <nuxt-link to="/">
              <v-img
                :src="require('../assets/img/simmarangs_2.png')"
                alt="logo"
                width="120px"
                class="mr-7"
              ></v-img>
            </nuxt-link>

            <v-btn offset-y class="menu-icon" icon v-on="on" @click.stop>
              <v-icon class="right teal--text display-1 mt=0">mdi-menu</v-icon>
            </v-btn>
          </template>

          <v-list v-for="(link, i) in links" :key="i" tile flat max-width="100" min-width="180">
            <v-list-item :to="link.route">
              <v-list-item-title tile class="teal--text my-1 pt-3">{{ link.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          link: 'Entrepenad',
          text: 'Entrepenad',
          route: '/entrepenad',
          color: 'blue--text'
        },
        {
          link: 'Jordbruk',
          text: 'Jordbruk',
          route: '/jordbruk',
          color: 'blue--text'
        },
        {
          link: 'Grässkötsel',
          text: 'Grönyteskötsel',
          route: '/grasskotsel',
          color: 'blue--text'
        },
        {
          link: 'Uthyrning',
          text: 'Uthyrning',
          route: '/uthyrning',
          color: 'blue--text'
        },
        { link: 'Omoss', text: 'Om oss', route: '/omoss', color: 'blue--text' },
        {
          link: 'Kontakt',
          text: 'Kontakt',
          route: '/kontakt',
          color: 'blue--text'
        }
      ],
      subLinks: [{ icon: 'mdi-flag', text: 'Test', route: '/example' }]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';

a {
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
}
</style>
