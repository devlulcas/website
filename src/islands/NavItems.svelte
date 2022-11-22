<!-- TYPESCRIPT -->
<script lang="ts">
  import { fly } from "svelte/transition";
  import { circOut } from "svelte/easing";

  export let items: { label: string; href: string }[];
</script>

<!-- HTML -->

<nav transition:fly={{ duration: 300, y: 64, opacity: 0, easing: circOut }}>
  {#each items as item}
    <a href={item.href}>{item.label}</a>
  {/each}
</nav>

<!-- STYLES - SCSS -->
<style>
  nav {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 0.5rem;
    background: var(--background);
  }

  @media screen and (min-width: 90rem) {
    nav {
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
      padding: 0;
      background: transparent;
    }
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    padding: 1rem;
    font-weight: 600;
    color: var(--primary);
  }
</style>
