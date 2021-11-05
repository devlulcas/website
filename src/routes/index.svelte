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
	<div class="herobanner">
		<div class="tile"><i class="fab fa-html5" /></div>
		<div class="tile"><i class="fab fa-css3-alt" /></div>
		<div class="tile"><i class="fab fa-js-square" /></div>
		<div class="tile"><i class="fab fa-node-js" /></div>
		<div class="tile"><i class="fab fa-android" /></div>
		<div class="tile"><i class="fab fa-linux" /></div>
		<div class="tile"><i class="fab fa-figma" /></div>
		<div class="tile"><i class="fab fa-git-alt" /></div>
		<div class="tile"><span>kotlin</span></div>
	</div>
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
		display: grid;
		gap: 1rem;
		padding: 1rem;
		grid-template-rows: 1fr 1fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;
	}

	.tile {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 0.3rem;
		border: 0.08rem solid hsla(0, 0%, 100%, 0.25);
		background-color: hsla(0, 0%, 100%, 0.15);
		backdrop-filter: blur(1rem);
		opacity: 0;
		transition: opacity 0.3s ease 0.4s;
	}

	.tile:hover {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
	section {
		padding: 2vh 2vw;
	}

	i,
	span {
		color: var(--white);
		font-size: 5rem;
	}

	span {
		font-size: 3.5rem;
		font-weight: 600;
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

		.herobanner {
			padding-bottom: 13.5vh;
		}
		section {
			padding: 3vh 4vw;
		}
		h1 {
			text-align: start;
		}
	}
</style>
