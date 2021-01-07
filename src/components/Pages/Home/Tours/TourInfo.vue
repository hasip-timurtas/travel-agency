<template>
  <div class="tour-info container pa-5">
    <h1 class="py-5 text-center">{{ tour.title }}</h1>
    <v-carousel height="500" hide-delimiter-background>
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
    <div class="tour-info__buy">
      <PayPal
        :amount="tour.price"
        currency="EUR"
        :client="credentials"
        env="production"
        @payment-cancelled="paymentCancelled"
        @payment-completed="paymentCompleted"
      >
      </PayPal>
    </div>
  </div>
</template>
<script>
import tours from "@/plugins/tours";
import PayPal from "vue-paypal-checkout";
export default {
  components: { PayPal },
  data() {
    return {
      widgets: tours,
      credentials: {
        sandbox:
          "AQsoDvd_zHW-cyXpNyPUa2dEtpeWOkbsPYb7bGZcXWu4bYk4c1mqQSgqH3WFE6gLwcPlz4E-XvHHxmY5",
        production:
          "ASWln5qx2YwovBa8WvBdM1prFz4TrxS14Gihz84riiTCZvoJTsVFOQD-ExwUu_7qVioLfa6TqsH5Q9V0",
      },
    };
  },
  created() {
    this.tour = this.widgets.find((e) => e.slug === this.$route.params.slug);
    console.log(this.tour, this.widgets);
  },
  methods: {
    paymentCancelled(response) {
      console.log("paymentCancelled", response);
    },
    paymentCompleted(response) {
      console.log("paymentCompleted", response);
    },
  },
};
</script>