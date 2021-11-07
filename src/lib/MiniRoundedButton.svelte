<!--JAVASCRIPT-->
<script>
	export let href;
	export let label;
	export let icon;
</script>

<!--HTML-->
<a aria-label={label} {href} target="_blank" rel="noopener noreferrer">
	<i class={icon} />
</a>

<!--CSS-->
<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
		font-size: 1.5rem;
		color: var(--white);
		background: var(--black);
		border: 0.4rem solid var(--black);
		box-shadow: 0.1rem var(--black);
		transition: 0.5s;
	}

	a:hover {
		color: var(--yellow);
		border: 0.4rem solid var(--yellow);
	}

	@media screen and (min-width: 55rem) {
		a {
			height: 6rem;
			width: 6rem;
			font-size: 2rem;
		}
	}
</style>
