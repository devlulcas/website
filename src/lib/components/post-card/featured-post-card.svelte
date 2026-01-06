<script lang="ts">
	import type { PostMetadata } from '$/lib/server/posts/types/post-metadata';
	import PostData from './post-data.svelte';

	type Props = {
		post: PostMetadata;
	};

	let { post }: Props = $props();
</script>

<svelte:head>
	<link rel="preload" href={post.cover} as="image" />
</svelte:head>

<article class="grid h-[490px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
	<a href="/blog/{post.slug}" class="col-span-3 h-full overflow-hidden rounded-lg lg:col-span-2">
		<img
			class="h-full w-full object-cover object-center"
			src={post.cover}
			alt={post.title}
			loading="lazy"
		/>
	</a>

	<div class="lc-gradient col-span-3 rounded-lg p-[2px] lg:col-span-1">
		<section class="bg-background flex h-full flex-col rounded-md border p-3 shadow-lg">
			<PostData {post} featured />
		</section>
	</div>
</article>
