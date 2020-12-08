<template>
  <div class="tour-info pa-5">
    <v-container fluid>
      <h1 class="text-center">{{ widgets[0].category.name }}</h1>
      <v-row class="home__cards d-flex">
        <v-col v-for="tour in widgets" :key="tour.slug"
          ><tour-widget :item="tour" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import TourWidget from "./TourWidget";
import tours from "@/plugins/tours";
export default {
  components: { TourWidget },
  data() {
    return {
      widgets: tours,
    };
  },
  created() {
    console.log(this.widgets);
    this.widgets = this.widgets.filter(
      (e) => e.category.slug === this.$route.params.slug
    );
    console.log(this.widgets);
  },
};
</script>