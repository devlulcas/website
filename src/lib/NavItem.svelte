<script lang="ts">
  export let label: string;
  export let href: string;
  
  const hrefLocation = href.charAt(0);
  const localLinks = ["#", "/"];
</script>

<!--HTML-->
{#if localLinks.includes(hrefLocation)}
  <!--Local links-->
  <a sveltekit:prefetch {href}>
    {label}
  </a>
  {:else}
  <!--External links-->
  <a href="http://{href}" target="_blank" rel="noopener noreferrer">
    {label}
  </a>
{/if}

<!--CSS-->
<style lang="scss">
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    text-decoration: none;
    color: var(--on-primary);
    font-weight: 1000;
    font-size: clamp(1rem, 1.2rem, 1vw);
    
    &:hover {
      color: var(--secondary);
    }

    @media screen and (max-width: 70rem) {
      justify-content: center;
      width: 100%;
      gap: 1rem;
      padding: 1rem;
      font-weight: 1000;
      color: var(--on-primary);
      font-size: clamp(2rem, 4vh, 3rem);
    }
  }
</style>
