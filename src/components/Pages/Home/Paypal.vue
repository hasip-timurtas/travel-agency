<template>
  <div class="pa-10">
    <PayPal
      amount="7.50"
      currency="USD"
      :client="credentials"
      env="sandbox"
      @payment-cancelled="paymentCancelled"
      @payment-completed="paymentCompleted"
    >
    </PayPal>
  </div>
</template>
<script>
// THIS PAGE IS FOR TEST
import PayPal from "vue-paypal-checkout";
export default {
  components: {
    PayPal,
  },
  data() {
    return {
      credentials: {
        sandbox:
          "AQsoDvd_zHW-cyXpNyPUa2dEtpeWOkbsPYb7bGZcXWu4bYk4c1mqQSgqH3WFE6gLwcPlz4E-XvHHxmY5",
        production:
          "ASWln5qx2YwovBa8WvBdM1prFz4TrxS14Gihz84riiTCZvoJTsVFOQD-ExwUu_7qVioLfa6TqsH5Q9V0",
      },
    };
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
<style lang="scss">
.zoid-outlet {
  width: 300px !important;
}
</style>
