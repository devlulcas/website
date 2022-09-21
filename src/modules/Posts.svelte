<!-- TYPESCRIPT -->
<script lang="ts">
	import FeaturedPost from '$lib/FeaturedPost.svelte';
	import SectionLayout from '$layouts/SectionLayout.svelte';
	import PostPreview from '$lib/PostPreview.svelte';
	import Heading from '$lib/Heading.svelte';
</script>

<!-- HTML -->
<section>
	<div>
		<FeaturedPost />
		<Heading>Postagens recentes</Heading>
		<PostPreview />
		<PostPreview />
		<PostPreview />
		<PostPreview />
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
