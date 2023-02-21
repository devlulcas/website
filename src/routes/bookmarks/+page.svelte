<script lang="ts">
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import Seo from '$/lib/components/SEO.svelte';
	import { t } from '$/lib/i18n';
	import { website } from '$lib/config/website';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { Library, Search } from 'lucide-svelte';
	import { onDestroy, onMount } from 'svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const searchBookmarks = createSearchStore(data.bookmarks);

	const unsubscribe = searchBookmarks.subscribe((model) => {
		return searchHandler(model);
	});

	onDestroy(() => {
		unsubscribe();
	});

	let cardContainerEl: HTMLElement;

	onMount(() => {
		cardContainerEl.addEventListener('mousemove', (e) => {
			const els = cardContainerEl.querySelectorAll('[data-card]') as NodeListOf<HTMLElement>;

			for (const card of els) {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		});

		return () => {
			cardContainerEl.removeEventListener('mousemove', () => {});
		};
	});
</script>

<Seo
	seo={{
		title: 'Bookmarks | ' + website.title,
		description: "A collection of bookmarks I've collected over the years.",
		url: `${website.url}/bookmarks`
	}}
/>

<main class="mb-12">
	<SectionTitle class="mt-8" title={$t('bookmarks.title')} icon={Library} />

	<div
		class="flex items-center gap-2 border-1 border-gray-300 bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-800 py-1 px-2 rounded-sm focus:ring-2 ring-slate-600 my-6"
	>
		<label class="sr-only" for="search">{$t('bookmarks.searchLabel')}</label>
		<Search size={18} />

		<input
			id="search"
			name="search"
			class="bg-transparent focus:outline-none w-full"
			type="text"
			bind:value={$searchBookmarks.query}
			placeholder={$t('bookmarks.searchLabel')}
		/>
	</div>

	<ul
		id="cards"
		bind:this={cardContainerEl}
		class="grid grid-cols-2 md:grid-cols-3 gap-3 grid-flow-row"
	>
		{#each $searchBookmarks.filtered as bookmark}
			<li data-card class="card rounded-md">
				<div class="card-content h-full">
					<div class="card-info h-full">
						<div class="card-info-title h-full flex flex-col">
							<h3 class="text-xl font-bold dark:text-gray-100 text-gray-900">
								{bookmark.name}
							</h3>

							<p class="dark:text-gray-300 text-gray-700">
								{bookmark.about}
							</p>

							<ul class="flex gap-2 w-full flex-wrap-reverse mt-auto">
								{#each bookmark.tags as tag}
									<li class="px-2 py-1 bg-gray-50 text-sm rounded-md">
										{tag}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>

<style lang="postcss">
	:root {
		--bg-color: rgb(178, 178, 178);
		--card-color: rgb(232, 232, 232);
		--card-after-color: hsla(0deg 0% 10% / 30%);
		--card-before-color: hsla(0 0% 1% / 10%);
	}

	:root:root[data-theme='dark'] {
		--bg-color: rgba(18, 13, 28, 0.743);
		--card-color: rgb(3, 13, 25);
		--card-after-color: hsla(0deg 0% 100% / 30%);
		--card-before-color: hsla(0 0% 100% / 10%);
	}

	#cards:hover > .card::after {
		opacity: 1;
	}

	.card {
		background-color: var(--card-color);
		cursor: pointer;
		display: flex;
		flex-direction: column;
		position: relative;
		min-height: 20rem;
		width: 100%;
	}

	.card:hover::before {
		opacity: 1;
	}

	.card::before,
	.card::after {
		border-radius: inherit;
		content: '';
		height: 100%;
		left: 0px;
		opacity: 0;
		position: absolute;
		top: 0px;
		transition: opacity 500ms;
		width: 100%;
	}

	.card::before {
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			var(--card-before-color),
			transparent 40%
		);
		z-index: 3;
	}

	.card::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			var(--card-after-color),
			transparent 40%
		);
		z-index: 1;
	}

	.card > .card-content {
		background-color: var(--card-color);
		border-radius: inherit;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		inset: 1px;
		padding: 10px;
		position: absolute;
		z-index: 2;
	}
</style>
