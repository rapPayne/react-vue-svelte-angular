<script lang="ts">
import Vue from "vue";
//TODO: Try to put types in this like in the React project (a Widget for example)
import DailyWeatherWidget from "./DailyWeatherWidget.vue";
import RandomColorWidget from "./RandomColorWidget.vue";
import DashboardWidget from "./DashboardWidget.vue";

export default Vue.extend({
  // The name of the component
  name: "Dashboard",
  // Object with a list of sub-components (child components)
  components: { DashboardWidget },
  // Function that returns all reactive data - if these change, we should re-draw the component
  data: () => ({ widgets }),
  // Object with a list of inputs (props) passed into this component from its parent
  props: {},
});

const widgets = makeRandomWidgets().sort((a, b) => a.sortOrder - b.sortOrder);
// Add a DailyWeatherWidget to the random widgets
widgets.push({ sortOrder: 5, component: DailyWeatherWidget });
widgets.sort((a, b) => a.sortOrder - b.sortOrder);

/// Create the array of widgets for the dashboard
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
  justify-content: space-between;
}
</style>
