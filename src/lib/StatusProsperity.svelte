<script>
  export let level = 0;
</script>

<svg class="status-icon" viewBox="0 0 30 50" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="prosperity_mask">
      <text
        x="15"
        y="25"
        font-size="50"
        font-family="Fira Sans"
        text-anchor="middle"
        alignment-baseline="central"
        font-weight="500"
        fill="white"
      >
        $
      </text>
    </mask>
  </defs>
  <rect
    x="0"
    y="0%"
    width="100%"
    height="100%"
    fill="var(--status-bg)"
    mask="url(#prosperity_mask)"
  />
  <rect
    x="0"
    y="{100 - level}%"
    width="100%"
    height="100%"
    fill="var(--status-fg)"
    mask="url(#prosperity_mask)"
  />
</svg>

<style>
  @import "./statusbar.css";
</style>
