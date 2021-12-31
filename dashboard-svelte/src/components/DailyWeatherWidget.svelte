<script lang="ts">
  import ForecastFC from "./Forecast.svelte";

  // The $: means "When this variable changes, rerender?"
  // Because of this syntax, we can't apply TS types to it. (sheesh)
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
  <h1 id="title">5 day weather forecast</h1>
  <section id="daysWrapper">
    {#each forecasts as forecast}
      <ForecastFC {forecast} />
    {/each}
  </section>
</section>

<style>
  #title {
    font-size: 24px;
    text-transform: uppercase;
  }
  #widgetWrapper {
    text-align: center;
    height: 100%;
  }
  #daysWrapper {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
</style>
