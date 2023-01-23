<script lang="ts">
	import type { Project } from '../data/types';
	import ProjectPreview from './ProjectPreview.svelte';

	export let projects: Project[];

	let current = 0;

	const handlePrevious = () => {
		console.log('previous');
		current = current - 1;
	};

	const handleNext = () => {
		console.log('next');
		current = current + 1;
	};

	const handleSwipe = (e: TouchEvent) => {
		const deltaX = e.detail;
		if (deltaX > 0) {
			handlePrevious();
		} else {
			handleNext();
		}
	};
</script>

<section class="space-y-8">
	<button disabled={current === 0} on:click={handlePrevious}> Previous </button>
	<ul on:touchmove={handleSwipe} class="flex gap-4">
		{#each projects as project, index}
			<li
				class:disappear={index < current || index > current + 2}
				class:opacity-100={index >= current && index <= current + 2}
				style="transition: opacity 0.5s ease-in-out 0s;"
			>
				<ProjectPreview {project} />
			</li>
		{/each}
	</ul>
	<button disabled={current === projects.length - 1} on:click={handleNext}> Next </button>
</section>

<style>
	.disappear {
		opacity: 0;
		visibility: hidden;
		padding: 0;
		margin: 0;
		width: 0;
		height: 0;
		position: absolute;
	}
</style>
