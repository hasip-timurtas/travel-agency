<template>
  <div class="tour-info pa-5">
    <v-container fluid>
      <h1 class="text-center">Istanbul Tours</h1>
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
import TourWidget from "./TourWidget";
import tours from "./tours.json";
export default {
  components: { TourWidget },
  data() {
    return {
      widgets: tours,
    };
  },
};
</script>