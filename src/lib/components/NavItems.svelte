<script lang="ts">
	import { fly } from 'svelte/transition';
	import { circOut } from 'svelte/easing';

	export let items: { label: string; href: string }[];
</script>

<nav
	class="text-gray-600 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 xl:bg-transparent xl:dark:bg-transparent flex flex-col gap-4 p-4 rounded-md xl:flex-row xl:justify-center w-full xl:gap-8 xl:p-0"
	transition:fly={{ duration: 300, y: 64, opacity: 0, easing: circOut }}
>
	{#each items as item}
		{#if item.href.startsWith('http')}
			<a href={item.href} target="_blank" rel="noopener noreferrer">
				{item.label}
			</a>
		{:else}
			<a href={item.href}>{item.label}</a>
		{/if}
	{/each}
</nav>
