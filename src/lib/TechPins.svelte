<!--TS-->
<script lang="ts">
  export let techs: string[];
</script>

<!--HTML-->
<ul>
  {#each techs as tech}
    <li>{tech}</li>
  {/each}
</ul>

<!--CSS-->
<style lang="postcss">
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    bottom: 0;
  }

  li {
    border: 0.1rem solid var(--primary-dark);
    background: var(--on-primary);
    margin: 1rem;
    height: fit-content;
    flex-grow: 1;
    text-align: center;
    color: var(--primary-dark);
    padding: 0.8rem 2rem;
    font-size: 1.5vh;
    border-radius: 2rem;
    text-transform: uppercase;
    font-weight: 600;

    @media screen and (max-width: 70rem) {
      padding: 0.4rem 1rem;
      font-size: 1rem;
    }
  }
</style>
