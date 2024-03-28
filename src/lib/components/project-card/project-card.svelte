<script lang="ts">
  import { t } from '$/lib/i18n';
  import { ArrowRightIcon } from 'lucide-svelte';
  import ProjectData from './project-data.svelte';
  import type { Project } from '$/lib/server/projects/types';

  export let project: Project;

  const languages = project.languages ?? [];
</script>

<article class="flex w-full flex-col overflow-hidden rounded-xl border shadow-lg">
  <a href={project.url ?? project.code} target="_blank" class="relative h-2/3">
    <div class="absolute left-2 top-2 z-10 flex w-1/3 flex-wrap gap-1">
      {#each languages as language}
        <span class="w-fit rounded border bg-background px-2 py-1 text-xs text-foreground">
          {language.name}
        </span>
      {/each}
    </div>

    <span
      title={$t('common.projects.visit')}
      class="absolute right-2 top-2 z-10 flex aspect-square w-8 items-center justify-center rounded-md border bg-background text-foreground"
    >
      <ArrowRightIcon size={18} class="tranform -rotate-45" />
    </span>

    <div class="h-52 w-full">
      <img class="absolute inset-0 h-full w-full object-cover object-center" src={project.image} alt={project.name} />
    </div>
  </a>

  <div class="flex h-36 flex-col bg-card p-3 text-card-foreground">
    <ProjectData name={project.name} description={project.description} url={project.url} code={project.code} />
  </div>
</article>
