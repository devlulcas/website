<script lang="ts">
	import PostPreview from '$/lib/components/PostPreview.svelte';
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import { Search } from 'lucide-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<main>
	<SectionTitle icon={Search} title={`Postagens em "${data.category}"`} />

	{#each data.posts as post}
		<PostPreview {post} />
	{/each}
</main>
