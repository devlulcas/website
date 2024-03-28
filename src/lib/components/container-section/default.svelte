<script lang="ts">
  export let title = '';

  export let id = '';

  let className = '';
  export { className as class };
</script>

<section class="col-span-12 col-start-1 mt-12 lg:col-span-8 lg:col-start-3 {className}">
  {#if title && id}
    <a href="#{id}">
      <h2 {id} class="mb-4 text-4xl font-bold text-foreground">{title}</h2>
    </a>
  {/if}

  <slot />
</section>
