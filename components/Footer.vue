<template>
  <v-footer class="brown" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.text"
        color="white"
        text
        router
        :to="link.route"
        rounded
        class="my-2"
        >{{ link.text }}</v-btn
      >
      <v-col class="py-6 text-center" cols="12">
        <nuxt-link
          v-for="icon in icons"
          :key="icon.icon"
          text
          router
          :to="icon.route"
          class="my-2 pa-3"
          ><v-icon class="white--text" right>{{ icon.icon }}</v-icon></nuxt-link
        >
        <!-- {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong> -->
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      { link: 'Entrepenad', text: 'Entrepenad', route: '/entrepenad' },
      { link: 'Jordbruk', text: 'Jordbruk', route: '/jordbruk' },
      { link: 'Grässkötsel', text: 'Grässkötsel', route: '/grässkötsel' },
      { link: 'Uthyrning', text: 'Uthyrning', route: '/uthyrning' },
      { link: 'Omoss', text: 'Om oss', route: '/omoss' },
      { link: 'Kontakt', text: 'Kontakt', route: '/kontakt' }
    ],
    icons: [
      { icon: 'mdi-facebook-box', text: 'Facebook icon', route: '/about' },
      { icon: 'mdi-instagram', text: 'Instagram icon', route: '/about' },
      { icon: 'mdi-linkedin-box', text: 'LinkedIn icon', route: '/about' }
    ]
  })
}
</script>
