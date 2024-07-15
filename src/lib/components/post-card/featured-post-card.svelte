<script lang="ts">
  import type { PostMetadata } from '$/lib/server/posts/types';
  import PostData from './post-data.svelte';

  export let post: PostMetadata;
</script>

<svelte:head>
  <link rel="preload" href={post.cover} as="image" />
</svelte:head>

<article class="h-[450px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <a
    href="/blog/{post.slug}"
    class="col-span-3 h-full rounded-lg lg:col-span-2 overflow-hidden"
  >
    <img
      class="w-full h-full object-cover object-center"
      src={post.cover}
      alt={post.title}
      loading="lazy"
    />
  </a>

  <div class="lc-gradient col-span-3 rounded-lg p-[2px] lg:col-span-1">
    <section
      class="flex h-full flex-col rounded-md border bg-background p-3 shadow-lg"
    >
      <PostData {post} showDescription />
    </section>
  </div>
</article>
