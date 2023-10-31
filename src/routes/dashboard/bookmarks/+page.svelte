<script lang="ts">
	export let form;
</script>

{#if form}
	{#if form.supabaseErrorMessage}
		<strong class="p-2 bg-destructive text-destructive-foreground">
			{form.supabaseErrorMessage}
		</strong>
	{:else if form.success}
		<strong class="p-2 bg-green-500 text-green-50"> Bookmark created! </strong>
	{/if}
{/if}

<form action="?/createBookmark" method="post">
	<input type="text" name="url" placeholder="URL" />
	<input type="text" name="title" placeholder="Title" />
	<input type="text" name="ptBrDescription" placeholder="ptBrDescription" />
	<input type="text" name="enDescription" placeholder="enDescription" />
	<input type="submit" value="Create" />
</form>
