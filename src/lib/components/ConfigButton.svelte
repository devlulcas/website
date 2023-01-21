<script lang="ts">
	import LanguageSwitcher from './LanguageSwitcher.svelte';
	import ThemeSwitcher from './ThemeSwitcher.svelte';
	import { Wrench } from 'lucide-svelte';
	let show = false;

	function toggle() {
		show = !show;
	}
</script>

<div class="relative">
	<button
		on:click={toggle}
		class="text-gray-500 hover:text-gray-600 p-1 rounded inline-flex items-center"
	>
		<Wrench size={18} />
	</button>

	<div
		class:open={show}
		class="z-50 right-0 absolute top-11 flex flex-col gap-1 p-1 dark:bg-gray-500 bg-gray-300 rounded-sm"
	>
		<ThemeSwitcher />
		<LanguageSwitcher />
	</div>
</div>

<style>
	.open {
		display: none;
	}
</style>
