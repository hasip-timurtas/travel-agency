<template>
  <div class="about-us ma-auto d-flex justify-center container">
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
        <div class="text-center">
          <h2 class="py-5">Contact Info</h2>
          <p>
            Mail: info@sultanahmetoldcitytravel.com <br />
            Phone: +90 212 638 65 47 <br />
            Mobile1: +90 530 827 87 14 <br />
            Mobile2: +90 530 961 83 24 <br />
            Whatsapp:+90 551 394 47 46 <br />
            Whatsapp: +90 535 681 83 55 <br />
          </p>
          <strong>Address</strong>
          <p>
            Binbirdirek district, Peykhane street, no:49/B Sultanahmet, Fatih,
            Istanbul, Turkey
          </p>
        </div>
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
