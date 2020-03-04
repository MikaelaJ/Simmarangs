<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <v-toolbar flat>
          <v-toolbar-title>
            <nuxt-link to="/">
              <v-img :src="require('../assets/img/logo.png')" alt="logo" width="50px"></v-img>
            </nuxt-link>
          </v-toolbar-title>

          <v-spacer></v-spacer>
          <div md="10" class="pt-3">
            <v-btn
              v-for="link in links"
              :key="link.text"
              :to="link.route"
              color="blue"
              right
              text
              router
              rounded
              class="my-6"
            >{{ link.text }}</v-btn>
          </div>
        </v-toolbar>
      </v-row>
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

<style>
@import '../assets/style.scss';

.active-link {
  text-decoration: black;
  color: aqua;
}
</style>
