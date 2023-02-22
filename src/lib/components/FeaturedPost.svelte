<script lang="ts">
	import { t } from '$lib/i18n';
	import { ArrowRight } from 'lucide-svelte';
	import type { Post } from '../data/types';

	export let post: Post;
</script>

<article
	class="flex flex-col md:flex-row-reverse mb-4 bg-gray-100 dark:bg-gray-900 rounded shadow-lg border-2 border-gray-200 dark:border-gray-800"
>
	<picture class="bg-gray-200 dark:bg-gray-800 rounded h-56 md:h-auto md:w-1/2 md:aspect-square">
		<img
			class="object-cover object-center w-full h-full rounded"
			loading="lazy"
			src={post.ogImage}
			alt={post.title}
		/>
	</picture>

	<div class="p-4 md:p-10 flex flex-col md:h-auto md:w-1/2">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
			<a href={post.url}>{post.title}</a>
		</h2>

		<p class="h-full text-gray-700 dark:text-gray-300">{post.excerpt}</p>

		<a
			class="lc-cta w-1/2 md:w-full h-9 md:h-12 mt-4 md:mt-0 flex gap-1 items-center text-white -translate-x-4 pl-4 md:-translate-x-10 md:pl-10 md:py-2 rounded-br-md rounded-tr-md"
			href={post.url}
		>
			<span>
				{$t('common.readMore')}
			</span>
			<ArrowRight size={16} />
		</a>
	</div>
</article>
