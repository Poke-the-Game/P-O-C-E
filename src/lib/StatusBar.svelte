<script lang="ts">
  import StatusIcon from "./StatusIcon.svelte";
</script>

<header class="statusbar">
  <StatusIcon type="prosperity" level={50} />
  <StatusIcon type="climate" level={50} />
</header>

<style>
  @import "./statusbar.css";
</style>
