<!-- TYPESCRIPT -->
<script lang="ts">
	import FeaturedPost from '$lib/FeaturedPost.svelte';
	import SectionLayout from '$layouts/SectionLayout.svelte';
	import PostPreview from '$lib/PostPreview.svelte';
</script>

<!-- HTML -->
<SectionLayout>
	<div>
		<FeaturedPost />
		<PostPreview />
		<PostPreview />
		<PostPreview />
		<PostPreview />
	</div>
</SectionLayout>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
