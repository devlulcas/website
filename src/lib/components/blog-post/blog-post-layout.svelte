<script lang="ts">
  import { onMount } from 'svelte';
  import './code.css';
  import './posts.css';
  export let as: 'article' | 'section' = 'article';

  // TODO: Move this to a separate file and maybe make it a component
  const createZoomableImage = (image: HTMLImageElement) => {
    const dialogEl = document.createElement('dialog');
    dialogEl.classList.add('lc-zoomable-image');
    dialogEl.setAttribute('role', 'dialog');
    dialogEl.setAttribute('aria-modal', 'true');

    const closeWrapperEl = document.createElement('div');
    closeWrapperEl.classList.add('lc-zoomable-image__close-wrapper');
    dialogEl.appendChild(closeWrapperEl);

    const closeEl = document.createElement('button');
    closeEl.classList.add('lc-zoomable-image__close');
    closeEl.setAttribute('aria-label', 'Fechar');
    closeEl.setAttribute('title', 'Fechar');
    closeEl.innerHTML = '&times;';
    closeEl.addEventListener('click', () => dialogEl.close());
    closeWrapperEl.appendChild(closeEl);

    const clonedImageEl = image.cloneNode() as HTMLImageElement;
    dialogEl.appendChild(clonedImageEl);

    image.addEventListener('click', () => dialogEl.showModal());
    image.parentElement?.appendChild(dialogEl);

    const close = () => dialogEl.close();
    const open = () => dialogEl.showModal();

    return { close, open };
  };

  onMount(() => {
    const postEl = document.querySelector<HTMLElement>('.lc-post');

    if (!postEl) return;

    const unmount = [...postEl.querySelectorAll<HTMLImageElement>('img')].map((image) => {
      if (image.classList.contains('no-zoom')) return;

      const { close, open } = createZoomableImage(image);

      image.addEventListener('click', open);

      image.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') close();
      });

      return () => {
        image.removeEventListener('click', open);
        image.removeEventListener('keydown', (event) => {
          if (event.key === 'Escape') close();
        });
      };
    });

    return () => {
      unmount.forEach((fn) => fn?.());
    };
  });
</script>

<svelte:element this={as} class="lc-post prose prose-zinc max-w-none dark:prose-invert">
  <slot />
</svelte:element>

<style>
  :global(.lc-zoomable-image) {
    background: hsla(0, 0%, 0%, 0.75);
    border-radius: 0.5rem;
    box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.25);
    border: 1px solid var(--brand-800);
    padding: 10px;
  }

  :global(.lc-zoomable-image::backdrop) {
    background: hsla(0, 0%, 0%, 0.75);
    backdrop-filter: blur(10px);
  }

  :global(.lc-zoomable-image__close-wrapper) {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 10px;
  }

  :global(.lc-zoomable-image__close) {
    position: relative;
    background: hsla(0, 0%, 0%);
    border-radius: 10px 2px 10px 10px;
    color: var(--brand-50);
    font-size: 2rem;
    line-height: 1;
    padding: 0;
    cursor: pointer;
    width: 48px;
    height: 48px;
  }

  :global(.lc-zoomable-image__close::before) {
    content: '';
    border-radius: 10px 2px 10px 10px;
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    background: linear-gradient(76.35deg, var(--brand-dark) 5%, var(--brand-light) 35%, var(--brand-dark) 95%);
    top: -2px;
    left: -2px;
    z-index: -1;
  }
</style>
