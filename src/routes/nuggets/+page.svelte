<script lang="ts">
  import NuggetContainer from '$/lib/components/nugget-container/nugget-container.svelte';
  import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
  import { LucideDot } from 'lucide-svelte';

  export let data;
</script>

<SeoHead title="Nuggets" description="Pedacinhos de conhecimento" />

<main id="main-content" class="min-h-[--view-height]">
  <div class="container">
    {#each data.nuggets as nugget}
      {@const title = nugget.slug.replaceAll('-', ' ')}
      <article class="py-4 grid grid-cols-1 lg:grid-cols-2 gap-2 relative">
        <div
          style="top: calc(var(--header-height) + 1rem)"
          class="border rounded-lg h-fit w-full lc-svg-pattern lg:sticky left-0"
        >
          <img
            class="object-cover lg:aspect-square h-auto w-full rounded-lg transition-all duration-300 ease-in-out"
            src={nugget.image}
            alt={title}
          />
        </div>

        <div class="flex flex-col md:flex-row-reverse w-full lc-content">
          <div
            class="relative flex flex-col justify-start md:items-center lc-tab"
          >
            <div
              class="w-fit md:absolute top-0 left-full md:rotate-90 origin-top-left h-10"
            >
              <p
                class="font-serif translate-y-[1x] italic text-nowrap h-10 w-fit flex items-center justify-center px-3 rounded-t-lg border border-b-2 border-b-background"
              >
                {title}
                <LucideDot size={16} />
                {nugget.language.niceName}
                <LucideDot size={16} />
                {nugget.year}
              </p>
            </div>
          </div>
          <div
            class="border rounded-lg rounded-tl-none md:rounded-tr-none md:rounded-tl-lg p-6 lc-text"
          >
            <NuggetContainer>
              {@html nugget.content}
            </NuggetContainer>
          </div>
        </div>
      </article>
    {/each}
  </div>
</main>

<style>
  .lc-svg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cg fill='%23ffffff32' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h4v4H0V0zm4 4h4v4H4V4z'/%3E%3C/g%3E%3C/svg%3E");
  }

  @media (min-width: 768px) {
    .lc-content {
      --tab-width: calc(2.5rem - 1px);
      --text-width: calc(100% - var(--tab-width));
    }

    .lc-text {
      width: calc(100% - var(--tab-width));
    }

    .lc-tab {
      width: var(--tab-width);
    }
  }
</style>
