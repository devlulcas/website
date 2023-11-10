<script lang="ts">
  import Button from '$/lib/components/button/button.svelte';
  import { inputFieldClassNames } from '$/lib/components/input/styles.js';
  import { BookmarkPlusIcon, FileEditIcon } from 'lucide-svelte';

  export let form;
  export let data;
</script>

<form action="?/createBookmark" method="post" class="flex flex-col gap-6">
  <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
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

  <div class="flex flex-wrap gap-2">
    {#each data.tags as tag}
      <label class="flex gap-2 rounded border px-2 py-1" for="tags">
        <input type="checkbox" value={tag.id} name="tags" id="tags" class="accent-brand-500" />
        {tag.name}
      </label>
    {/each}
  </div>

  <Button class="mt-6" type="submit">Create Bookmark</Button>

  {#if form}
    {#if form.success}
      <strong class="block w-full rounded border bg-green-500 px-2 py-1 text-green-50 shadow-lg">
        Bookmark created!
      </strong>
    {:else}
      <strong class="block w-full rounded border bg-destructive px-2 py-1 text-destructive-foreground shadow-lg">
        {form.message}
      </strong>
    {/if}
  {/if}
</form>

<table class="mt-8 w-full rounded border">
  <thead class="bg-secondary text-secondary-foreground">
    <tr>
      <th scope="col" class="px-6 py-4 text-left"> Name </th>
      <th scope="col" class="px-6 py-4 text-left"> URL </th>
      <th scope="col" class="px-6 py-4 text-left"> Edit </th>
    </tr>
  </thead>
  <tbody>
    {#each data.bookmarks as bookmark}
      <tr class="border-b">
        <td class="px-6 py-4">
          {bookmark.name}
        </td>
        <td class="w-full px-6 py-4">
          {bookmark.url}
        </td>
        <td class="px-6 py-4">
          <a
            class="flex h-10 w-fit items-center gap-2 rounded bg-secondary p-2 text-secondary-foreground"
            href="/dashboard/bookmakrs/{bookmark.resourceId}"
          >
            <FileEditIcon size={18} /> Editar
          </a>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
