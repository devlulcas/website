<script lang="ts">
	import { locale, t } from '$/lib/i18n';
	import type { PostMetadata } from '$/lib/server/posts/types/post-metadata';
	import { faArrowRight, faCircle, faHashtag } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	type Props = {
		post: PostMetadata;
		featured?: boolean;
	};

	let { post, featured = false }: Props = $props();

	let i18nReleaseDate = $derived(
		new Date(post.date).toLocaleDateString($locale === 'pt' ? 'pt-BR' : 'en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	);
</script>

<p class="text-md mt-2 flex items-center">
	<strong class="text-accent-foreground">
		{post.language.niceName}
	</strong>

	<Fa icon={faCircle} class="mx-2 size-2" />

	<time class="text-muted-foreground" datetime={post.date}>
		{i18nReleaseDate}
	</time>
</p>

<h3
	class="mb-2 line-clamp-2 {featured ? 'mt-3 text-6xl font-black' : 'h-[2lh] text-2xl font-bold'}"
	title={post.title}
>
	{post.title}
</h3>

{#if featured}
	<p class="text-md mt-2 line-clamp-3 h-[3lh] text-muted-foreground">
		{post.excerpt}
	</p>
{/if}

<div class="group flex flex-wrap items-center gap-2">
	<Fa icon={faHashtag} class="text-muted-foreground group-hover:text-brand-600" />

	{#each post.categories as category}
		<a href="/blog/categories/{category}" class="text-sm text-muted-foreground hover:underline">
			{category}
		</a>
	{/each}
</div>

<footer class="mt-auto flex items-center justify-between">
	<p class="text-md text-muted-foreground">
		{post.readingTime}
		{$t('common.posts.timeToRead')}
	</p>

	<a href="/blog/{post.slug}" class="flex items-center gap-1">
		{$t('common.posts.seeMore')}
		<Fa icon={faArrowRight} class="tranform size-4 -rotate-45" />
	</a>
</footer>
