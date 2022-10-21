<!-- TYPESCRIPT -->
<script lang="ts">
	import type { Project } from '$commonTypes/project';
	import FeaturedProject from '$lib/FeaturedProject.svelte';
	import Heading from '$lib/Heading.svelte';
	import ProjectPreview from '$lib/ProjectPreview.svelte';

	export let projects: Project[];

	export let featuredProjects: Project[];
</script>

<!-- HTML -->
<section>
	<div>
		<Heading id="projects">Projetos em destaque</Heading>

		<div class="projects">
			{#each featuredProjects as project, index}
				<FeaturedProject {project} reverse={index % 2 !== 0} />
			{/each}
		</div>

		<Heading id="other-projects">Outros projetos</Heading>

		<ul>
			{#each projects as project}
				<li>
					<ProjectPreview {project} />
				</li>
			{/each}
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

	.projects {
		display: flex;
		flex-direction: column;
		gap: 5rem;
		width: 100%;
	}

	ul {
		width: 100%;
		overflow-x: scroll;
		display: flex;
		gap: 1rem;
		padding: 1rem 0;
	}
</style>
