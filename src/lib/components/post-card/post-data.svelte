<script lang="ts">
  import { locale, t } from '$/lib/i18n';
  import type { PostMetadata } from '$/lib/server/posts/types';
  import { ArrowRightIcon, DotIcon, HashIcon } from 'lucide-svelte';

  export let post: PostMetadata;
  export let showDescription = false;

  $: i18nReleaseDate = new Date(post.date).toLocaleDateString($locale === 'pt' ? 'pt-BR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
</script>

<p class="text-md mt-2 flex items-center">
  <strong class="text-accent-foreground">
    {post.language.niceName}
  </strong>

  <DotIcon size={24} />

  <time class="text-muted-foreground" datetime={post.date}>
    {i18nReleaseDate}
  </time>
</p>

<h3 class="mb-2 line-clamp-2 h-[2lh] text-2xl font-bold" title={post.title}>
  {post.title}
</h3>

{#if showDescription}
  <p class="text-md mt-2 line-clamp-3 h-[3lh] text-muted-foreground">
    {post.excerpt}
  </p>
{/if}

<div class="group flex flex-wrap items-center gap-2">
  <HashIcon size={16} class="text-muted-foreground group-hover:text-brand-600" />

  {#each post.categories as category}
    <a href="/blog/categories/{category}" class="text-sm text-muted-foreground hover:underline">
      {category}
    </a>
  {/each}
</div>

<footer class="mt-auto flex items-center justify-between">
  <p class="text-md text-muted-foreground">
    {post.readingTime}
    {$t('common.posts.timeToRead')}
  </p>

  <a href="/blog/{post.slug}" class="flex items-center gap-1">
    {$t('common.posts.seeMore')}
    <ArrowRightIcon size={18} class="tranform -rotate-45 " />
  </a>
</footer>
