<script lang="ts">
	import NavBar from '$lib/NavBar.svelte';
</script>

<NavBar />

<div class="body">
	<slot />
</div>

<style lang="scss">
	.body {
		--section-size: calc(100vh - var(--header-height));
		background: var(--primary-light);
		height: 400vh;
		display: grid;
		grid-template-rows: repeat(5, var(--section-size));
	}
</style>
