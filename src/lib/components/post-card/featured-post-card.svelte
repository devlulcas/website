<script lang="ts">
  import type { PostMetadata } from '$/lib/server/posts/types';
  import PostData from './post-data.svelte';

  export let post: PostMetadata;
</script>

<svelte:head>
  <link rel="preload" href={post.cover} as="image" />
</svelte:head>

<a href="/blog/{post.slug}" class="w-full">
  <article class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
    <img
      class="col-span-3 h-full rounded-lg object-cover object-center lg:col-span-2"
      src={post.cover}
      alt={post.title}
    />

    <div class="lc-gradient col-span-3 rounded-lg p-[2px] lg:col-span-1">
      <section class="flex h-full flex-col rounded-md border bg-background p-3 shadow-lg">
        <PostData {post} showDescription />
      </section>
    </div>
  </article>
</a>
