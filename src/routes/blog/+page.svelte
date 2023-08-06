<script lang="ts">
	import { AVAILABLE_POST_CATEGORIES } from '$/lib/assets/config';
	import ContainerSection from '$/lib/components/container-section/default.svelte';
	import FeaturedPostCard from '$/lib/components/post-card/featured-post-card.svelte';
	import PostCard from '$/lib/components/post-card/post-card.svelte';
	import { SearchIcon } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="lc-grid px-4 lg:px-8 pb-8">
	<ContainerSection>
		<div class="flex flex-col lg:flex-row-reverse lg:py-12 gap-1">
			<div class="w-full overflow-hidden">
				<img src="/blog.svg" alt="Blog" height={1000} class="rotate-[20deg]" />
			</div>

			<section class="w-full flex flex-col justify-center">
				<h1 class="text-lg text-muted-foreground">Hi! This is my blog.</h1>

				<p class="text-xl mt-4">
					Welcome to my blog! I'm a software developer and I like to write about my experiences.
				</p>

				<ul class="flex flex-wrap gap-3 mt-6">
					{#each AVAILABLE_POST_CATEGORIES as category}
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

				<form class="w-full flex gap-2 flex-col mt-12 lg:mt-40" action="/blog/search" method="GET">
					<label class="sr-only" for="search-blog-post"> Search blog post </label>

					<div class="w-full p-[2px] overflow-hidden rounded-lg lc-cta">
						<div class="flex items-center rounded-md focus-within:outline overflow-hidden">
							<input
								type="search"
								id="search-blog-post"
								name="search"
								placeholder="Search blog post"
								class="p-2 bg-background w-full outline-none"
							/>

							<button
								title="Search"
								type="submit"
								class="p-2 bg-background focus:bg-transparent outline-none"
							>
								<SearchIcon class="w-6 h-6" />
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>
	</ContainerSection>

	<ContainerSection id="featured" title="Featured post">
		<FeaturedPostCard post={data.featuredPosts[0]} />
	</ContainerSection>

	<ContainerSection>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.posts as post}
				<PostCard {post} class="mb-8 border rounded-md p-2" />
			{/each}
		</div>
	</ContainerSection>
</main>
