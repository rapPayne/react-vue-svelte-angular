<!-- 
This thing is a single thing displayed in the dashboard. It is one
widget in the dashboard. It is a wrapper, wrapping the component itself
which as of now will be a RandomColorWidget or the WeatherWidget. 
-->
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DashboardWidget",
  components: {},
  props: {},
});
</script>

<template>
  <section id="widgetWrapper">
    <slot />
  </section>
</template>


<style scoped>
#widgetWrapper {
  flex-basis: 400px;
  aspect-ratio: 16 / 9;
  flex-grow: 1;
  margin: 5px;
}
</style>