<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a
	class="p-4 bg-foreground/10 hover:bg-foreground/25 rounded-full border border-foreground/25"
	{href}
	target="_blank"
	rel="noopener noreferrer"
	{title}
>
	<slot />
</a>
