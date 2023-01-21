<script lang="ts">
	import Bookmark from '$/lib/components/Bookmark.svelte';
	import { website } from '$lib/config/website';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import type { PageServerData } from './$types';
	import { Library, Search } from 'lucide-svelte';

	export let data: PageServerData;

	const searchBookmarks = createSearchStore(data.bookmarks);

	const unsubscribe = searchBookmarks.subscribe((model) => {
		return searchHandler(model);
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:head>
	<title>{website.title}</title>
</svelte:head>

<main>
	<h1 class="mt-8 flex gap-1 items-center text-2xl font-bold text-gray-700">
		<Library />
		<span>BOOKMARKS</span>
	</h1>

	<div
		class="flex items-center gap-2 border-1 border-gray-300 bg-gray-100 text-gray-800 dark:text-gray-200 dark:bg-gray-800 py-1 px-2 rounded-sm focus:ring-2 ring-slate-600 my-6"
	>
		<label class="sr-only" for="search">Search</label>
		<Search size={18} />

		<input
			id="search"
			name="search"
			class="bg-transparent focus:outline-none w-full"
			type="text"
			bind:value={$searchBookmarks.query}
			placeholder="Search bookmarks"
		/>
	</div>

	<ul class="grid grid-cols-3 gap-3 grid-flow-row">
		{#each $searchBookmarks.filtered as bookmark}
			<li>
				<Bookmark {bookmark} />
			</li>
		{/each}
	</ul>
</main>
