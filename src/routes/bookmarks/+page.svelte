<script lang="ts">
	import BookmarkCard from '$/lib/components/bookmark-card/bookmark-card.svelte';
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import { t } from '$/lib/i18n';
	import { createSearchStore, searchHandler } from '$lib/stores/generic-search';
	import { onDestroy } from 'svelte';
	import { scale } from 'svelte/transition';
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	// Search
	const searchBookmarks = createSearchStore(data.bookmarks);

	const unsubscribe = searchBookmarks.subscribe((model) => {
		return searchHandler(model);
	});

	onDestroy(() => unsubscribe());

	// Visual Effect
	let cardContainerElement: HTMLElement;

	function handleMouseMove(e: MouseEvent) {
		const els = cardContainerElement.querySelectorAll<HTMLElement>('.lc-card');

		for (const card of els) {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			card.style.setProperty('--mouse-x', `${x}px`);
			card.style.setProperty('--mouse-y', `${y}px`);
		}
	}
</script>

<main class="lc-grid px-4 lg:px-8 pb-8">
	<ContainerSection id="bookmarks" title={$t('bookmarks.title')}>
		<p class="text-lg text-muted-foreground mb-4">
			{data.bookmarks.length}
			{$t('bookmarks.title')}
		</p>

		<div class="w-full p-[2px] rounded-lg lc-gradient focus-within:ring-2 ring-brand-500">
			<label class="sr-only" for="search-bookmark">Search bookmark</label>
			<input
				placeholder="Search bookmark"
				class="p-2 bg-background w-full outline-none flex items-center rounded-md"
				id="search-bookmark"
				name="search"
				type="text"
				bind:value={$searchBookmarks.query}
			/>
		</div>

		{#if $searchBookmarks.filtered.length === 0}
			<p class="text-lg text-muted-foreground mt-4">
				{$t('bookmarks.noResults')}
			</p>
		{/if}

		<div
			bind:this={cardContainerElement}
			role="grid"
			tabindex="0"
			on:mousemove={handleMouseMove}
			class="lc-card-grid min-h-[--view-height]"
		>
			{#each $searchBookmarks.filtered as bookmark}
				<a
					in:scale={{ start: 0.2, duration: 200, delay: 100 }}
					out:scale={{ duration: 200, delay: 100 }}
					class="lc-card rounded-md"
					href={bookmark.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div class="lc-card-content h-full">
						<BookmarkCard {bookmark} />
					</div>
				</a>
			{/each}
		</div>
	</ContainerSection>
</main>

<style lang="postcss">
	:root {
		--bg-color: hsl(0, 0%, 80%);
		--card-color: hsl(0, 0%, 90%);
		--card-after-color: hsla(0deg 0% 10% / 30%);
		--card-before-color: hsla(0 0% 1% / 10%);
	}

	:root[data-theme='dark'] {
		--bg-color: hsla(0, 0%, 0%, 0.743);
		--card-color: hsl(0, 0%, 6%);
		--card-after-color: var(--brand-400);
		--card-before-color: hsla(100, 60%, 30%, 0.1);
	}

	.lc-card-grid {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;

		&:hover > .lc-card::after {
			opacity: 1;
		}
	}

	.lc-card {
		background-color: var(--card-color);
		cursor: pointer;
		position: relative;
		min-height: 20rem;
		max-height: 25rem;
		width: 100%;
	}

	.lc-card:hover::before {
		opacity: 1;
	}

	.lc-card::before,
	.lc-card::after {
		content: '';
		border-radius: inherit;
		height: 100%;
		left: 0px;
		top: 0px;
		opacity: 0;
		position: absolute;
		transition: opacity 500ms;
		width: 100%;
	}

	.lc-card::before {
		z-index: 3;
		background: radial-gradient(
			800px circle at var(--mouse-x) var(--mouse-y),
			var(--card-before-color),
			transparent 40%
		);
	}

	.lc-card::after {
		background: radial-gradient(
			600px circle at var(--mouse-x) var(--mouse-y),
			var(--card-after-color),
			transparent 40%
		);
		z-index: 1;
	}

	.lc-card-content {
		--inset: 2px;
		background-color: var(--card-color);
		border-radius: inherit;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		inset: var(--inset);
		height: calc(100% - var(--inset) * 2);
		padding: 0.5rem;
		position: absolute;
		z-index: 2;
	}
</style>
