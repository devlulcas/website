<script lang="ts">
  import Button from '$/lib/components/button/button.svelte';
  import { inputFieldClassNames } from '$/lib/components/input/styles';
  import { TagsIcon } from 'lucide-svelte';
  export let data;
  export let form;
</script>

<h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
  <TagsIcon />
  Tags
</h2>

<form action="?/createOrUpdateBookmarkTag" method="post" class="mb-6 flex flex-col gap-6 rounded border p-4">
  <h3 class="flex items-center gap-2 text-xl font-bold text-foreground">Add Bookmark Tag</h3>

  <div class={inputFieldClassNames.container}>
    <label class={inputFieldClassNames.label} for="name">Title</label>
    <input class={inputFieldClassNames.input} type="text" name="name" id="name" />
  </div>

  <Button class="mt-6" type="submit">Create Tag</Button>

  {#if form && form.bookmarkTag}
    {#if form.bookmarkTag.success}
      <strong class="block w-full rounded border bg-green-500 px-2 py-1 text-green-50 shadow-lg">
        Bookmark tag created!
      </strong>
    {:else}
      <strong class="block w-full rounded border bg-destructive px-2 py-1 text-destructive-foreground shadow-lg">
        {form.bookmarkTag.message}
      </strong>
    {/if}
  {/if}
</form>

<form action="?/createOrUpdateMicroblogTag" method="post" class="mb-6 flex flex-col gap-6 rounded border p-4">
  <h3 class="flex items-center gap-2 text-xl font-bold text-foreground">Add Microblog Tag</h3>

  <div class={inputFieldClassNames.container}>
    <label class={inputFieldClassNames.label} for="name">Title</label>
    <input class={inputFieldClassNames.input} type="text" name="name" id="name" />
  </div>

  <Button class="mt-6" type="submit">Create Tag</Button>

  {#if form && form.microblogTag}
    {#if form.microblogTag.success}
      <strong class="block w-full rounded border bg-green-500 px-2 py-1 text-green-50 shadow-lg">
        Microblog tag created!
      </strong>
    {:else}
      <strong class="block w-full rounded border bg-destructive px-2 py-1 text-destructive-foreground shadow-lg">
        {form.microblogTag.message}
      </strong>
    {/if}
  {/if}
</form>

<section class="grid w-full grid-cols-1 divide-y rounded border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
  <article class="p-4">
    <h3 class="mb-4 text-xl">Bookmarks Tags</h3>

    <ul class="flex flex-wrap gap-3">
      {#each data.bookmarkTags as tag}
        <li class="relative flex-1 rounded border bg-secondary px-2 py-1 text-secondary-foreground">
          <span class="line-clamp-1">
            {tag.name}
          </span>

          <span
            class="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded bg-brand-950 text-xs text-brand-500"
          >
            {tag.id}
          </span>
        </li>
      {/each}
    </ul>
  </article>

  <article class="p-4">
    <h3 class="mb-4 text-xl">Microblog Tags</h3>

    <ul class="flex flex-wrap gap-3">
      {#each data.microblogTags as tag}
        <li class="relative flex-1 rounded border bg-secondary px-2 py-1 text-secondary-foreground">
          <span class="line-clamp-1">
            {tag.name}
          </span>

          <span
            class="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded bg-brand-950 text-xs text-brand-500"
          >
            {tag.id}
          </span>
        </li>
      {/each}
    </ul>
  </article>
</section>
