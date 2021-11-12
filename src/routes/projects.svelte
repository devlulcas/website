<!--JAVASCRIPT-->
<script>
	import CardProject from '$lib/CardProject.svelte';

	const projects = {
		portfolio: {
			name: 'portfolio',
			description: 'This site',
			previewImage: {
				src: '/images/heroImage.jpg',
				description: 'my cool project'
			},
			urls: {
				liveUrl: 'https://devlulcas.github.io',
				codeUrl: 'https://github.com/devlulcas/devlulcas.github.io',
				moreInfoUrl: 'https://google.com'
			},
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
		<CardProject project={projects.portfolio} />
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
