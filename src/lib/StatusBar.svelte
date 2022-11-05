<script lang="ts">
  import {
    prosperityLevel,
    prosperityChangeRate,
    prosperityEstimatedEffect,
    technologyLevel,
    technologyChangeRate,
    technologyEstimatedEffect,
    freedomLevel,
    freedomChangeRate,
    freedomEstimatedEffect,
    climateLevel,
    climateChangeRate,
    climateEstimatedEffect,
  } from "./stores";
  import StatusIcon from "./StatusIcon.svelte";
</script>

<header class="statusbar">
  <StatusIcon
    type="prosperity"
    level={$prosperityLevel}
    changeRate={$prosperityChangeRate}
    estimatedEffect={$prosperityEstimatedEffect}
  />
  <StatusIcon
    type="technology"
    level={$technologyLevel}
    changeRate={$technologyChangeRate}
    estimatedEffect={$technologyEstimatedEffect}
  />
  <StatusIcon
    type="freedom"
    level={$freedomLevel}
    changeRate={$freedomChangeRate}
    estimatedEffect={$freedomEstimatedEffect}
  />
  <StatusIcon
    type="climate"
    level={$climateLevel}
    changeRate={$climateChangeRate}
    estimatedEffect={$climateEstimatedEffect}
  />
</header>

<style>
  @import "./statusbar.css";
</style>
