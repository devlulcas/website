<script lang="ts">
	// @ts-nocheck
	import ProjectPreview from './ProjectPreview.svelte';
	import emblaCarouselSvelte, { type EmblaOptionsType } from 'embla-carousel-svelte';
	import type { Project } from '../data/types';

	export let projects: Project[];

	let emblaApi;

	const emblaConfig = {
		loop: false,
		dragFree: true,
		containScroll: 'keepSnaps',
		speed: 10
	} satisfies EmblaOptionsType;

	const onInit = (event: any) => {
		emblaApi = event.detail;
	};
</script>

<div class="overflow-hidden" use:emblaCarouselSvelte={{ options: emblaConfig }} on:init={onInit}>
	<ul class="flex gap-4">
		{#each projects as project}
			<li class="flex-none min-w-0 cursor-grab">
				<ProjectPreview {project} />
			</li>
		{/each}
	</ul>
</div>
