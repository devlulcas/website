<script lang="ts">
  import { locale } from '$/lib/i18n';
  import type { Bookmark } from '$/lib/server/bookmarks/types';

  export let bookmark: Bookmark;

  let description: string;

  $: {
    if ($locale === 'en') {
      description = bookmark.about.en || bookmark.about.ptBr;
    } else {
      description = bookmark.about.ptBr || bookmark.about.en;
    }
  }
</script>

<div class="flex h-full flex-col">
  <h3 class="mb-2 text-xl font-bold text-card-foreground">
    {bookmark.name}
  </h3>

  <p class="text-muted-foreground">
    {description}
  </p>

  <ul class="mt-auto flex w-full flex-wrap-reverse gap-2">
    {#each bookmark.tags as tag}
      <li class="rounded bg-neutral-50 px-2 py-1 text-sm text-neutral-700 dark:bg-neutral-700 dark:text-neutral-50">
        {tag}
      </li>
    {/each}
  </ul>
</div>
