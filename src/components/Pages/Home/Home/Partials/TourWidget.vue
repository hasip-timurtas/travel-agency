<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="375">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-carousel height="300" hide-delimiter-background>
      <v-carousel-item
        v-for="(item, i) in item.images"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <v-card-title class="font-weight-bold">{{ item.title }}</v-card-title>

    <v-card-text>
      <div class="my-4 subtitle-1">€ • {{ item.price }}</div>

      <div>
        {{ item.shortDesc }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Tonight's availability</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Reserve
      </v-btn>
      <v-btn color="deep-purple lighten-2" text @click="show = !show">
        More<v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">Today</div>

          <v-timeline align-top dense>
            <v-timeline-item
              v-for="message in messages"
              :key="message.time"
              :color="message.color"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{ message.from }}</strong>
                </div>
                <div>{{ message.message }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  name: "tour-widget",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      selection: 1,
      show: false,
      messages: [
        {
          from: "19:00 PM - 20:00 PM",
          message: `Collecting from hotels`,
          //  time: "10:42am",
          color: "deep-purple lighten-1",
        },
        {
          from: "20:30 PM",
          message: "Ship departures from Kabataş",
          // time: "10:37am",
          color: "green",
        },
        {
          from: "11:00 PM",
          message: "Arival to Kabataş and to hotels",
          //   time: "9:47am",
          color: "deep-purple lighten-1",
        },
      ],
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>


