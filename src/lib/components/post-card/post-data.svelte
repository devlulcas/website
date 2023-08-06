<script lang="ts">
	import type { PostMetadata } from '$/lib/server/posts';
	import { ArrowRightIcon, DotIcon, HashIcon } from 'lucide-svelte';

	export let post: PostMetadata;
	export let showDescription = false;

	const i18nReleaseDate = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
</script>

<p class="flex items-center mt-2 text-md">
	<strong class="text-accent-foreground">
		{post.language.niceName}
	</strong>

	<DotIcon size={24} />

	<time class="text-muted-foreground" datetime={post.date}>
		{i18nReleaseDate}
	</time>
</p>

<h3 class="text-2xl font-bold line-clamp-2 h-[2lh] mb-2" title={post.title}>
	{post.title}
</h3>

{#if showDescription}
	<p class="mt-2 text-md text-muted-foreground h-[3lh] line-clamp-3">
		{post.excerpt}
	</p>
{/if}

<div class="flex gap-2 items-center flex-wrap group">
	<HashIcon size={16} class="text-muted-foreground group-hover:text-brand-600" />

	{#each post.categories as category}
		<a href="/blog/categories/{category}" class="text-sm text-muted-foreground hover:underline">
			{category}
		</a>
	{/each}
</div>

<footer class="flex justify-between items-center mt-auto">
	<p class="text-md text-muted-foreground">
		{post.readingTime} min read
	</p>

	<a href="/blog/{post.slug}" class="flex items-center gap-1">
		Read more
		<ArrowRightIcon size={18} class="tranform -rotate-45 " />
	</a>
</footer>
