<script lang="ts">
  import BlogPostLayout from '$/lib/components/blog-post/blog-post-layout.svelte';
  import { t } from '$/lib/i18n';
  import { EyeIcon, SproutIcon } from 'lucide-svelte';
  export let data;
</script>

<main class="container min-h-[--view-height] py-4">
  <h2 class="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
    <SproutIcon />
    {$t('microblog.title')}
  </h2>

  <p class="mb-4 text-lg text-muted-foreground">
    {$t('microblog.about')}
  </p>

  {#if data.microblogPosts.length}
    <ul class="flex flex-col gap-2">
      {#each data.microblogPosts as microblogPost}
        <li >
          <article class="rounded-md border p-4 shadow-sm transition-shadow duration-200 hover:shadow-md bg-secondary text-secondary-foreground">
            <header class="flex items-center justify-between">
              <h3 class="text-xl font-bold">{microblogPost.title}</h3>
              <div class="flex items-center gap-2">
                <time datetime={microblogPost.createdAt.toUTCString()}>
                  {microblogPost.createdAt.toLocaleDateString('en', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>

                <span>
                  {microblogPost.language === 'pt-br' ? '🇧🇷' : '🇺🇸'}
                </span>
              </div>
            </header>
            <BlogPostLayout as="section">
              <!--eslint-disable-next-line svelte/no-at-html-tags-->
              {@html microblogPost.htmlContent}
            </BlogPostLayout>
          </article>
        </li>
      {/each}
    </ul>
  {:else}
    <div class="flex h-96 flex-col items-center justify-center gap-4 text-center">
      <EyeIcon class="mx-auto h-32 w-32 text-muted-foreground" />
 
      <p class="text-lg text-muted-foreground">
        {$t('microblog.empty')}
      </p>
    </div>
  {/if}
</main>
