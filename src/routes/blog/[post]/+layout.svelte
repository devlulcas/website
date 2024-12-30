<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<main id="main-content" class="relative flex min-h-[--view-height] w-full flex-col items-center">
	{@render children()}
</main>
