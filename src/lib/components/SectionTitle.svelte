<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
	export let title: string;
	export let icon: any;

	const { class: className } = $$props;
</script>

<svelte:element
	this={as}
	class={`flex gap-2 py-4 uppercase items-center text-2xl font-black text-gray-700 dark:text-gray-200 ${className}`}
>
	<svelte:component this={icon} />
	<span>{title}</span>
</svelte:element>
