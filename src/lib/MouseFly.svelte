<script lang="ts">
  let divEl: HTMLDivElement;
  let iconEl: HTMLElement;

  let visible = false;

  const getIcon = (type: string) => {
    switch (type) {
      case "anchor":
        return "uil uil-arrow-up-righ";
      case "picture":
        return "picture";
      case "post":
        return "post";
      default:
        return "";
    }
  };

  const animate = (el: HTMLElement, x: number, y: number) => {
    const animation = {
      transform: `translate(${x}px, ${y}px)`,
    };

    el.animate(animation, {
      duration: 300,
      fill: "forwards",
    });
  };

  const onMouseOver = (event: MouseEvent) => {
    visible = true;
  };

  const onMouseOut = (event: MouseEvent) => {
    visible = false;
  };

  const onMouseMove = (event: MouseEvent) => {
    const x = event.clientX - divEl.offsetWidth / 2;
    const y = event.clientY - divEl.offsetHeight / 2;

    const target = event.target as HTMLElement;

    const interactable = target.closest("[data-interactable]") as HTMLElement;

    const interacting = interactable !== null;

    animate(divEl, x, y);

    if (interacting) {
      const dataset = interactable.dataset as {
        interactable: string;
        type: string;
      };
      console.log(dataset.type);

      iconEl.className = getIcon(dataset.type);
    }
  };
</script>

<svelte:window
  on:mousemove={onMouseMove}
  on:mouseover={onMouseOver}
  on:mouseout={onMouseOut}
/>

<div class:visible bind:this={divEl}>
  <i bind:this={iconEl} />
</div>

<style>
  div {
    opacity: 0;
    pointer-events: none;
    top: 0;
    left: 0;
  }

  .visible {
    opacity: 0.4;
    background: var(--secondary);
    width: 4rem;
    height: 4rem;
    position: fixed;
    z-index: 1000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--on-secondary);
    font-size: 2rem;
  }
</style>
