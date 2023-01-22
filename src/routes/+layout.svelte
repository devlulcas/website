<script lang="ts">
	import Analytics from '$/lib/components/Analytics.svelte';
	import Header from '$/lib/components/Header.svelte';
	import '$lib/assets/styles/global.css';
</script>

<Header />

<div class="wrapper">
	<slot />
</div>

<Analytics />

<style lang="postcss">
	:global(.wrapper) {
		display: grid;
		grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
		grid-column-gap: 32px;
	}

	:global(.wrapper > *) {
		grid-column: 2;
	}

	:global(.full-bleed) {
		width: 100%;
		grid-column: 1 / -1;
	}
</style>
