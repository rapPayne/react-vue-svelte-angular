<script lang="ts">
import Vue from "vue";
import { codes } from "../weatherCodes";

export default Vue.extend({
  name: "Forecast",
  data: () => ({ codes, dayOfWeek }),
  props: ["forecast"],

  beforeMount() {
    this.dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(new Date(this.forecast.time));
  },
});

let dayOfWeek: any;
</script>

<template>
  <div id="forecastWrapper">
    <span class="dayOfWeek">{{ dayOfWeek }}</span>
    <img
      :src="`/images/${forecast.weatherCode}.png`"
      :alt="codes[forecast.weatherCode]"
      class="icon"
    />
    <span class="description">{{ codes[forecast.weatherCode] }}</span>
  </div>
</template>

<style scoped>
#forecastWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2;
  padding: 4px 2px 2px 2px;
}
.dayOfWeek {
  font-weight: bold;
}
.icon {
  width: 50px;
}
</style>
