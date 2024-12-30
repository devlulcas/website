<script lang="ts">
	type Props = {
		title?: string;
		id?: string;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let { title = '', id = '', class: className = '', children }: Props = $props();
</script>

<section class="col-span-12 col-start-1 mt-12 lg:col-span-8 lg:col-start-3 {className}">
	{#if title && id}
		<a href="#{id}">
			<h2 {id} class="mb-4 text-4xl font-bold text-foreground">{title}</h2>
		</a>
	{/if}

	{@render children?.()}
</section>
