<!-- 
This thing is a single thing displayed in the dashboard. It is one
widget in the dashboard. It is a wrapper, wrapping the component itself
which as of now will be a RandomColorWidget or the WeatherWidget. 
-->
<script lang="ts">
</script>

<section id="widgetWrapper">
  <slot />
</section>

<style>
  #widgetWrapper {
    flex-basis: 400px;
    aspect-ratio: 16 / 9;
    flex-grow: 1;
    margin: 5px;
  }
</style>
