<script lang="ts">
	import './code.css';
	import './posts.css';

	type Props = {
		as?: 'article' | 'section';
		children?: import('svelte').Snippet;
	};

	let { as = 'article', children }: Props = $props();
</script>

<svelte:element this={as} class="lc-post prose-lg prose-zinc dark:prose-invert max-w-none">
	{@render children?.()}
</svelte:element>
