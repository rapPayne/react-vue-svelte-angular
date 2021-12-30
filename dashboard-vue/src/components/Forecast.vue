<!--
This is one 'day' forecast. It receives the date and weatherCode
and outputs a day of week with an icon of the weather that day.<template>
There will be five of these side-by-side in one DailyWeatherWidget.
-->
<script lang="ts">
import Vue from "vue";
import { codes } from "../weatherCodes";

export default Vue.extend({
  name: "Forecast",
  data: () => ({ codes, dayOfWeek }),
  props: ["forecast"],

  beforeMount() {
    this.dayOfWeek = new Intl.DateTimeFormat("en-US", {
      weekday: "short",
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
}
.dayOfWeek {
  font-weight: bold;
}
.icon {
  width: 50px;
}
.description {
  font-weight: 100;
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
