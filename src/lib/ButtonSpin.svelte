<!--JAVASCRIPT-->
<script>
	export let href;
	export let label;
</script>

<!--HTML-->
<a aria-label={label} class="more-info" {href} title={label}>
	<i class="fas fa-ellipsis-h" />
</a>

<!--CSS-->
<style>
	a,
	i {
		color: var(--black);
	}

	i {
		width: 1ch;
	}

	.more-info {
		font-size: 5rem;
		width: 6rem;
		height: 6rem;
		border-radius: 50%;
		background: var(--white);
		border: 0.2rem solid var(--black);
		box-shadow: 0 0.5rem var(--black);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-right: 0;
		transition: transform 0.3s;
	}

	.more-info:hover {
		transform: scale(1.1);
	}

	.more-info:hover i {
		transform: rotate(360deg);
		color: var(--black);
	}

	.more-info i {
		margin-right: 0;
		transition: transform 1s;
	}
</style>
