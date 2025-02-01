<script lang="ts">
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import SeoHead from '$/lib/components/seo-head/seo-head.svelte';

	let { data } = $props();
</script>

<SeoHead title={`Blog::${data.category}`} />

<main id="main-content" class="lc-grid min-h-[--view-height] px-4 pb-8 lg:px-8">
	<ContainerSection id="title" title="Results for {data.category}">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<PostCard {post} />
			{/each}
		</div>
	</ContainerSection>
</main>
