<script lang="ts">
	import Button from '$/lib/components/button/button.svelte';
	import { inputFieldClassNames } from '$/lib/components/input/styles.js';

	export let form;
</script>

{#if form}
	{#if form.success}
		<strong class="px-2 py-1 bg-green-500 border max-w-[300px] rounded shadow-lg text-green-50">
			Bookmark created!
		</strong>
	{:else}
		<strong class="px-2 py-1 bg-destructive border max-w-[300px] rounded shadow-lg text-destructive-foreground">
			{form.message}
		</strong>
	{/if}
{/if}

<form action="?/createBookmark" method="post">
	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="url">URL</label>
		<input class={inputFieldClassNames.input} type="url" name="url" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="title">Title</label>
		<input class={inputFieldClassNames.input} type="text" name="title" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="ptBrDescription">Description in Brazilian Portuguese</label>
		<input class={inputFieldClassNames.input} type="text" name="ptBrDescription" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="ptBrDescription">Description in English</label>
		<input class={inputFieldClassNames.input} type="text" name="enDescription" />
	</div>

	<Button class="mt-6" type="submit">Create Bookmark</Button>
</form>
