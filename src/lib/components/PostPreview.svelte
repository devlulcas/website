<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Post } from '../data/types';

	export let post: Post;
</script>

<article
	class="p-4 mb-4 bg-gray-100 dark:bg-gray-900 rounded shadow-lg border-2 border-gray-200 dark:border-gray-800"
>
	<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
		<a href={post.url}>{post.title}</a>
	</h2>
	<p class="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
	<p>
		<a class="text-blue-500 hover:text-blue-700" href={post.url}>
			{$t('common.readMore')}
		</a>
	</p>

	<ul class="flex gap-2 flex-wrap mt-5">
		{#each post.categories as category}
			<li>
				<a
					class="py-1 dark:bg-gray-800 text-gray-500 hover:text-gray-700"
					href={'/blog/category/' + category}
				>
					{category}
				</a>
			</li>
		{/each}
	</ul>
</article>
