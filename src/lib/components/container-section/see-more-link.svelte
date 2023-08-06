<script lang="ts">
	export let href: string;
	export let target: string = '_blank';
	export let rel: string = 'noopener noreferrer';
</script>

<a
	href="https://github.com/devlulcas"
	target="_blank"
	class="border mt-8 flex items-center gap-2 text-accent-foreground rounded-lg py-2 px-4"
>
	<slot name="start-icon" />

	<a {href} {target} {rel} class="flex-1">
		<slot />
	</a>

	<span class="ml-auto">
		<slot name="end-icon" />
	</span>
</a>
