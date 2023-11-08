<script lang="ts">
	import Button from '$/lib/components/button/button.svelte';
	import { inputFieldClassNames } from '$/lib/components/input/styles.js';
	import { BookmarkPlusIcon } from 'lucide-svelte';

	export let form;
</script>

<form action="?/createBookmark" method="post" class="flex flex-col gap-3">
	<h2 class="text-2xl font-bold text-foreground gap-2 flex items-center mb-4">
		<BookmarkPlusIcon />
		Add Bookmark
	</h2>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="url">URL</label>
		<input class={inputFieldClassNames.input} type="url" name="url" id="url" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="name">Title</label>
		<input class={inputFieldClassNames.input} type="text" name="name" id="name" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="ptBrDescription">Description in Brazilian Portuguese</label>
		<input class={inputFieldClassNames.input} type="text" name="ptBrDescription" id="ptBrDescription" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="enUsDescription">Description in English</label>
		<input class={inputFieldClassNames.input} type="text" name="enUsDescription" id="enUsDescription" />
	</div>

	<div class={inputFieldClassNames.container}>
		<label class={inputFieldClassNames.label} for="tags">Tags</label>
		<input class={inputFieldClassNames.input} type="text" name="tags" id="tags" />
	</div>

	<Button class="mt-6" type="submit">Create Bookmark</Button>

	{#if form}
		{#if form.success}
			<strong class="px-2 py-1 bg-green-500 border rounded shadow-lg block w-full text-green-50">
				Bookmark created!
			</strong>
		{:else}
			<strong class="px-2 py-1 bg-destructive border rounded shadow-lg block w-full text-destructive-foreground">
				{form.message}
			</strong>
		{/if}
	{/if}
</form>
