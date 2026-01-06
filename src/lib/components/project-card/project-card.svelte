<script lang="ts">
	import IconUimArrowUpRight from '$/lib/assets/icons/icon-uim-arrow-up-right.svelte';
	import { t } from '$/lib/i18n';
	import type { Project } from '$/lib/server/projects/types/project';
	import ProjectData from './project-data.svelte';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();

	const languages = $derived(project.languages ?? []);
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
			<IconUimArrowUpRight class="tranform -rotate-45" />
		</span>

		<div class="h-52 w-full">
			<img
				class="absolute inset-0 h-full w-full object-cover object-center"
				src={project.image}
				alt={project.name}
			/>
		</div>
	</a>

	<div class="flex h-40 flex-col bg-card p-3 text-card-foreground">
		<ProjectData
			name={project.name}
			description={project.description}
			url={project.url}
			code={project.code}
			tags={languages.map((language) => language.name)}
		/>
	</div>
</article>
