<template>
  <v-footer class="brown" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.text"
        :to="link.route"
        color="white"
        text
        router
        rounded
        class="my-6"
        >{{ link.text }}</v-btn
      >
      <v-col class="py-6 text-center" cols="12">
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          text
          large
          class="my-2"
          ><a :href="icon.route" target="_blank"><v-icon color="white">{{ icon.icon }}</v-icon></a>
          </v-btn>
        <v-row justify="center" class="blue--text pt-10">
          {{ date }} —
          <strong>Simmarängs AB</strong>
        </v-row>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {

  data: () => ({
    date: new Date().getFullYear(),
    links: [
      { link: 'Entrepenad', text: 'Entrepenad', route: '/entrepenad' },
      { link: 'Jordbruk', text: 'Jordbruk', route: '/jordbruk' },
      { link: 'Grässkötsel', text: 'Grönyteskötsel', route: '/grasskotsel' },
      { link: 'Uthyrning', text: 'Uthyrning', route: '/uthyrning' },
      { link: 'Omoss', text: 'Om oss', route: '/omoss' },
      { link: 'Kontakt', text: 'Kontakt', route: '/kontakt' }
    ],
    icons: [
      { icon: 'mdi-facebook', text: 'Facebook icon', route: 'https://www.facebook.com/Simmar%C3%A4ngs-AB-1740988246137637/' },
      { icon: 'mdi-instagram', text: 'Instagram icon', route: 'https://www.instagram.com/' },
      { icon: 'mdi-linkedin', text: 'LinkedIn icon', route: 'https://www.linkedin.com' }
    ]
  })
}
</script>
