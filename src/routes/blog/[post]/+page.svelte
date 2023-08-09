<script lang="ts">
	import BlogPostLayout from '$/lib/components/blog-post/blog-post-layout.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import { afterNavigate } from '$app/navigation';
	import { ArrowLeftIcon, ArrowUpIcon } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let goBackTo = '/blog';

	afterNavigate(({ from }) => {
		goBackTo = from?.url.pathname ?? '/blog';
	});
</script>

<div class="bg-background text-foreground max-w-full lg:max-w-[100ch] px-4 pt-4 pb-8">
	<img
		src={data.metadata.cover}
		alt={data.metadata.title}
		class="w-full h-auto aspect-[1200/630] object-cover rounded-lg mb-4"
	/>

	<BlogPostLayout>
		<svelte:component this={data.component} />
	</BlogPostLayout>

	<ul class="not-prose grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
		{#each data.recommendations as recommendation}
			<li>
				<PostCard post={recommendation} />
			</li>
		{/each}
	</ul>
</div>

<div
	class="flex items-center justify-between gap-4 px-2 py-2 sticky bottom-0 z-30 w-full pointer-events-none"
>
	<a
		class="px-4 py-2 lc-gradient text-brand-50 rounded-lg rounded-bl-sm flex items-center gap-2 pointer-events-auto"
		aria-label="Go back to posts"
		href={goBackTo}
	>
		<ArrowLeftIcon size={18} />
		Voltar
	</a>

	<button
		class="px-4 py-2 lc-gradient text-brand-50 rounded-lg rounded-br-sm flex items-center gap-2 pointer-events-auto"
		on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
	>
		Ir para o topo
		<ArrowUpIcon size={18} />
	</button>
</div>
