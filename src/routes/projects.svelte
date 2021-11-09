<!--JAVASCRIPT-->
<script>
	import CardProject from '$lib/CardProject.svelte';

	const projects = {
		portfolio: {
			name: 'Portfolio',
			description: 'This site',
			liveUrl: 'https://devlulcas.github.io',
			codeUrl: 'https://github.com/devlulcas/devlulcas.github.io',
			moreInfoUrl: 'https://google.com',
			techs: ['Svelte', 'HTML', 'CSS', 'JS', 'SVELTEKIT', 'GH PAGES']
		}
	};
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - PROJECTS</title>
</svelte:head>

<!--BODY-->
<div class="container">
	<div class="card">
		<CardProject {...projects.portfolio} />
	</div>

	<div class="card">
		<CardProject {...projects.portfolio} />
	</div>

	<div class="card">
		<CardProject {...projects.portfolio} />
	</div>

	<div class="card">
		<CardProject {...projects.portfolio} />
	</div>

	<div class="card">
		<CardProject {...projects.portfolio} />
	</div>

	<div class="card">
		<CardProject {...projects.portfolio} />
	</div>
</div>

<!--CSS-->
<style>
	.container {
		--row: calc(50% - 3rem);
		padding: 1rem;
		width: 100%;
		height: 100%;
		background: var(--red);
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-rows: var(--row) var(--row);
	}

	div {
		width: 100%;
		height: 100%;
		background: var(--light-gray);
	}

	@media screen and (max-width: 75rem) {
		.container {
			overflow-y: scroll;
			display: block;
		}

		.card {
			margin-bottom: 1rem;
		}
	}
</style>
