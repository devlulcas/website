<script lang="ts">
  import Button from '$/lib/components/button/button.svelte';
  import { inputFieldClassNames } from '$/lib/components/input/styles.js';
  import { PenIcon } from 'lucide-svelte';

  export let form;
  export let data;
</script>

<form action="?/createMicroblog" method="post" class="flex flex-col gap-6">
  <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
    <PenIcon />
    Add Microblog
  </h2>

  <div class={inputFieldClassNames.container}>
    <label class={inputFieldClassNames.label} for="title">Title</label>
    <input class={inputFieldClassNames.input} type="text" name="title" id="title" />
  </div>

  <div class={inputFieldClassNames.container}>
    <label class={inputFieldClassNames.label} for="rawContent">Markdown</label>
    <textarea class={inputFieldClassNames.input} name="rawContent" id="rawContent" />
  </div>

  <div class="flex flex-wrap gap-2">
    {#each data.tags as tag}
      <label class="flex gap-2 rounded border px-2 py-1" for="tags-{tag.id}">
        <input type="checkbox" value={tag.id} name="tags" id="tags-{tag.id}" class="accent-brand-500" />
        {tag.name}
      </label>
    {/each}
  </div>

  <Button class="mt-6" type="submit">Create Microblog</Button>

  {#if form}
    {#if form.success}
      <strong class="block w-full rounded border bg-green-500 px-2 py-1 text-green-50 shadow-lg">
        Microblog created!
      </strong>
    {:else}
      <strong class="block w-full rounded border bg-destructive px-2 py-1 text-destructive-foreground shadow-lg">
        {form.message}
      </strong>
    {/if}
  {/if}
</form>
