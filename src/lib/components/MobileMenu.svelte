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
	class="z-40"
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
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: calc(100% - var(--header-height));
		padding: 1rem;
		background-color: hsl(0 0% 0% / 25%);
	}

	@media screen and (min-width: 90rem) {
		div {
			display: none;
		}
	}
</style>
