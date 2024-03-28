<script lang="ts">
  import { t } from '$/lib/i18n';
  import { SearchIcon } from 'lucide-svelte';

  let className = '';
  export { className as class };
</script>

<form class="flex w-full flex-col gap-2 {className}" action="/blog/search" method="GET">
  <label class="sr-only" for="search-blog-post">{$t('blog.search')}</label>

  <div class="lc-gradient w-full overflow-hidden rounded-lg p-[2px]">
    <div class="flex items-center overflow-hidden rounded-md focus-within:outline">
      <input
        type="search"
        id="search-blog-post"
        name="search"
        placeholder={$t('blog.search')}
        class="w-full bg-background p-2 outline-none"
      />

      <button title="Search" type="submit" class="bg-background p-2 outline-none focus:bg-transparent">
        <SearchIcon class="h-6 w-6" />
      </button>
    </div>
  </div>
</form>
