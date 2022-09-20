<!-- TYPESCRIPT -->
<script lang="ts">
	import FeaturedPost from '$lib/FeaturedPost.svelte';
	import SectionLayout from '$layouts/SectionLayout.svelte';
	import PostPreview from '$lib/PostPreview.svelte';
	import ProjectPreview from '$lib/ProjectPreview.svelte';
</script>

<!-- HTML -->
<SectionLayout>
	<div>
		<ProjectPreview />
		<ProjectPreview reverse />
		<ProjectPreview />
		<ProjectPreview reverse />
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
