<template>
  <v-carousel cycle height="600" hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      transition="scroll-x-transition"
      reverser-transition="slide-x-reverse-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "slider",
  data() {
    return {
      items: [
        {
          src: require("../../../../../assets/slider/slider1.jpg"),
        },
        {
          src: require("../../../../../assets/slider/slider7.jpg"),
        },
        {
          src: require("../../../../../assets/slider/slider6.jpg"),
        },
        {
          src: require("../../../../../assets/slider/slider3.jpg"),
        },
        {
          src: require("../../../../../assets/slider/slider4.jpg"),
        },
      ],
    };
  },
};
</script>

