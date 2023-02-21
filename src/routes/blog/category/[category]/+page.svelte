<script lang="ts">
	import PostPreview from '$/lib/components/PostPreview.svelte';
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import Seo from '$/lib/components/SEO.svelte';
	import { website } from '$/lib/config/website';
	import { Search } from 'lucide-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Seo
	seo={{
		title: 'Posts categories | ' + website.title,
		description: "Posts about web development, programming, and other topics I'm interested in.",
		url: `${website.url}/blog/category/${data.category}`
	}}
/>

<main>
	<SectionTitle icon={Search} title={`Postagens em "${data.category}"`} />

	{#each data.posts as post}
		<PostPreview {post} />
	{/each}
</main>
