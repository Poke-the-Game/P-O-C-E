<script lang="ts">
  type StatusType = "prosperity" | "technology" | "freedom" | "climate";
  export let type: StatusType;
  export let level = 0;
  export let changeRate = 0;
  export let estimatedEffect = 0;

  let prevLevel;
  let currentChange = 0;
  let changeTimeout;
  $: {
    currentChange = level - prevLevel;
    if (changeTimeout) clearTimeout(changeTimeout);
    changeTimeout = setTimeout(() => {
      currentChange = 0;
    }, 500);
    prevLevel = level;
  }
</script>

<svg
  class="status-icon"
  viewBox="0 -35 50 120"
  xmlns="http://www.w3.org/2000/svg"
>
  <title>{type}</title>
  <defs>
    <mask id="climate_mask">
      <g transform="translate(25,0)">
        <line
          x1="0"
          y1="3.5"
          x2="0"
          y2="40"
          stroke-width="8"
          stroke-linecap="round"
          fill="none"
          stroke="white"
        />
        <path
          d="M1,8 h10 m-10,5 h10 m-10,5 h10 m-10,5 h10 m-10,5 h10"
          stroke="black"
        />
        <circle cx="0" cy="40" r="9" fill="white" stroke="none" />
      </g>
    </mask>
    <mask id="prosperity_mask">
      <g transform="translate(25,0)">
        <path
          d="m 12,32 c 0,-6.25 -4,-8.65 -9.85,-10.5 -5.55,-1.7 -6.85,-2.8 -6.85,-5.2 0,-2.6 2.15,-3.95 5.15,-3.95 2.75,0 5.1,0.85 7.35,2.9 l 3.25,-3.65 c -2.25,-2.15 -4.8,-3.5 -8.2,-3.95 v -7.35 h -4.9 v 7.3 c -5.4500005,0.75 -9.2000005,4.2 -9.2000005,9.1 0,5 3,7.85 10.0500005,10 5.2,1.6 6.6,2.85 6.6,5.65 0,3.25 -2.6,4.95 -6.15,4.95 -3.45,0 -6.1500005,-1.25 -8.4500005,-3.4 l -3.4,3.75 c 2.5,2.45 5.95,4.2 10.5500005,4.5 v 7.4 h 4.9 v -7.65 c 5.85,-1.05 9.15,-4.85 9.15,-9.9 z"
          fill="white"
        /></g
      >
    </mask>
    <mask id="technology_mask">
      <g transform="translate(25,0)">
        <path
          d="M0,2
    a 13,13,0,0,0,-12,19
    c2,4, 7,5, 7,14
    H0 z
    "
          stroke="none"
          fill="white"
          id="bulb"
        />
        <use href="#bulb" x="0" fill="red" transform="scale(-1,1)" />
        <path
          d="M -4.5,37 h9"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M -4.5,40 h9"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M -4.5,43 h9"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
        <path
          d="M -2,46 h4"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
        />
      </g>
    </mask>
    <mask id="freedom_mask">
      <g transform="translate(25,0)">
        <path d="M-8,14 l4,-8 l2,4 l4,-8 l6,12 " fill="white" />
        <path
          d="M-9,17.5 h18"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path
          d="M-7,23.5 h14"
          stroke="white"
          stroke-width="5"
          stroke-linecap="round"
        />
        <path d="M-5, 27 l2,20 h6 l2,-20" fill="white" />
      </g>
    </mask>
  </defs>
  <rect
    x="0"
    y="0%"
    width="100%"
    height="100%"
    fill="var(--status-bg)"
    mask="url(#{type}_mask)"
  />
  <rect
    class="level"
    class:increased={currentChange > 0}
    class:decreased={currentChange < 0}
    x="0"
    y={(1 - level / 100) * 50}
    width="100%"
    height="100%"
    fill="var(--status-fg)"
    mask="url(#{type}_mask)"
  />
  {#if estimatedEffect !== 0}
    <circle
      class="effect-indicator"
      cx="50%"
      cy="-20"
      r={Math.min(2 + Math.abs(estimatedEffect) / 2.0, 10)}
      fill="var(--status-bg)"
      stroke="none"
    />
  {/if}
  {#if changeRate > 0}
    <path d="M36,7 l7,-7 l7,7 l-7,-1 z" fill="green" />
  {:else if changeRate < 0}
    <path d="M36,0 l7,7 l7,-7 l-7,1 z" fill="red" />
  {/if}
</svg>

<style>
  @import "./statusbar.css";

  .status-icon {
    height: 90px;
  }

  .status-icon .effect-indicator {
    transition: r 3s;
  }
  .status-icon .level {
    transition: y 0.7s, fill 1s;
  }
  .status-icon .level.increased {
    fill: green;
  }
  .status-icon .level.decreased {
    fill: red;
  }
</style>
