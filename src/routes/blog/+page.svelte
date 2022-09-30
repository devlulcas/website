<!-- TYPESCRIPT -->
<script lang="ts">
	import FeaturedPost from '$lib/FeaturedPost.svelte';
	import Heading from '$lib/Heading.svelte';
	import PostPreview from '$lib/PostPreview.svelte';
	import Tag from '$lib/Tag.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- HTML -->
<div>
	<FeaturedPost metadata={data.featuredPost} />

	<Heading id="tags">Tags</Heading>

	<ul class="tags">
		{#each data.tags as tag}
			<Tag href={`/blog/tags/${tag}`}>
				{tag}
			</Tag>
		{/each}
	</ul>

	<Heading id="recent-posts">Postagens recentes</Heading>

	<ul class="posts">
		{#each data.posts as post}
			<li>
				<PostPreview metadata={post} />
			</li>
		{/each}
	</ul>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		width: 100%;
		padding: 1rem;
		display: flex;
		gap: 1rem;
		flex-direction: column;

		@media screen and (min-width: 90rem) {
			padding: 1rem 25rem;
		}
	}

	.tags {
		display: flex;
		gap: 1rem;
		flex-flow: row wrap;
	}

	.posts {
		display: flex;
		gap: 2.5rem;
		flex-direction: column;

		@media screen and (min-width: 90rem) {
			flex-flow: row wrap;
		}
	}

	li {
		min-width: calc(50% - 1.25rem);
	}
</style>
