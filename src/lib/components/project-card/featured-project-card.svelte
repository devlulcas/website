<script lang="ts">
	import { locale } from '$/lib/i18n';
	import type { FeaturedProject } from '$/lib/server/projects/types/featured-project';
	import ProjectData from './project-data.svelte';

	type Props = {
		project: FeaturedProject;
	};

	let { project }: Props = $props();

	let expandedImageIndex = $state(0);
	let inEnglish = $derived($locale === 'en');
</script>

<article class="flex w-full flex-col gap-2 lg:h-80 lg:flex-row lg:even:flex-row-reverse">
	<div class="flex min-h-[200px] w-full select-none gap-2 lg:w-4/6">
		{#each project.images as image, index}
			<button
				onclick={() => (expandedImageIndex = index)}
				class="relative w-12 overflow-hidden rounded-xl border shadow-lg transition-all duration-300 ease-in-out"
				class:w-full={expandedImageIndex === index}
			>
				<img
					draggable={false}
					class="absolute inset-0 h-full w-full object-cover object-center"
					src={image}
					alt={project.name}
				/>
			</button>
		{/each}
	</div>

	<div class="flex flex-col rounded-xl border bg-card p-3 text-card-foreground lg:w-2/6">
		<ProjectData
			name={project.name}
			url={project.url}
			code={project.code}
			description={inEnglish ? project.description.en : project.description.pt}
			details={inEnglish ? project.details.en : project.details.pt}
			tags={[...project.tags.both, ...(inEnglish ? project.tags.en : project.tags.pt)]}
		/>
	</div>
</article>
