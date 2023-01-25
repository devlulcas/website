<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { Wrench } from 'lucide-svelte';
	import { onMount } from 'svelte';
	let hide = true;
	let parent: HTMLElement | null = null;

	function toggle() {
		hide = !hide;
	}

	function closeOnOutsideClick(event: MouseEvent) {
		const el = event.target as HTMLElement;

		console.log('el', parent, el);

		if (!hide) {
			const isChild = parent?.contains(el);

			if (!isChild) {
				hide = true;
			}
		}
	}
</script>

<svelte:window on:click={closeOnOutsideClick} />

<div bind:this={parent} class="relative">
	<button
		on:click={toggle}
		class="text-gray-500 hover:text-gray-600 p-1 rounded inline-flex items-center"
	>
		<Wrench size={18} />
	</button>

	<div
		class:closed={hide}
		class="z-50 right-0 absolute top-11 flex flex-col gap-1 p-1 dark:bg-gray-800 bg-gray-50 rounded-sm"
	>
		<ThemeSwitcher />
		<LanguageSwitcher />
	</div>
</div>

<style lang="postcss">
	.closed {
		display: none;
	}
</style>
