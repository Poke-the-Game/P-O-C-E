<script lang="ts">
  import {
    prosperityLevel,
    prosperityEstimatedEffect,
    technologyLevel,
    technologyEstimatedEffect,
    freedomLevel,
    freedomEstimatedEffect,
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
    level={$technologyLevel}
    estimatedEffect={$technologyEstimatedEffect}
  />
  <StatusIcon
    type="freedom"
    level={$freedomLevel}
    estimatedEffect={$freedomEstimatedEffect}
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
