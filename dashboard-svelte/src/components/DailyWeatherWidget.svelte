<script lang="ts">
  import Forecast from "./Forecast.svelte";

  // The $: means "When this variable changes, rerender?"
  $: forecasts = [];
  (async function () {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=32.98&longitude=-96.68&daily=weathercode&timezone=UTC`;
    const daily = await fetch(url)
      .then((res) => res.json())
      .then((res) => res.daily);
    forecasts = daily.time
      .slice(0, 5)
      .map((time, i) => ({ time, weatherCode: daily.weathercode[i] }));
    console.log("forecasts is", forecasts);
  })();
</script>

<section id="widgetWrapper">
  <h1>5 day weather forecast</h1>
  <section id="daysWrapper">
    {#each forecasts as forecast}
      <Forecast {forecast} />
    {/each}
  </section>
</section>

<style>
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
