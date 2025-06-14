<script lang="ts">
	import ContainerSection from '$lib/components/container-section/default.svelte';
	import { t } from '$lib/i18n';
	import { GenericSearchStore } from '$lib/stores/generic-search.svelte';
	import SeoHead from '$lib/components/seo-head/seo-head.svelte';
	import type { PageServerData } from './$types';
	import BlogCard from '$lib/components/blog-card/blog-card.svelte';

	type Props = {
		data: PageServerData;
	};

	let { data }: Props = $props();

	// Search
	const searchStore = new GenericSearchStore(data.blogs);
</script>

<SeoHead title="Recommendations" />

<main id="main-content" class="lc-grid min-h-[--view-height] px-4 pb-8 lg:px-8">
	<ContainerSection id="blogs" title={$t('recommendations.blogs.title')}>
		<p class="mb-4 text-lg text-muted-foreground">
			{data.blogs.length}
			{$t('recommendations.blogs.title')}
		</p>

		<div class="lc-gradient w-full rounded-lg p-[2px] ring-brand-500 focus-within:ring-2">
			<label class="sr-only" for="search-blog">Search blog</label>
			<input
				placeholder="Search blog"
				class="flex w-full items-center rounded-md bg-background p-2 outline-none"
				id="search-blog"
				name="search"
				type="text"
				bind:value={searchStore.query}
			/>
		</div>

		{#if searchStore.filtered.length === 0}
			<p class="mt-4 text-lg text-muted-foreground">
				{$t('recommendations.blogs.noResults')}
			</p>
		{/if}

			<div class="lc-card-grid min-h-[--view-height]">
			{#each searchStore.filtered as blog}
				<BlogCard {blog} />
			{/each}
		</div>
	</ContainerSection>
</main>

<style lang="postcss">
	.lc-card-grid {
		margin-top: 2rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 1rem;
	}
</style>
