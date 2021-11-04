<!--JAVASCRIPT---->
<script>
	export let href = '/not_found';
	export let faIcon = '';
</script>

<!--HTML-->
<li>
	<a sveltekit:prefetch {href}>
		<i class={faIcon} />
		<slot />
	</a>
</li>

<!--CSS-->
<style>
	li {
		border-radius: 1.3rem;
		padding: 1rem;
		background: var(--white);
		width: 15rem;
	}

	a {
		display: flex;
		align-items: center;
		font-size: 2rem;
		font-weight: 600;
		color: var(--black);
		text-align: center;
		width: 100%;
		gap: 1rem;
	}

	@media screen and (max-width: 58rem) {
		li {
			width: 70%;
			padding: 2rem;
		}

		a {
			font-size: 2.5rem;
			gap: 2rem;
		}
	}
</style>
