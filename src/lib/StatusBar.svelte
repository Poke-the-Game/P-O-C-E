<script lang="ts">
  import {
    prosperityLevel,
    prosperityEstimatedEffect,
    climateLevel,
    climateEstimatedEffect,
  } from "./stores";
  import StatusIcon from "./StatusIcon.svelte";
</script>

<header class="statusbar">
  <StatusIcon
    type="prosperity"
    level={$prosperityLevel}
    estimatedEffect={$prosperityEstimatedEffect}
  />
  <StatusIcon
    type="technology"
    level={$climateLevel}
    estimatedEffect={$climateEstimatedEffect}
  />
  <StatusIcon
    type="freedom"
    level={$climateLevel}
    estimatedEffect={$climateEstimatedEffect}
  />
  <StatusIcon
    type="climate"
    level={$climateLevel}
    estimatedEffect={$climateEstimatedEffect}
  />
</header>

<style>
  @import "./statusbar.css";
</style>
