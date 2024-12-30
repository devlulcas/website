<script lang="ts">
	import type { PostMetadata } from '$/lib/server/posts/types';
	import PostData from './post-data.svelte';

	type Props = {
		post: PostMetadata;
	};

	let { post }: Props = $props();
</script>

<svelte:head>
	<link rel="preload" href={post.cover} as="image" />
</svelte:head>

<article class="flex flex-col gap-2">
	<a href="/blog/{post.slug}">
		<img class="w-full rounded-lg object-cover object-center" src={post.cover} alt={post.title} />
	</a>

	<div class="flex flex-col gap-2 p-2 pt-0">
		<PostData {post} />
	</div>
</article>
