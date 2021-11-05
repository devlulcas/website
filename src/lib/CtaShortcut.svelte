<!--HTML-->
<nav>
	<div>
		<a sveltekit:prefetch href="/contact">Let's talk</a>
	</div>
	<p>or</p>
	<div>
		<a sveltekit:prefetch href="/projects">first see what I've done</a>
	</div>
</nav>

<!--CSS-->
<style>
	nav {
		margin: 10vh 0;
		display: flex;
		justify-content: center;
		gap: 1rem;
	}

	a {
		width: fit-content;
		position: relative;
		font-size: 1.3rem;
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
		font-size: 1.3rem;
	}
</style>
