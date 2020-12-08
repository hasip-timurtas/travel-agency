<template>
  <div class="tour-info container pa-5">
    <h1 class="py-5">{{ tour.title }}</h1>
    <v-carousel height="300" hide-delimiter-background>
      <v-carousel-item
        v-for="(item, i) in tour.images"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div class="tour-info__description py-5">
      <p>
        {{ tour.shortDesc }}
      </p>
      <div v-html="tour.description" />
    </div>
  </div>
</template>
<script>
import tours from "@/plugins/tours";
export default {
  data() {
    return {
      widgets: tours,
    };
  },
  created() {
    this.tour = this.widgets.find((e) => e.slug === this.$route.params.slug);
    console.log(this.tour, this.widgets);
  },
};
</script>