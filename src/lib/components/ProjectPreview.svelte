<script lang="ts">
	import type { Project } from '../data/types';

	export let project: Project;
</script>

<article
	style="background-image: url('{project.picture}');"
	class="p-2 rounded-lg shadow-lg bg-white w-80 h-80"
>
	<div
		class="flex flex-col h-full gap-4 p-2 rounded-lg shadow-lg bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm"
	>
		<h3 class="text-2xl font-bold">{project.name}</h3>
		<p class="text-gray-500">{project.description}</p>

		<ul class="flex gap-2 flex-wrap">
			{#each project.languages as language}
				<li>
					<span class="text-gray-500">{language}</span>
				</li>
			{/each}
		</ul>
	</div>
</article>
