<!--JAVASCRIPT-->
<script>
	import CardProject from '$lib/CardProject.svelte';
	import { projects } from '../javascript/projects';
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - PROJECTS</title>
</svelte:head>

<!--BODY-->
<div class="container">
	{#each projects as project}
		<div class="card">
			<CardProject {project} />
		</div>
	{/each}
</div>

<!--CSS-->
<style>
	.container {
		--row: calc(50% - 2rem);
		width: 100%;
		height: 100%;
		gap: 4rem;
		padding: 4rem;
		background: var(--white);
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: var(--row) var(--row);
	}

	.card {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 75rem) {
		.container {
			overflow-y: scroll;
			display: block;
		}

		.card {
			margin-bottom: 1.5rem;
		}
	}
</style>
