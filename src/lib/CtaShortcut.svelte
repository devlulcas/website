<!--HTML-->
<nav aria-label="shortcuts to contact and projects">
	<div>
		<a sveltekit:prefetch href="/contact">Let's talk</a>
	</div>
	<p>or</p>
	<div>
		<a sveltekit:prefetch href="/projects">maybe first see what I've done</a>
	</div>
</nav>

<!--CSS-->
<style>
	nav {
		display: flex;
		justify-content: center;
		gap: 2ch;
	}

	a {
		width: fit-content;
		position: relative;
		font-size: 2vh;
		color: var(--blue);
	}

	a::after {
		content: '';
		display: block;
		width: 0;
		height: 0.2rem;
		background: var(--blue);
		position: absolute;
		transition: all 0.4s ease-in-out;
	}

	div:hover a::after {
		width: 100%;
	}

	p {
		font-size: 2vh;
	}

	@media screen and (min-width: 75rem) {
		nav {
			margin-top: 7rem;
		}
		a, p {
			font-size: 2rem;
		}
	}
</style>
