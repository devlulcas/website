<!--JAVASCRIPT-->
<script>
	export let animate = false;
</script>

<!--HTML-->
<button on:click>
	<div class:animate />
	<div class:animate />
	<div class:animate />
</button>

<!--CSS-->
<style>
	button {
		background-color: transparent;
	}

	@media screen and (min-width: 75rem) {
		button {
			display: none;
		}
	}

	div {
		width: 4rem;
		height: 0.4rem;
		border-radius: 0.25rem;
		background-color: var(--white);
		margin-bottom: 0.7rem;
		transition: 0.2s;
	}

	div ~ :last-child {
		margin-bottom: 0;
	}

	.animate:nth-child(1) {
		transform: rotate(-45deg) translate(-1rem, 1rem);
	}

	.animate:nth-child(2) {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
	}

	.animate:nth-child(3) {
		transform: rotate(45deg) translate(-1rem, -1rem);
	}
</style>
