<script lang="ts">
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="lc-grid px-4 lg:px-8 pb-8 min-h-[--view-height]">
	<ContainerSection id="title" title="Results for {data.category}">
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<PostCard {post} class="mb-8 border rounded-md p-2" />
			{/each}
		</div>
	</ContainerSection>
</main>
