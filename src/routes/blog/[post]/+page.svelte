<script lang="ts">
	import IconUimArrowUpRight from '$/lib/assets/icons/icon-uim-arrow-up-right.svelte';
	import BlogPostLayout from '$/lib/components/blog-post/blog-post-layout.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
	import type { PageData } from './$types';

	type Props = {
		data: PageData;
	};

	let { data }: Props = $props();
</script>

<SeoHead
	title={data.metadata.title}
	description={data.metadata.excerpt}
	image={data.metadata.cover}
	keywords={data.metadata.tags}
/>

<div class="bg-background text-foreground max-w-full px-4 pt-4 pb-8 lg:max-w-[100ch]">
	<BlogPostLayout>
		{@render data.component()}
	</BlogPostLayout>

	<ul class="not-prose mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each data.recommendations as recommendation}
			<li>
				<PostCard post={recommendation} />
			</li>
		{/each}
	</ul>
</div>

<div
	class="pointer-events-none sticky bottom-0 z-30 flex w-full items-center justify-end gap-4 px-2 py-2"
>
	<button
		class="lc-gradient lc-line group text-brand-50 pointer-events-auto flex h-10 items-center justify-center gap-2 rounded-xl rounded-br-sm opacity-25 transition-opacity hover:opacity-100 lg:w-fit lg:px-4"
		onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		<span class="sr-only font-semibold lg:not-sr-only"> Ir para o topo </span>
		<IconUimArrowUpRight class="tranform flex-shrink-0 rotate-45" />
	</button>
</div>
