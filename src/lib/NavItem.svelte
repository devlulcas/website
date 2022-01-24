<!--JAVASCRIPT---->
<script>
	import { page } from '$app/stores';
	export let external = false;
	export let href = '/not_found';
	export let faIcon = '';
</script>

<!--HTML-->
<li on:click>
	{#if !external}
		<a class:active={$page.path === href} sveltekit:prefetch {href}>
			<i class={faIcon} />
			<slot />
		</a>
	{:else}
		<a class:active={$page.path === href} {href} target="_blank" rel="noopener noreferrer">
			<i class={faIcon} />
			<slot />
		</a>
	{/if}
</li>

<!--CSS-->
<style>
	li {
		border-radius: 1.3rem;
		background: var(--white);
		min-width: 10rem;
	}

	a {
		display: flex;
		align-items: center;
		font-size: 2vh;
		font-weight: 600;
		color: var(--black);
		text-align: center;
		width: 100%;
		padding: 1rem;
		gap: 1rem;
	}

	.active {
		color: var(--green-mate);
	}

	@media screen and (max-width: 75rem) {
		li {
			width: 70%;
			padding: 1.5rem;
		}

		a {
			font-size: 2.5rem;
			gap: 2rem;
		}
	}
</style>
