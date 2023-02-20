<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import type { Project } from '../data/types';
	import Tag from './Tag.svelte';
	import { t } from '$lib/i18n';

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
		<h2 class="uppercase text-xl font-black text-gray-800 dark:text-gray-100 leading-tight">
			{project.name}
		</h2>

		<p
			class="h-full text-gray-700 dark:text-gray-200 text-sm font-medium leading-[2ch] max-h-[6ch] overflow-hidden"
		>
			{project.description}
		</p>

		<a
			class="view self-end flex items-center gap-1 text-brand-600 dark:text-brand-200 text-md font-medium leading-tight"
			href={project.url}
			target="_blank"
			rel="noreferrer"
		>
			<span>
				{$t('common.seeMore')}
			</span>
			<span class="arrow">
				<ArrowRight size={16} />
			</span>
		</a>
	</section>
</article>

<style lang="postcss">
	.arrow {
		transition: 200ms all ease-in-out;
	}

	.view {
		&:hover {
			& > .arrow {
				transition: 200ms all ease-in-out;
				transform: translateX(10px);
			}
		}
	}
</style>
