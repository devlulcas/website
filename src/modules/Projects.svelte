<!-- TYPESCRIPT -->
<script lang="ts">
	import SectionLayout from '$layouts/SectionLayout.svelte';
	import FeaturedProject from '$lib/FeaturedProject.svelte';
	import Heading from '$lib/Heading.svelte';
	import ProjectPreview from '$lib/ProjectPreview.svelte';
</script>

<!-- HTML -->
<section>
	<div>
		<Heading>Projetos em destaque</Heading>

		<FeaturedProject />
		<FeaturedProject reverse />
		<FeaturedProject />
		<FeaturedProject reverse />

		<Heading>Outros projetos</Heading>
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
</section>

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
