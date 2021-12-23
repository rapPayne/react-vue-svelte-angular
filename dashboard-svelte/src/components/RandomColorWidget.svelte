<script lang="ts">
  const backgroundColor =
    "#" + Math.floor(Math.random() * 0xffffff).toString(16);
</script>

<div id="wrapper" style="background-color: {backgroundColor}">
  Placeholder widget
</div>

<style>
  #wrapper {
    background-color: yellow;
    height: 100%;
  }
</style>
