<script lang="ts">
  import { prosperityLevel, climateLevel } from "./stores";
  import StatusIcon from "./StatusIcon.svelte";
</script>

<header class="statusbar">
  <StatusIcon type="prosperity" level={$prosperityLevel} />
  <StatusIcon type="climate" level={$climateLevel} />
</header>

<style>
  @import "./statusbar.css";
</style>
