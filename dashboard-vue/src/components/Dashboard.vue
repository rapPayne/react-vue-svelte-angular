<script lang="ts">
import Vue from "vue";
//TODO: Try to put types in this like in the React project (a Widget for example)
import DailyWeatherWidget from "./DailyWeatherWidget.vue";
import RandomColorWidget from "./RandomColorWidget.vue";
import DashboardWidget from "./DashboardWidget.vue";

export default Vue.extend({
  name: "Dashboard",
  components: {
    DashboardWidget,
  },
  data: function () {
    return {
      widgets,
    };
  },
  props: {},
});

const widgets = makeRandomWidgets().sort((a, b) => a.sortOrder - b.sortOrder);
// Add a DailyWeatherWidget to the random widgets
widgets.push({ sortOrder: 5, component: DailyWeatherWidget });
widgets.sort((a, b) => a.sortOrder - b.sortOrder);

function makeRandomWidgets(numberOfWidgets = 25) {
  return [...Array(numberOfWidgets)].map<any>((_, i) => ({
    sortOrder: i,
    component: RandomColorWidget,
  }));
}
</script>

<template>
  <section id="dashboardWrapper">
    <DashboardWidget v-for="(widget, i) in widgets" :key="i">
      <component :is="widget.component" />
    </DashboardWidget>
  </section>
</template>

<style scoped>
#dashboardWrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>
