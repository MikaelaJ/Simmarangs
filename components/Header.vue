<template>
  <v-app-bar app>
    <v-container>
      <v-row>
        <div md="2">
          <v-toolbar-title>
            <v-responsive>
              <nuxt-link to="/">
                <v-img
                  width="40px"
                  :src="require('../assets/img/logo.png')"
                  alt="logo"
                ></v-img>
              </nuxt-link>
            </v-responsive>
          </v-toolbar-title>
        </div>
        <v-spacer></v-spacer>
        <div md="10" class="pt-3">
          <nuxt-link
            v-for="link in links"
            :key="link.text"
            v-model="links"
            justify="right"
            router
            :to="link.route"
          >
            <a right text class="mr-10 blue--text">{{ link.text }}</a>
            <!-- <v-icon v-text="link.icon" right></v-icon> -->
          </nuxt-link>
        </div>
      </v-row>
    </v-container>

    <!-- <v-app-bar elevation="0">
    <v-content app>
      <v-toolbar-title class="headline text-uppercase">
        <nuxt-link router to="/">
          <span>Simmarängs</span>
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link
        v-for="link in links"
        :key="link.text"
        v-model="links"
        router
        :to="link.route"
      >
        <v-btn text class="mr-2">{{ link.text }}</v-btn>
        <v-icon v-text="link.icon" right></v-icon>
    </nuxt-link>-->

    <!-- drop down -->
    <!--  <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn right cols="1" class="hidden-md-and-up" text v-on="on">
          Dropdown
          <v-icon right>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <nuxt-link
          v-for="subLink in subLinks"
          :key="subLink.text"
          router
          :to="subLink.route"
        >
          <v-list-item-title>{{ subLink.text }}</v-list-item-title>
        </nuxt-link>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { link: 'Entrepenad', text: 'Entrepenad', route: '/entrepenad' },
        { link: 'Jordbruk', text: 'Jordbruk', route: '/jordbruk' },
        { link: 'Grässkötsel', text: 'Grässkötsel', route: '/grasskotsel' },
        { link: 'Uthyrning', text: 'Uthyrning', route: '/uthyrning' },
        { link: 'Omoss', text: 'Om oss', route: '/omoss' },
        { link: 'Kontakt', text: 'Kontakt', route: '/kontakt' }
      ],
      subLinks: [{ icon: 'mdi-flag', text: 'Test', route: '/example' }]
    }
  }
}
</script>

<style>
@import '../assets/style.scss';
</style>
