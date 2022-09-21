<!-- TYPESCRIPT -->
<script lang="ts">
	import SectionLayout from '$layouts/SectionLayout.svelte';
	import FeaturedProject from '$lib/FeaturedProject.svelte';
	import ProjectPreview from '$lib/ProjectPreview.svelte';
</script>

<!-- HTML -->
<SectionLayout>
	<div>
		<FeaturedProject />
		<FeaturedProject reverse />
		<FeaturedProject />
		<FeaturedProject reverse />

		<ul>
			<li>
				<ProjectPreview />
			</li>
			<li>
				<ProjectPreview />
			</li>
			<li>
				<ProjectPreview />
			</li>
			<li>
				<ProjectPreview />
			</li>
			<li>
				<ProjectPreview />
			</li>
		</ul>
	</div>
</SectionLayout>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	ul {
		width: 100%;
		overflow-x: scroll;
		display: flex;
		gap: 1rem;
		padding: 1rem 0;
	}
</style>
