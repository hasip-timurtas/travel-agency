<template>
  <div class="home">
    <slider />
    <v-row justify="center blue lighten-2" no-gutters>
      <v-btn
        v-for="menu in menus"
        :key="menu.link"
        color="white"
        text
        rounded
        class="my-2"
        :to="menu.link"
      >
        {{ menu.name }}
      </v-btn>
    </v-row>
    <v-container fluid class="pa-0">
      <v-row class="home__cards d-flex">
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
        <v-col><tour-widget :item="widgets[2]" /> </v-col>
        <v-col><tour-widget :item="widgets[3]" /> </v-col>
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
        <v-col><tour-widget :item="widgets[2]" /> </v-col>
        <v-col><tour-widget :item="widgets[3]" /> </v-col>
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Slider from "./Partials/Slider";
import TourWidget from "../Tours/TourWidget";
import tours from "@/plugins/tours";
export default {
  components: { Slider, TourWidget },
  data() {
    return {
      widgets: tours,
      menus: [
        {
          name: "Istanbul Tous",
          link: "/tours/istanbul-tours",
        },
        {
          name: "Cappadocia Tours",
          link: "/tours/cappadocia-tours",
        },
        {
          name: "Pamukkale Tours",
          link: "/tours/pamukkale-tours",
        },
        {
          name: "Airport Transfer",
          link: "/airport-transfer",
        },
      ],
    };
  },
  created() {
    //console.log(tours);
  },
};
</script>
<style lang="scss" scoped>
h1 {
  @include tablet-to {
    font-size: 25px;
  }
}
</style>


