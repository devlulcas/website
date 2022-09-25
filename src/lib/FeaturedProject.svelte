<!-- TYPESCRIPT -->
<script lang="ts">
	import type { Project } from '$commonTypes/project';
	import Tag from './Tag.svelte';

	export let reverse: boolean = false;
	export let project: Project;

	const imageUrl = `https://raw.githubusercontent.com/devlulcas/${project.name}/main/.github/images/preview.png`;

	const name = project.name.replaceAll('-', ' ');
</script>

<!-- HTML -->
<article class:reversed-container={reverse}>
	<picture aria-label={name} title={name} style="background-image: url({imageUrl});" />

	<div class="content">
		<div class="text">
			<h3 class:reversed-text={reverse}>{name}</h3>

			<p class:reversed-text={reverse}>
				{project.description}
			</p>
		</div>

		<ul class:reversed-tags={reverse}>
			{#each project.languages.nodes as language}
				<Tag href={language.name}>{language.name}</Tag>
			{/each}
		</ul>
	</div>
</article>

<!-- STYLES - SCSS -->
<style lang="scss">
	article {
		display: flex;
		gap: 1rem;
	}

	picture {
		height: clamp(15rem, 15vw, 25rem);
		position: relative;
		aspect-ratio: 1 / 1;
		background: #000;
		border-radius: 0.5rem;
		background-size: cover;
		background-position: top;
		transition: 0.5s all;

		&:hover {
			height: clamp(35rem, 35vw, 45rem);
			background-position: bottom;
			transition: 1s all;
		}
	}

	.content {
		padding: 0.5rem 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		justify-content: space-between;
		width: 100%;
	}

	h3 {
		font-size: clamp(1.6rem, 3vw, 2.75rem);
		text-align: right;
		font-weight: 600;
		word-break: break-all;
		line-clamp: 5;
		text-transform: uppercase;
	}

	p {
		text-align: right;
		margin-top: 1rem;
		font-size: clamp(1rem, 2vw, 1.6rem);
		height: 6.5rem;
		overflow-y: hidden;
		position: relative;

		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-image: linear-gradient(0deg, hsl(0 0% 100%) 5%, hsl(0 0% 100% / 0%) 25%);
		}
	}

	ul {
		justify-content: flex-end;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.reversed-container {
		flex-direction: row-reverse;
	}

	.reversed-text {
		text-align: left;
	}

	.reversed-tags {
		justify-content: flex-start;
	}
</style>
