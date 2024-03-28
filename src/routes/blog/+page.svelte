<script lang="ts">
  import { availablePostCategories } from '$/lib/assets/config';
  import BlogPostSearchForm from '$/lib/components/blog-post-search-form/blog-post-search-form.svelte';
  import ContainerSection from '$/lib/components/container-section/default.svelte';
  import FeaturedPostCard from '$/lib/components/post-card/featured-post-card.svelte';
  import PostCard from '$/lib/components/post-card/post-card.svelte';
  import { t } from '$/lib/i18n';
  import customBlogDrawingSvg from '$lib/assets/images/blog.svg';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main class="lc-grid px-4 pb-8 lg:px-8">
  <ContainerSection>
    <div class="flex flex-col gap-1 lg:flex-row-reverse lg:py-12">
      <div class="w-full overflow-hidden">
        <img
          src={customBlogDrawingSvg}
          alt="a minimalist drawing of myself, in a simple cartoon style with some technologies names floating around"
          class="rotate-[20deg]"
        />
      </div>

      <section class="flex w-full flex-col justify-center">
        <h1 class="text-lg text-muted-foreground">{$t('blog.presentation')}</h1>

        <p class="mt-4 text-xl">
          {$t('blog.welcome')}
        </p>

        <ul class="mt-6 flex flex-wrap gap-3">
          {#each availablePostCategories as category}
            <li>
              <a
                href={`/blog/category/${category}`}
                class="rounded-md border-2 bg-card px-2 py-1 font-mono text-sm hover:bg-brand-400 hover:text-brand-900"
              >
                {category}
              </a>
            </li>
          {/each}
        </ul>

        <BlogPostSearchForm class="mt-12 lg:mt-40" />
      </section>
    </div>
  </ContainerSection>

  {#if data.featuredPost}
    <ContainerSection id="featured" title={$t('blog.featuredTitle')}>
      <FeaturedPostCard post={data.featuredPost} />
    </ContainerSection>
  {/if}

  <ContainerSection>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {#each data.posts as post}
        <PostCard {post} class="mb-8 rounded-md border p-2" />
      {/each}
    </div>
  </ContainerSection>
</main>
