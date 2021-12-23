<script lang="ts">
  //TODO: Try to put types in this like in the React project (a Widget for example)
  import DailyWeatherWidget from "./DailyWeatherWidget.svelte";
  import RandomColorWidget from "./RandomColorWidget.svelte";

  import DashboardWidget from "./DashboardWidget.svelte";

  const widgets = makeRandomWidgets().sort((a, b) => a.sortOrder - b.sortOrder);
  // Add a DailyWeatherWidget to the random widgets
  widgets.push({ sortOrder: 5, component: DailyWeatherWidget });
  widgets.sort((a, b) => a.sortOrder - b.sortOrder);

  function makeRandomWidgets(numberOfWidgets = 25) {
    return [...Array(numberOfWidgets)].map((_, i) => ({
      sortOrder: i,
      component: RandomColorWidget,
    }));
  }
</script>

<section id="dashboardWrapper">
  {#each widgets as widget}
    <DashboardWidget>
      <svelte:component this={widget.component} />
    </DashboardWidget>
  {/each}
</section>

<style>
  h1 {
    color: red;
  }
  #dashboardWrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
