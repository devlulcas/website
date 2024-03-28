<script lang="ts">
  import { t } from '$/lib/i18n';
  import { ArrowRightIcon, GithubIcon } from 'lucide-svelte';

  export let name: string;
  export let description: string;
  export let url: string | undefined;
  export let code: string | null;
  export let tags: string[] = [];
  export let details: string = '';
</script>

<h3 class="line-clamp-1 text-xl font-semibold uppercase" title={name}>
  {name}
</h3>

<p class="mt-1 line-clamp-2 text-sm text-muted-foreground">
  {description}
</p>

{#if details.length > 0}
  <blockquote class="mt-1 line-clamp-4 border-l-2 pl-2 text-sm italic text-muted-foreground">
    {details}
  </blockquote>
{/if}

{#if tags.length > 0}
  <div class="mb-3 mt-2 flex flex-wrap gap-1">
    {#each tags as tag}
      <span class="mt-1 rounded-md bg-accent px-2 py-1 text-xs text-accent-foreground">
        {tag}
      </span>
    {/each}
  </div>
{/if}

<footer class="mt-auto flex items-center justify-between">
  {#if code}
    <a href={code} target="_blank" class="flex items-center gap-1">
      <GithubIcon size={18} />
      {$t('common.projects.seeCode')}
    </a>
  {/if}

  <a href={url ?? code} target="_blank" class="flex items-center gap-1">
    {$t('common.projects.seeMore')}
    <ArrowRightIcon size={18} />
  </a>
</footer>
