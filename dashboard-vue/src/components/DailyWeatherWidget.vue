<script lang="ts">
import Vue from "vue";
import Forecast from "./Forecast.vue";
let forecasts: any[];

export default Vue.extend({
  name: "DailyWeatherWidget",
  components: {
    Forecast,
  },
  data() {
    return {
      forecasts,
    };
  },
  mounted() {
    console.log("mounted");
    (async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=32.98&longitude=-96.68&daily=weathercode&timezone=UTC`;
      const daily = await fetch(url)
        .then((res) => res.json())
        .then((res) => res.daily);
      this.forecasts = daily.time.slice(0, 5).map((time: any, i: number) => ({
        time,
        weatherCode: daily.weathercode[i],
      }));
      console.log("forecasts is", this.forecasts);
    })();
  },
  beforeUpdate() {
    console.log("before update");
  },
  updated() {
    console.log("updated");
  },
});
</script>

<template>
  <section id="widgetWrapper">
    <h1>5 day weather forecast</h1>
    <section id="daysWrapper">
      <Forecast
        :forecast="forecast"
        :bind="forecasts"
        v-for="(forecast, i) in forecasts"
        :key="i"
      />
    </section>
  </section>
</template>

<style scoped>
#widgetWrapper {
  text-align: center;
  height: 100%;
}
#daysWrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: stretch;
}
</style>
