<script lang="ts">
	import type { FeaturedProject } from '$/lib/server/projects';
	import ProjectData from './project-data.svelte';

	export let project: FeaturedProject;
	let expandedImageIndex = 0;
</script>

<article class="w-full flex gap-2 lg:h-72 flex-col lg:flex-row lg:even:flex-row-reverse">
	<div class="flex gap-2 w-full lg:w-4/6 min-h-[200px]">
		{#each project.images as image, index}
			<button
				on:click={() => (expandedImageIndex = index)}
				class="w-12 relative transition-all duration-300 ease-in-out rounded-xl overflow-hidden border shadow-lg"
				class:w-full={expandedImageIndex === index}
			>
				<img
					class="absolute inset-0 w-full h-full object-cover object-center"
					src={image}
					alt={project.name}
				/>
			</button>
		{/each}
	</div>

	<div class="bg-card text-card-foreground p-3 lg:w-2/6 flex flex-col border rounded-xl">
		<ProjectData
			name={project.name}
			description={project.description.en}
			url={project.url}
			code={project.code}
			tags={project.tags}
			details={project.details.en}
		/>
	</div>
</article>
