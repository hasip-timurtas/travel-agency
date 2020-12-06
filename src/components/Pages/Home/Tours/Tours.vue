<template>
  <div class="tour-info pa-5">
    <h1>Istanbul Tours</h1>
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