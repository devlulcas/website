<script lang="ts">
	type Props = {
		href: string;
		title: string;
		children?: import('svelte').Snippet;
	};

	let { href, title, children }: Props = $props();
</script>

<a
	class="border-foreground/25 bg-foreground/10 hover:bg-foreground/25 rounded-full border p-4"
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{title}
>
	{@render children?.()}
</a>
