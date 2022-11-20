<!-- TYPESCRIPT -->
<script lang="ts">
  export let active: boolean;
</script>

<!-- HTML -->
<div class="container">
  <input
    checked={active}
    on:click
    type="checkbox"
    id="menu_checkbox"
    aria-label="abre menu mobile"
  />

  <label for="menu_checkbox">
    <div class="line" />
    <div class="line" />
    <div class="line" />
  </label>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
  label {
    cursor: pointer;

    @media screen and (min-width: 90rem) {
      display: none;
    }
  }

  .line {
    width: 3rem;
    height: 0.5rem;
    background: var(--primary);
    border-radius: 0.5rem;
    margin-top: 0.5rem;
    transition: all 0.25s;

    &:first-child {
      margin-top: 0;
    }
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  input:checked + label {
    & .line {
      @for $line from 1 through 3 {
        &:nth-child(#{$line}) {
          transform: translateX(-20% + $line * 20%);
        }
      }
    }
  }
</style>
