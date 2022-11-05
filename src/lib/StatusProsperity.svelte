<script>
  export let level = 0;
</script>

<svg class="status-icon" viewBox="0 0 30 50" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <mask id="prosperity_mask">
      <path
        d="m 27,32 c 0,-6.25 -4,-8.65 -9.85,-10.5 -5.55,-1.7 -6.85,-2.8 -6.85,-5.2 0,-2.6 2.15,-3.95 5.15,-3.95 2.75,0 5.1,0.85 7.35,2.9 l 3.25,-3.65 c -2.25,-2.15 -4.8,-3.5 -8.2,-3.95 v -7.35 h -4.9 v 7.3 c -5.4500005,0.75 -9.2000005,4.2 -9.2000005,9.1 0,5 3,7.85 10.0500005,10 5.2,1.6 6.6,2.85 6.6,5.65 0,3.25 -2.6,4.95 -6.15,4.95 -3.45,0 -6.1500005,-1.25 -8.4500005,-3.4 l -3.4,3.75 c 2.5,2.45 5.95,4.2 10.5500005,4.5 v 7.4 h 4.9 v -7.65 c 5.85,-1.05 9.15,-4.85 9.15,-9.9 z"
        fill="white"
      />
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
