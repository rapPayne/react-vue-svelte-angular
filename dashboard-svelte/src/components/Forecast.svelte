<!--
This is one 'day' forecast. It receives the date and weatherCode
and outputs a day of week with an icon of the weather that day.<template>
There will be five of these side-by-side in one DailyWeatherWidget.
-->
<script lang="ts">
  import { codes } from "../weatherCodes";
  export let forecast;
  const dayOfWeek = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
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
