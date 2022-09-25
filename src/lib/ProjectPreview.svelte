<!-- TYPESCRIPT -->
<script lang="ts">
	import type { Project } from '$commonTypes/project';

	export let project: Project;

	const imageUrl = `https://raw.githubusercontent.com/devlulcas/${project.name}/main/.github/images/preview.png`;

	const name = project.name.replaceAll('-', ' ');
</script>

<!-- HTML -->
<div style="background-image: url({imageUrl});" title={name}>
	<h4>{name}</h4>
</div>

<!-- STYLES - SCSS -->
<style lang="scss">
	div {
		background: #000;
		border-radius: 0.5rem;
		overflow: hidden;
		position: relative;
		background-size: cover;
		background-position: top;
	}

	h4 {
		word-break: break-all;
		text-transform: uppercase;
		color: #fff;
		aspect-ratio: 1 / 1;
		width: 15rem;
		padding: 1rem;
		font-size: 2rem;
		font-weight: 600;
		background: hsla(0, 0%, 0%, 0.5);
	}
</style>
