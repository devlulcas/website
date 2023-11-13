<script lang="ts">
  import './code.css';
  import './posts.css';

  export let as: 'article' | 'section' = 'article';
</script>

<svelte:element this={as} class="lc-post prose prose-zinc max-w-none dark:prose-invert">
  <slot />
</svelte:element>
