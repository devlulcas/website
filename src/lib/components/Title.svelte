<script lang="ts">
	export let id: string;
</script>

<h2 {id}>
	<slot />
</h2>

<style lang="scss">
	h2 {
		font-size: 3rem;
		color: var(--secondary);
		text-align: center;
		padding-top: 2rem;
		font-weight: 900;
	}
</style>
