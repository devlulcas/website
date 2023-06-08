<script lang="ts">
	import FeaturedPost from '$/lib/components/FeaturedPost.svelte';
	import PostCategoryList from '$/lib/components/PostCategoryList.svelte';
	import PostPreview from '$/lib/components/PostPreview.svelte';
	import SectionTitle from '$/lib/components/SectionTitle.svelte';
	import Seo from '$/lib/components/SEO.svelte';
	import { website } from '$/lib/config/website';
	import { t } from '$/lib/i18n';
	import { Newspaper, Tag } from 'lucide-svelte';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<Seo
	seo={{
		title: 'Posts | ' + website.title,
		description: "Posts about web development, programming, and other topics I'm interested in.",
		url: `${website.url}/blog`
	}}
/>

<section class="max-w-3xl py-2 space-y-2">
	<SectionTitle as="h2" title={data.featuredPost.title} icon={Newspaper} />

	<FeaturedPost post={data.featuredPost} />
</section>

<section>
	<SectionTitle as="h3" title={$t('posts.titles.postCategories')} icon={Tag} />
	<PostCategoryList categories={data.categories} />
</section>

<section class="max-w-3xl py-8 space-y-8">
	<SectionTitle as="h2" title={$t('posts.titles.recentPosts')} icon={Newspaper} />

	{#each data.posts as post}
		<PostPreview {post} />
	{/each}
</section>
