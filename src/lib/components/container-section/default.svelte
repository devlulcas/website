<script lang="ts">
	type $$Props = { title: string; id: string; class?: string } | { class?: string };

	export let title = '';

	export let id = '';

	let className = '';
	export { className as class };
</script>

<section class="col-span-12 col-start-1 lg:col-span-8 lg:col-start-3 mt-12 {className}">
	{#if title && id}
		<a href="#{id}">
			<h2 {id} class="text-4xl font-bold text-foreground mb-4">{title}</h2>
		</a>
	{/if}

	<slot />
</section>
