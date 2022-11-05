<script>
  export let level = 0;
</script>

<svg class="status-icon" viewBox="0 0 20 50" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="climate_mask">
      <g transform="translate(10,0)">
        <line
          x1="0"
          y1="3.5"
          x2="0"
          y2="40"
          stroke-width="7"
          stroke-linecap="round"
          fill="none"
          stroke="white"
        />
        <circle cx="0" cy="40" r="9" fill="white" stroke="none" />
      </g>
    </mask>
  </defs>
  <rect
    x="0"
    y="0%"
    width="100%"
    height="100%"
    fill="var(--status-bg)"
    mask="url(#climate_mask)"
  />
  <rect
    x="0"
    y="{100 - level}%"
    width="100%"
    height="100%"
    fill="var(--status-fg)"
    mask="url(#climate_mask)"
  />
</svg>

<style>
  @import "./statusbar.css";
</style>
