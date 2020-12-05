<template>
  <div class="about-us ma-auto d-flex justify-center">
    <v-card flat class="about-us__card">
      <v-card-title>About Us</v-card-title>
      <v-card-text>
        We are an experienced travel agency basen on Istanbul, Turkey. We
        produce tours to all the Turkey with passion. We care customer happinies
        first. That's why who choose us comes back again and again. We act our
        customers as a family. We let them enjoy the tours and have an amazing
        trip!

        <v-row class="pt-3">
          <v-col v-for="n in images" :key="n.src" class="d-flex child-flex">
            <v-img :src="n.src" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: "/assets/about-us/0.jpg",
        },
        {
          src: "/assets/about-us/1.jpg",
        },
        {
          src: "/assets/about-us/2.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about-us {
  &__card {
    width: 70%;
    @include tablet-to {
      width: 100%;
    }
  }
}
</style>