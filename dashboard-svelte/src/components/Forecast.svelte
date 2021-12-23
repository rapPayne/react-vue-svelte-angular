<script lang="ts">
  import { codes } from "../weatherCodes";
  export let forecast;
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date(forecast.time));
</script>

<div id="forecastWrapper">
  <span class="dayOfWeek">{dayOfWeek}</span>
  <img
    src={`/images/${forecast.weatherCode}.png`}
    alt={codes[forecast.weatherCode]}
    class="icon"
  />
  <span class="description">{codes[forecast.weatherCode]}</span>
</div>

<style>
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
