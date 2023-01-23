<script lang="ts">
	import type { Project } from '../data/types';

	export let project: Project;

	// If the image is not found, use a placeholder
	function onError() {
		project.picture = '/images/project.webp';
	}

	let langs = project.languages.slice(0, 3);

	let moreLangs = project.languages.slice(3);
</script>

<article class="relative flex flex-col w-full h-80 bg-white rounded-lg shadow-lg overflow-hidden">
	<picture aria-label={project.name} role="img" class="w-full h-64 object-cover rounded-t-lg">
		<img on:error={onError} src={project.picture} alt={project.name} />
	</picture>

	<section
		class="
      absolute bottom-0 w-full flex flex-col flex-grow p-6 bg-opacity-50 backdrop-blur-md bg-white dark:bg-black dark:bg-opacity-50 rounded-b-lg shadow-lg overflow-hidden"
	>
		<h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 leading-tight truncate">
			{project.name}
		</h2>

		<p class="text-gray-700 dark:text-gray-200 text-sm font-medium leading-tight truncate">
			{project.description}
		</p>

		<a
			class="text-blue-500 dark:text-blue-100 text-sm font-medium leading-tight truncate"
			href={project.url}
			target="_blank"
			rel="noreferrer"
		>
			View project
		</a>

		<ul
			class="flex flex-wrap gap-2 items-center justify-start mt-4 text-sm font-medium leading-tight text-gray-700"
		>
			{#each langs as lang}
				<li class="px-2 py-1 bg-gray-200 rounded-md text-gray-700">{lang}</li>
			{/each}

			{#if moreLangs.length > 0}
				<li title={moreLangs.join(', ')} class="px-2 py-1 bg-gray-200 rounded-md text-gray-700">
					...
				</li>
			{/if}
		</ul>
	</section>
</article>
