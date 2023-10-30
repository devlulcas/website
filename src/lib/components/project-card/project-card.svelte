<script lang="ts">
	import { t } from '$/lib/i18n';
	import { ArrowRightIcon } from 'lucide-svelte';
	import ProjectData from './project-data.svelte';
	import type { Project } from '$/lib/server/projects/types';

	export let project: Project;

	const languages = project.languages ?? [];
</script>

<article class="w-full flex flex-col overflow-hidden rounded-xl border shadow-lg">
	<a href={project.url ?? project.code} target="_blank" class="relative h-2/3">
		<div class="absolute top-2 left-2 z-10 flex flex-wrap gap-1 w-1/3">
			{#each languages as language}
				<span class="w-fit bg-background text-foreground text-xs rounded py-1 px-2 border">
					{language.name}
				</span>
			{/each}
		</div>

		<span
			title={$t('common.projects.visit')}
			class="absolute top-2 right-2 w-8 aspect-square bg-background text-foreground z-10 rounded-md flex justify-center items-center border"
		>
			<ArrowRightIcon size={18} class="tranform -rotate-45" />
		</span>

		<div class="h-52 w-full">
			<img class="absolute inset-0 w-full h-full object-cover object-center" src={project.image} alt={project.name} />
		</div>
	</a>

	<div class="bg-card h-36 text-card-foreground p-3 flex flex-col">
		<ProjectData name={project.name} description={project.description} url={project.url} code={project.code} />
	</div>
</article>
