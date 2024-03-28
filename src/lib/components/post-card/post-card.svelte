<script lang="ts">
  import type { PostMetadata } from '$/lib/server/posts/types';
  import PostData from './post-data.svelte';

  export let post: PostMetadata;
  let className = '';
  export { className as class };
</script>

<svelte:head>
  <link rel="preload" href={post.cover} as="image" />
</svelte:head>

<a href="/blog/{post.slug}" class={className}>
  <article class="flex flex-col gap-2">
    <img class="w-full rounded-lg object-cover object-center" src={post.cover} alt={post.title} />

    <div class="flex flex-col gap-2 p-2 pt-0">
      <PostData {post} />
    </div>
  </article>
</a>
