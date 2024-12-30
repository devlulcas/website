<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		href: string;
		target?: string;
		rel?: string;
		startIcon?: Snippet;
		endIcon?: Snippet;
		children: Snippet;
	};

	const defaultProps = {
		href: 'https://github.com/devlulcas',
		target: '_blank',
		rel: 'noopener noreferrer'
	};

	let props: Props = $props();

	const href = $derived(props.href || defaultProps.href);
	const target = $derived(props.target || defaultProps.target);
	const rel = $derived(props.rel || defaultProps.rel);
</script>

<a
	{href}
	{target}
	{rel}
	class="mt-8 flex items-center gap-2 rounded-lg border px-4 py-2 text-accent-foreground"
>
	{@render props.startIcon?.()}

	<span class="flex-1">
		{@render props.children?.()}
	</span>

	<span class="ml-auto">
		{@render props.endIcon?.()}
	</span>
</a>
