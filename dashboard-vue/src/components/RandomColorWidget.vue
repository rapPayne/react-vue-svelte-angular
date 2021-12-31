<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "RandomColorWidget",
  data: () => ({ backgroundColor, color }),
  beforeCreate() {
    backgroundColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    color = `color-contrast(${backgroundColor} vs black, white)`; // This'll be cool once its supported by all browsers.
  },
});
let backgroundColor: String;
let color: String;
</script>

<template>
  <div
    id="wrapper"
    :style="'background-color:' + backgroundColor + '; color:' + color"
  >
    Placeholder widget
  </div>
</template>

<style scoped>
#wrapper {
  background-color: yellow;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
}
</style>
