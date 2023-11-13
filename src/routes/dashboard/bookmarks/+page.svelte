<script lang="ts">
  import Button from '$/lib/components/button/button.svelte';
  import { inputFieldClassNames } from '$/lib/components/input/styles.js';
  import { ArrowRight, BookmarkPlusIcon, FileEditIcon } from 'lucide-svelte';

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

<ul class="mt-8 w-full divide-y rounded border">
  {#each data.bookmarks as bookmark}
    <li class="flex flex-col gap-2 p-4">
      <div class="flex w-full justify-between">
        <h3 class="flex items-center gap-2 font-semibold text-brand-300">
          <a href={`/dashboard/bookmarks/${bookmark.resourceId}`} class="text-sm text-brand-300 hover:text-brand-500">
            <FileEditIcon size={16} />
            <span class="sr-only">Edit</span>
          </a>
          <span>{bookmark.name}</span>
        </h3>

        <div class="flex flex-wrap-reverse">
          {#each bookmark.tags as tag}
            <span class="rounded border bg-secondary px-2 py-1 text-xs text-secondary-foreground">
              {tag}
            </span>
          {/each}
        </div>
      </div>
      <hr />
      <p class="line-clamp-2">
        {bookmark.about.en}
      </p>
      <hr />
      <p class="line-clamp-2">
        {bookmark.about.ptBr}
      </p>

      <a
        class="ml-auto flex items-center gap-2 text-sm text-brand-300"
        href={bookmark.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to website <ArrowRight size={16} />
      </a>
    </li>
  {/each}
</ul>
