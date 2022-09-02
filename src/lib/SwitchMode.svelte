<!--TS-->
<script lang="ts">
  import { browser } from "$app/environment";

  let lightMode = false;

  // Alterna o modo entre dark/light apenas quando executado no cliente (O tema é definido por classes CSS que alteram variáveis)
  $: if (browser) {
    document.documentElement.classList.toggle("light", lightMode);
  }
</script>

<!--HTML-->
<label for="toggle__core" class="toggle">
  <input
    bind:checked={lightMode}
    name="toggle__core"
    id="toggle__core"
    type="checkbox"
    class="checkbox"
  />

  <div class="knobs" />
  
  <div class="layer" />
</label>

<!--CSS-->
<style lang="scss">
  .toggle {
    --toggle-height: 2rem;
    --toggle-width: calc(2 * var(--toggle-height));
    --switch-light: #1947e5;
    --switch-dark: var(--secondary);
     
    display: block;
    overflow: hidden;
    position: relative;
    width: var(--toggle-width);
    height: var(--toggle-height);
    border-radius: 4rem;

    &:focus-within {
      outline: 0.1rem solid var(--on-primary);
    }
  }

  .checkbox {
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
  }

  .layer,
  .knobs {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .layer {
    width: 100%;
    background-color: var(--switch-dark);
    transition: 0.3s ease all;
    z-index: 1;
  }

  .knobs {
    z-index: 2;

    &::before,
    &::after {
      --pseudo-padding: 0.2rem;
      --option-size: calc(var(--toggle-height) - 2 * var(--pseudo-padding));
      
      content: "";
      position: absolute;
      top: var(--pseudo-padding);
      left: var(--pseudo-padding);
      width: var(--option-size);
      height: var(--option-size);
      border-radius: 50%;
      transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }

    &::before {
      background-image: url("/night.png");
    }

    &::after {
      top: -3rem;
      background-image: url("/sunny.png");
      right: 0.2rem;
      left: auto;
    }
  }

  .checkbox:checked {
    & + .knobs:before {
      top: -3rem;
    }

    & + .knobs:after {
      top: var(--pseudo-padding);
    }

    & ~ .layer {
      background-color: var(--switch-light);
    }
  }
</style>
