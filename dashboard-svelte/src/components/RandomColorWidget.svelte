<script lang="ts">
  const backgroundColor =
    "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  const color = `color-contrast(${backgroundColor} vs black, white)`; // This'll be cool once its supported by all browsers.
</script>

<div id="wrapper" style="background-color: {backgroundColor}; color: {color}">
  Placeholder widget
</div>

<style>
  #wrapper {
    background-color: yellow;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
  }
</style>
