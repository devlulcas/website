<script lang="ts">
	import Analytics from '$/lib/components/Analytics.svelte';
	import Footer from '$/lib/components/Footer.svelte';
	import Header from '$/lib/components/Header.svelte';
	import PageProgress from '$/lib/components/PageProgress.svelte';
	import PageTransition from '$/lib/components/PageTransition.svelte';
	import '$lib/assets/styles/global.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<PageProgress />

<Header />

<PageTransition pathname={data.pathname}>
	<div class="wrapper min-h-[--screen]">
		<slot />
	</div>
</PageTransition>

<Footer />

<Analytics />

<style lang="postcss">
	:global(.wrapper) {
		display: grid;
		grid-template-columns: 1fr min(70ch, calc(100% - 64px)) 1fr;
		grid-column-gap: 32px;
		overflow-x: hidden;
		overflow-y: hidden;
	}

	:global(.wrapper > *) {
		grid-column: 2;
	}

	:global(.full-bleed) {
		width: 100%;
		grid-column: 1 / -1;
	}
</style>
