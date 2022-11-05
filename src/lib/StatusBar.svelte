<script>
  import StatusClimate from "./StatusClimate.svelte";
  import StatusProsperity from "./StatusProsperity.svelte";
</script>

<header class="statusbar">
  <StatusProsperity level={50} />
  <StatusClimate level={50} />
</header>

<style>
  @import "./statusbar.css";
</style>
