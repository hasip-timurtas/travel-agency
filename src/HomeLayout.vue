<template>
  <div>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      class="home-header"
      height="85"
      color="blue lighten-4"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="ml-0 pl-4 mr-12">
        <router-link to="/">
          <v-img
            src="@/assets/logo.png"
            alt="Payvolut Logo"
            width="100px"
          ></v-img>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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
          <router-view />
        </v-card-text>
      </v-card>
    </v-main>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
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
            // icon: "mdi-book-open-outline",
            link: "/istanbul-tours",
          },
          {
            text: "Cappadocia Tours",
            // icon: "mdi-book-open-outline",
            link: "/cappadicia-tours",
          },
          {
            text: "Pamukkale Tours",
            //icon: "mdi-book-open-outline",
            link: "/pamukkale-tours",
          },
        ],
      },
      {
        text: "Airport Transfer",
        icon: "mdi-airplane",
        link: "/first-chapter",
      },
      {
        text: "Visitors",
        link: "/full-book",
        icon: "mdi-account-group",
      },
      {
        text: "About Us",
        link: "/community",
        icon: "mdi-account-group",
      },
      {
        text: "Contact",
        link: "/contact",
        icon: "mdi-email-outline",
      },
    ];
  },
};
</script>

<style lang="scss">
.home-header {
  height: 75px;
}
</style>
