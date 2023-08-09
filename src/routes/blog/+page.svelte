<script lang="ts">
	import { availablePostCategories } from '$/lib/assets/config';
	import BlogPostSearchForm from '$/lib/components/blog-post-search-form/blog-post-search-form.svelte';
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import FeaturedPostCard from '$/lib/components/post-card/featured-post-card.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import customBlogDrawingSvg from '$lib/assets/images/blog.svg';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="lc-grid px-4 lg:px-8 pb-8">
	<ContainerSection>
		<div class="flex flex-col lg:flex-row-reverse lg:py-12 gap-1">
			<div class="w-full overflow-hidden">
				<img
					src={customBlogDrawingSvg}
					alt="a minimalist drawing of myself, in a simple cartoon style with some technologies names floating around"
					class="rotate-[20deg]"
				/>
			</div>

			<section class="w-full flex flex-col justify-center">
				<h1 class="text-lg text-muted-foreground">Hi! This is my blog.</h1>

				<p class="text-xl mt-4">
					Welcome to my blog! I'm a software developer and I like to write about my experiences.
				</p>

				<ul class="flex flex-wrap gap-3 mt-6">
					{#each availablePostCategories as category}
						<li>
							<a
								href={`/blog/category/${category}`}
								class="px-2 py-1 text-sm font-mono border-2 rounded-md bg-card hover:bg-brand-400 hover:text-brand-900"
							>
								{category}
							</a>
						</li>
					{/each}
				</ul>

				<BlogPostSearchForm class="mt-12 lg:mt-40" />
			</section>
		</div>
	</ContainerSection>

	{#if data.featuredPost}
		<ContainerSection id="featured" title="Featured post">
			<FeaturedPostCard post={data.featuredPost} />
		</ContainerSection>
	{/if}

	<ContainerSection>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<PostCard {post} class="mb-8 border rounded-md p-2" />
			{/each}
		</div>
	</ContainerSection>
</main>
