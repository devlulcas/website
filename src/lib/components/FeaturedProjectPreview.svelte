<script lang="ts">
	import { ArrowRight, CornerDownRight } from 'lucide-svelte';
	import type { Project } from '../data/types';
	import Tag from './Tag.svelte';

	export let project: Project;

	// If the image is not found, use a placeholder
	function onError() {
		project.picture = '/images/project.webp';
	}

	let langs = project.languages.slice(0, 3);

	let moreLangs = project.languages.slice(3);
</script>

<article class="relative flex flex-col overflow-hidden w-full h-80 bg-white rounded-lg shadow-lg">
	<picture aria-label={project.name} role="img" class="w-full h-full object-cover">
		<img on:error={onError} src={project.picture} alt={project.name} />
	</picture>

	<ul
		class="absolute top-2 right-2 flex flex-wrap gap-2 items-center justify-start text-sm font-medium leading-tight text-gray-700"
	>
		{#each langs as lang}
			<Tag>{lang}</Tag>
		{/each}

		{#if moreLangs.length > 0}
			<Tag title={moreLangs.join(', ')}>...</Tag>
		{/if}
	</ul>

	<section
		class="absolute bottom-0 w-full h-1/2 flex flex-col flex-grow p-6 bg-opacity-75 backdrop-blur-md bg-white dark:bg-black dark:bg-opacity-50 overflow-hidden"
	>
		<h2 class="uppercase text-2xl font-black text-gray-800 dark:text-gray-100 leading-tight">
			{project.name}
		</h2>

		<p class="h-full text-gray-700 dark:text-gray-200 text-sm font-medium leading-tight">
			{project.description}
		</p>

		<a
			class="self-end flex items-center gap-1 text-blue-500 dark:text-blue-100 text-sm font-medium leading-tight"
			href={project.url}
			target="_blank"
			rel="noreferrer"
		>
			View project <ArrowRight size={16} />
		</a>
	</section>
</article>
