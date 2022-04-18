<!--JAVASCRIPT-->
<script lang="ts">
	export let techs: string[];
</script>

<!--HTML-->
<ul>
	{#each techs as tech}
		<li>{tech}</li>
	{/each}
</ul>

<!--CSS-->
<style lang="postcss">
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

		&:hover {
			opacity: 1;
		}
	}

	li {
		border: 0.1rem solid var(--primary-dark);
		background: var(--on-primary);
		margin: 1rem;
		height: fit-content;
		flex-grow: 1;
		text-align: center;
		color: var(--primary-dark);
		padding: 1rem 2rem;
		font-size: 1.5rem;
		border-radius: 2rem;
		text-transform: uppercase;
		font-weight: 600;

		@media screen and (max-width: 75rem) {
			font-size: 1rem;
		}
	}
</style>
