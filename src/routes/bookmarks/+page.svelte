<script lang="ts">
	import { website } from '$lib/config/website';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>{website.title}</title>
</svelte:head>

<main>
	<h1>Bookmarks</h1>
	{#each data.bookmarks as bookmark}
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
