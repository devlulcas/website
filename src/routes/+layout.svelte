<script lang="ts">
	import Analytics from '$/lib/components/Analytics.svelte';
	import Header from '$/lib/components/Header.svelte';
	import '$lib/assets/styles/global.css';
</script>

<div class="bg-white dark:bg-slate-900 min-h-screen">
	<Header />

	<slot />
</div>

<Analytics />
