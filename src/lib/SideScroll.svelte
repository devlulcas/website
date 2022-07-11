<!--TS-->
<script lang="ts">
  export let velocity: number;

  let slider: HTMLElement;
  let isDown = false;
  let startX;
  let scrollLeft;

  function getMouseData(event: MouseEvent) {
    isDown = true;
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  }

  function moveSlider(event: MouseEvent) {
    if (!isDown) return;
    event.preventDefault();
    const xPosition = event.pageX - slider.offsetLeft;
    const walk = (xPosition - startX) * velocity;
    slider.scrollLeft = scrollLeft - walk;
  }

  function setIsDown() {
    isDown = false;
  }
</script>

<!--HTML-->
<div
  class="slider"
  bind:this={slider}
  on:mousedown={getMouseData}
  on:mousemove={moveSlider}
  on:mouseleave={setIsDown}
  on:mouseup={setIsDown}
>
  <slot />
</div>

<!--CSS-->
<style lang="postcss">
  .slider {
    overflow-x: scroll;
    display: flex;
    width: 100%;
    height: 45vh;
    padding: 1rem;
    gap: 3rem;
  }
</style>
