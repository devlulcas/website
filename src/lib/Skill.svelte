<!--TS-->
<script lang="ts">
	export let name: string;
</script>

<!--HTML-->
<article>
	<strong>{name.toUpperCase()}</strong>
</article>

<!--CSS-->
<style lang="scss">
	article {
		border-radius: 1rem;
		height: min(17vh, 20vw);
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 1/1;
		background: var(--secondary);
		border: 0.1rem solid var(--on-primary);

		@media screen and (max-width: 70rem) {
			height: max-content;
			padding: 3vw;
		}
	}
</style>
