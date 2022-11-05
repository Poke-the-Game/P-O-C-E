<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const offsetThreshold = 100;
  export let image: string;

  const dispatch = createEventDispatcher();

  $: offset = 0;

  function getDirectionFromOffset(offset) {
    if (offset < -offsetThreshold) {
      return "left";
    } else if (offset > offsetThreshold) {
      return "right";
    } else {
      return null;
    }
  }

  function dispatchSwipeEnd() {
    const direction = getDirectionFromOffset(offset);
    dispatch("swipeEnd", { direction: direction });
    offset = 0;
  }

  function dispatchSwipeMove(prevOffset) {
    const prevDirection = getDirectionFromOffset(prevOffset);
    const direction = getDirectionFromOffset(offset);
    if (prevDirection !== direction) {
      dispatch("swipeChange", { direction: direction });
    }
  }

  interface Position {
    x: number;
    y: number;
  }
  let startPosition: Position | null = null;

  function handleTouchStart(event) {
    event.preventDefault();
    if (event.touches.length === 0) return;
    startPosition = { x: event.touches[0].pageX, y: event.touches[0].pageY };
  }

  function handleTouchMove(event) {
    event.preventDefault();
    if (event.touches.length === 0) return;
    const currentPosition = {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
    const prevOffset = offset;
    offset = currentPosition.x - startPosition.x;
    dispatchSwipeMove(prevOffset);
  }

  function handleTouchEnd(event) {
    event.preventDefault();
    startPosition = null;
    dispatchSwipeEnd();
  }

  function handleMouseDown(event) {
    event.preventDefault();
    startPosition = { x: event.clientX, y: event.clientY };
  }
  function handleMouseMove(event) {
    if (!startPosition) return;
    event.preventDefault();
    const prevOffset = offset;
    offset = event.clientX - startPosition.x;
    dispatchSwipeMove(prevOffset);
  }
  function handleMouseUp(event) {
    event.preventDefault();
    startPosition = null;
    dispatchSwipeEnd();
  }
</script>

<div
  class="card-stack"
  on:touchstart={handleTouchStart}
  on:touchmove={handleTouchMove}
  on:touchend={handleTouchEnd}
  on:mousedown={handleMouseDown}
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
>
  <div
    class="card"
    class:moving={offset !== 0}
    style:filter="grayscale({Math.abs(offset) > offsetThreshold ? 50 : 0}%)"
    style:transform="translateX({offset}px) rotate({offset / 10}deg)"
  >
    Image: {image}
  </div>
</div>

<style>
  .card-stack {
    width: 300px;
    height: 300px;
    border-radius: 2%;
    background-color: #f0f;
  }
  .card {
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-color: #0f0;
    transition: transform 0.4s;
  }
  .card.moving {
    transition: none;
  }
</style>
