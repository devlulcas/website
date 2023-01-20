<script lang="ts">
	import Analytics from '$/lib/components/Analytics.svelte';
	import Header from '$/lib/components/Header.svelte';
	import '$lib/assets/styles/global.css';
</script>

<Header />

<slot />

<Analytics />
