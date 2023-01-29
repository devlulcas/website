<script lang="ts">
	import type { Project } from '../data/types';
	import Tag from './Tag.svelte';

	export let project: Project;
</script>

<article class="p-2 rounded-lg shadow-lg bg-white w-80 h-80">
	<div
		class="flex flex-col h-full gap-4 p-2 rounded-lg shadow-lg bg-white bg-opacity-75 backdrop-filter backdrop-blur-sm"
	>
		<h3 class="text-2xl font-bold">{project.name}</h3>

		<p class="h-full text-gray-800">{project.description}</p>

		<ul class="flex gap-2 flex-wrap-reverse justify-end">
			{#each project.languages as language}
				<li>
					<Tag>
						{language}
					</Tag>
				</li>
			{/each}
		</ul>
	</div>
</article>
