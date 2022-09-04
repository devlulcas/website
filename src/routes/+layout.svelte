<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<NavBar />

<div class="body">
	<slot />
</div>

<style lang="scss">
	.body {
		--section-size: calc(100vh - var(--header-height));
		background: var(--primary-light);
		display: grid;
		grid-template-rows: repeat(4, var(--section-size));
	}
</style>
