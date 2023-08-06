<script lang="ts">
	import type { PostMetadata } from '$/lib/server/posts';
	import PostData from './post-data.svelte';

	export let post: PostMetadata;
</script>

<svelte:head>
	<link rel="preload" href={post.cover} as="image" />
</svelte:head>

<a href="/blog/{post.slug}" class="w-full">
	<article class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		<img
			class="col-span-3 lg:col-span-2 rounded-lg object-cover object-center h-full"
			src={post.cover}
			alt={post.title}
		/>

		<div class="col-span-3 lg:col-span-1 p-[2px] lc-cta rounded-lg">
			<section class="bg-background rounded-md h-full shadow-lg p-3 border flex flex-col">
				<PostData {post} showDescription />
			</section>
		</div>
	</article>
</a>
