<script lang="ts">
	import { website } from '$lib/config/website';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';
	import type { PageServerData } from './$types';

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
	<h1>Bookmarks</h1>

	<pre>
    <hr />
    {$searchBookmarks.filtered}
    <hr />
    {$searchBookmarks.data}
    <hr />

  </pre>

	<div>
		<label for="search">Search</label>
		<input type="text" bind:value={$searchBookmarks.query} placeholder="Search bookmarks" />
	</div>

	{#each $searchBookmarks.filtered as bookmark}
		<div>
			<a href={bookmark.url}>{bookmark.name}</a>
			<p>{bookmark.about}</p>
			<ul>
				{#each bookmark.tags as tag}
					<li>{tag}</li>
				{/each}
			</ul>
		</div>
	{/each}
</main>
