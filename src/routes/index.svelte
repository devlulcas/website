<!--JAVASCRIPT-->
<script>
	import CtaShortcut from '$lib/CtaShortcut.svelte';
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - HOME</title>
</svelte:head>

<!--BODY-->
<main>
	<div class="herobanner" />
	<section>
		<h1>Web/Mobile developer</h1>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, corrupti quis! Modi minima
			delectus doloribus autem dignissimos architecto quasi cupiditate iure facere non excepturi
			commodi, eveniet sint debitis impedit quo.
		</p>
		<CtaShortcut />
	</section>
</main>

<!--CSS-->
<style>
	main {
		height: 100vh;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}

	.herobanner {
		background: url('../../static/images/heroImage.jpg') center center;
		background-size: cover;
	}

	section {
		padding: 2vh 2vw;
	}

	h1 {
		text-align: center;
		font-size: calc(4vw + 2vh);
		color: transparent;
		background-image: url('../../static/images/heroImage.jpg');
		background-clip: text;
		mix-blend-mode: screen;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: saturate(400%) contrast(90%);
	}

	p {
		margin-top: 1vh;
		font-size: calc(1.3vh + 1.3vw);
	}
	@media screen and (min-width: 55rem) {
		main {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
		}

		section {
			padding: 3vh 4vw;
		}
		h1 {
			text-align: start;
		}
	}
</style>
