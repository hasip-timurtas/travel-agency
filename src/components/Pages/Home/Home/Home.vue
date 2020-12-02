<template>
  <div class="home">
    <slider />

    <v-container fluid>
      <v-row class="home__cards d-flex">
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
        <v-col><tour-widget :item="widgets[0]" /> </v-col>
        <v-col><tour-widget :item="widgets[1]" /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Slider from "./Partials/Slider";
import TourWidget from "./Partials/TourWidget";
import tours from "./tours.json";
export default {
  components: { Slider, TourWidget },
  data() {
    return {
      widgets: tours,
    };
  },
  created() {
    console.log(tours);
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


