<!--JAVASCRIPT-->
<script>
	import CtaShortcut from '$lib/CtaShortcut.svelte';

	const icons = [
		'html5',
		'css3-alt',
		'js-square',
		'node-js',
		'android',
		'linux',
		'figma',
		'git-alt'
	];
</script>

<!--HEAD-->
<svelte:head>
	<title>DEVLULCAS - HOME</title>
</svelte:head>

<!--BODY-->
<main>
	<div class="herobanner">
		{#each icons as icon}
			<div class="tile"><i class="fab fa-{icon}" /></div>
		{/each}
		<div class="tile"><span>kotlin</span></div>
	</div>
	<section>
		<div class="content-container">
			<h1>Web/Mobile developer</h1>
			<p>
				Hello there, my name is Lucas. I'm mainly a web developer, but I'm also really interested in
				mobile development (especially native android). Besides code I also really enjoy doing
				craftsmanship and studying random topics.
			</p>
		</div>
		<CtaShortcut />
	</section>
</main>

<!--CSS-->
<style>
	main {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}

	.herobanner {
		background: url('/images/heroImage.jpg') center center;
		background-size: cover;
		height: 100%;
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
		background-color: hsla(0, 0%, 100%, 0.25);
		backdrop-filter: blur(4rem) saturate(300%);
		opacity: 0;
		transition: opacity 0.3s ease 0.4s;
	}

	.tile:hover {
		opacity: 1;
		transition: opacity 0.2s ease;
	}
	section {
		height: 85%;
		padding: 2vh 3vw;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
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
		font-size: calc(4vw + 3vh);
		color: transparent;
		background-image: url('/images/heroImage.jpg');
		background-clip: text;
		mix-blend-mode: screen;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: saturate(400%) contrast(90%);
	}

	p {
		margin-top: 3vh;
		font-size: calc(1.3vh + 1.3vw);
	}
	@media screen and (min-width: 75rem) {
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
