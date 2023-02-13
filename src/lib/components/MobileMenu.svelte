<!-- TYPESCRIPT -->
<script lang="ts">
	import { fade } from 'svelte/transition';
	import { circOut } from 'svelte/easing';
	import NavItems from './NavItems.svelte';

	export let toggle: () => void;

	export let items: { label: string; href: string }[];
</script>

<!-- HTML -->
<div
	class="fixed bottom-0 left-0 flex flex-col justify-end w-full p-4 bg-gray-900 bg-opacity-25 z-40 xl:hidden"
	on:click={toggle}
	transition:fade={{ duration: 300, easing: circOut }}
	on:keydown={(event) => {
		if (event.key === 'Escape') toggle();
	}}
>
	<NavItems {items} />
</div>

<!-- STYLES - SCSS -->
<style>
	div {
		height: calc(100% - var(--header-height));
	}
</style>
