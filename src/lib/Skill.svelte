<script lang="ts">
	export let name: string;
</script>

<article>
	<strong>{name.toUpperCase()}</strong>
</article>

<style lang="postcss">
	article {
		border-radius: 1rem;
		min-width: 8rem;
		width: min(25vh, 25vw);
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1/1;
		background: var(--secondary);
		border: 0.1rem solid var(--on-primary);

		@media screen and (max-width: 70rem) {
			flex: 0 0 20%;
		}
	}
</style>
