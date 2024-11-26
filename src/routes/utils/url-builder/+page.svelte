<script lang="ts">
  import Button from '$/lib/components/button/button.svelte';
  import { TrashIcon } from 'lucide-svelte';

  let initialUrl = 'https://lucasalvesrego.com';

  type SearchParam = [string, string | string[]];

  let searchParams: SearchParam[] = [];

  function addSearchParam() {
    searchParams = [...searchParams, ['', '']];
  }

  function removeSearchParam(index: number) {
    searchParams = searchParams.filter((_, i) => i !== index);
  }

  function updateSearchParam(
    index: number,
    key: string,
    value: string | string[]
  ) {
    searchParams = searchParams.map((param, i) =>
      i === index ? [key, value] : param
    );
  }

  let copyToClipboardStatus = {
    status: 'idle',
    message: '',
  };

  async function copyToClipboard() {
    try {
      copyToClipboardStatus = {
        status: 'loading',
        message: 'Copying to clipboard...',
      };

      await navigator.clipboard.writeText(url);

      copyToClipboardStatus = {
        status: 'success',
        message: 'Copied to clipboard!',
      };
    } catch (error) {
      copyToClipboardStatus = {
        status: 'failure',
        message: 'Failed to copy to clipboard!',
      };
    } finally {
      setTimeout(() => {
        copyToClipboardStatus = {
          status: 'idle',
          message: '',
        };
      }, 5000);
    }
  }

  function toSearchParamString([key, value]: SearchParam) {
    const searchParam = new URLSearchParams();

    if (Array.isArray(value)) {
      value.forEach((v) => searchParam.append(key, v));
    } else {
      searchParam.append(key, value);
    }

    return searchParam.toString();
  }

  $: searchParamsString = searchParams.map(toSearchParamString).join('&');

  $: url = `${initialUrl}${searchParamsString ? `?${searchParamsString}` : ''}`;
</script>

<div id="main-content" class="min-h-[--view-height] py-8">
  <div class="flex flex-col container">
    <h1 class="text-4xl font-bold text-primary mb-4">URL Builder</h1>

    <div class="flex gap-2">
      <input
        type="text"
        placeholder="Initial URL"
        class="w-full rounded-lg border bg-background p-2 text-foreground"
        bind:value={initialUrl}
      />
    </div>

    <div class="flex flex-col gap-2 mt-2">
      {#each searchParams as [key, value], i}
        <div class="flex gap-2">
          <input
            type="text"
            placeholder="Key"
            class="w-full rounded-lg border bg-background p-2 text-foreground"
            bind:value={key}
            on:input={() => updateSearchParam(i, key, value)}
          />
          <input
            type="text"
            placeholder="Value"
            class="w-full rounded-lg border bg-background p-2 text-foreground"
            bind:value
            on:input={() => updateSearchParam(i, key, value)}
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            class="flex-shrink-0"
            on:click={() => removeSearchParam(i)}
          >
            <TrashIcon />
          </Button>
        </div>
      {/each}
    </div>

    <Button
      type="button"
      variant="outline"
      class="mt-2"
      on:click={addSearchParam}
    >
      Add search param
    </Button>

    <div class="flex gap-2 mt-2">
      <input
        type="text"
        class="flex-1 p-2 border rounded-lg text-primary bg-input"
        value={url}
        readonly
      />

      <Button type="button" on:click={copyToClipboard}>
        Copy to clipboard
      </Button>
    </div>

    {#if copyToClipboardStatus.status === 'loading'}
      <p class="text-primary mt-2">{copyToClipboardStatus.message}</p>
    {:else if copyToClipboardStatus.status === 'success'}
      <p class="text-green-500 mt-2">{copyToClipboardStatus.message}</p>
    {:else if copyToClipboardStatus.status === 'failure'}
      <p class="text-red-500 mt-2">{copyToClipboardStatus.message}</p>
    {/if}
  </div>
</div>
