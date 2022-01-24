<!--JAVASCRIPT-->
<script>
	export let techs = [];
</script>

<!--HTML-->
<ul>
	{#each techs as tech}
		<li>{tech}</li>
	{/each}
</ul>

<!--CSS-->
<style>
	ul:hover {
		opacity: 1;
	}

	ul {
		opacity: 0;
		transition: opacity ease 0.5s;
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-around;
		position: absolute;
		z-index: 1;
		bottom: 0;
	}

	li {
		border: 0.1rem solid var(--black);
		background: var(--white);
		margin: 1rem;
		height: fit-content;
		flex-grow: 1;
		text-align: center;
		color: var(--black);
		padding: 1rem 2rem;
		font-size: 1.5rem;
		border-radius: 2rem;
		text-transform: uppercase;
		font-weight: 600;
	}

	@media screen and (max-width: 75rem) {
		li {
			font-size: 1rem;
		}
	}
</style>
