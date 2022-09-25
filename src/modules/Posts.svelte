<!-- TYPESCRIPT -->
<script lang="ts">
	import FeaturedPost from '$lib/FeaturedPost.svelte';
	import PostPreview from '$lib/PostPreview.svelte';
	import Heading from '$lib/Heading.svelte';
	import type { PostMetadata } from '$commonTypes/post';

	export let recentPosts: PostMetadata[];
	export let featured: PostMetadata;
</script>

<!-- HTML -->
<section>
	<div>
		<FeaturedPost metadata={featured} />

		<Heading id="posts">Postagens recentes</Heading>

		{#each recentPosts as recentPost}
			<PostPreview metadata={recentPost} />
		{/each}
	</div>
</section>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
