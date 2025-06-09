<script lang="ts">
	import type { Blog } from '$lib/server/blogs/types/blog';

	type Props = {
		blog: Blog;
	};

	let { blog }: Props = $props();
	let isHovered = $state(false);
	let imageState = $state<'loading' | 'loaded' | 'error'>('loading');
</script>

<a
	href={blog.url}
	target="_blank"
	rel="noopener noreferrer"
	class="group relative block overflow-hidden rounded-lg bg-card p-4 transition-all duration-300 hover:shadow-lg"
	onmouseenter={() => (isHovered = true)}
	onmouseleave={() => (isHovered = false)}
>
	<div class="relative aspect-video w-full overflow-hidden rounded-lg">
		{#if !blog.metadata?.image || imageState === 'error'}
			<div class="flex h-full w-full items-center justify-center bg-muted">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-muted-foreground"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</div>
		{:else}
			<img
				src={blog.metadata.image}
				alt={blog.metadata.title || blog.name}
				class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				onload={() => (imageState = 'loaded')}
				onerror={() => (imageState = 'error')}
			/>
		{/if}
	</div>

	<div class="mt-4 space-y-2">
		<h3 class="line-clamp-2 text-lg font-semibold tracking-tight">
			{blog.metadata?.title || blog.name}
		</h3>

		{#if blog.metadata?.description}
			<p class="line-clamp-2 text-sm text-muted-foreground">
				{blog.metadata.description}
			</p>
		{/if}

		{#if blog.metadata?.siteName}
			<p class="text-xs text-muted-foreground">{blog.metadata.siteName}</p>
		{/if}

		{#if blog.tags.length > 0}
			<div class="flex flex-wrap gap-2 pt-2">
				{#each blog.tags as tag}
					<span
						class="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>

	<div
		class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
	></div>
</a>
