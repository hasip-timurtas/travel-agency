<template>
  <div class="wrapper d-flex flex-column">
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      class="home-header"
      height="85"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="logo-container">
        <router-link to="/">
          <v-img
            src="@/assets/logo.png"
            alt="Payvolut Logo"
            width="100px"
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="top-right-contact">
        <v-icon class="px-2">mdi-whatsapp</v-icon>
        <a href="https://wa.me/905356817355/?text=Hello" target="_blank">
          +90 535 681 83 55
        </a>
        <v-icon class="px-2">mdi-email</v-icon>
        <a href="mailto:+90 535 681 83 55" target="_blank">
          info@sultanahmetoldcitytravel.com
        </a>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      fixed
      bottom
      temporary
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            v-if="!item.children"
            :key="item.text"
            :to="item.link"
            link
            @click="item.click ? item.click() : false"
          >
            <v-list-item-action>
              <v-icon :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            no-action
            sub-group
            :value="true"
            :key="item.text"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              :to="child.link"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-card flat>
        <v-card-text class="pa-0">
          <router-view :key="$route.path" />
        </v-card-text>
      </v-card>
    </v-main>
    <v-footer color="blue lighten-2" padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="py-4 text-center white--text" cols="12">
          <v-btn
            v-for="icon in socials"
            :key="icon.icon"
            class="mx-4"
            dark
            icon
            :href="icon.link"
            target="_blank"
          >
            <v-icon size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
          <div class="pa-2">
            {{ new Date().getFullYear() }} —
            <strong>Sultanahmet Old City Travel</strong>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    links: ["Home", "Airport Transfer", "Visitors", "About us", "Contact"],
    socials: [
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/sultanahmet_old_city_travel/",
      },
      {
        icon: "mdi-youtube",
        link: "https://www.youtube.com/channel/UC7GIuPuSwJaVB2cabkFsUzA",
      },
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/sultanahmetoldcitytravel",
      },
    ],
  }),
  created() {
    this.items = [
      {
        text: "Home",
        link: "/",
        icon: "mdi-home-outline",
      },
      {
        text: "Tours",
        "icon-alt": "mdi-plus",
        link: "/the-story",
        children: [
          {
            text: "Islanbul Tours",
            link: "/tours/istanbul-tours",
          },
          {
            text: "Cappadocia Tours",
            link: "/tours/cappadocia-tours",
          },
          {
            text: "Pamukkale Tours",
            link: "/tours/pamukkale-tours",
          },
          {
            text: "Antalya Tours",
            link: "/tours/antalya-tours",
          },
        ],
      },
      {
        text: "Airport Transfer",
        icon: "mdi-airplane",
        link: "/airport-transfer",
      },
      {
        text: "Visitors",
        link: "/visitors",
        icon: "mdi-account-group",
      },
      {
        text: "About Us",
        link: "/about-us",
        icon: "mdi-heart",
        color: "red",
      },
    ];
  },
};
</script>

<style lang="scss">
.logo-container {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.home-header {
  height: 75px;
}

html,
body,
.wrapper {
  height: 100%;
}

.top-right-contact {
  font-size: 14px;
  display: flex;
  align-items: center;

  & a {
    color: rgba(0, 0, 0, 0.8) !important;
    text-decoration: none;
  }

  @include desktop-small-to {
    display: none;
  }
}
</style>
