<script lang="ts">
  import BlogPostLayout from '$/lib/components/blog-post/blog-post-layout.svelte';
  import PostCard from '$/lib/components/post-card/post-card.svelte';
  import { ArrowUpIcon } from 'lucide-svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="max-w-full bg-background px-4 pb-8 pt-4 text-foreground lg:max-w-[100ch]">
  <BlogPostLayout>
    <svelte:component this={data.component} />
  </BlogPostLayout>

  <ul class="not-prose mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
    {#each data.recommendations as recommendation}
      <li>
        <PostCard post={recommendation} />
      </li>
    {/each}
  </ul>
</div>

<div class="pointer-events-none sticky bottom-0 z-30 flex w-full items-center justify-end gap-4 px-2 py-2">
  <button
    class="lc-gradient lc-line group pointer-events-auto flex h-10 w-10 items-center justify-center gap-2 rounded-lg rounded-br-sm text-brand-50 opacity-25 transition-opacity hover:opacity-100 lg:w-fit lg:px-4"
    on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <span class="sr-only text-brand-50 group-hover:text-brand-900 lg:not-sr-only"> Ir para o topo </span>
    <ArrowUpIcon size={18} class="flex-shrink-0" />
  </button>
</div>
