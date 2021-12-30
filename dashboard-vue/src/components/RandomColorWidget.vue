<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "RandomColorWidget",
  data: function () {
    return {
      backgroundColor,
    };
  },
  beforeCreate() {
    backgroundColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  },
});
let backgroundColor: any;
</script>

<template>
  <div id="wrapper" :style="'backgroundColor:' + backgroundColor">
    Placeholder widget
  </div>
</template>

<style scoped>
#wrapper {
  background-color: yellow;
  height: 100%;
}
</style>
