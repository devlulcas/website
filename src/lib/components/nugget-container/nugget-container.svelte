<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../blog-post/code.css';

	type Props = {
		children: Snippet;
	};

	let { children }: Props = $props();
</script>

<div
	style="--code-font-size: 0.8rem"
	class="prose-sm dark:prose-invert prose-h1:text-lg prose-a:no-underline"
>
	{@render children?.()}
</div>
