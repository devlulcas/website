<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Post } from '../data/types';

	export let post: Post;
</script>

<article
	class="flex flex-col md:flex-row-reverse mb-4 bg-gray-100 dark:bg-gray-900 rounded shadow-lg border-2 border-gray-200 dark:border-gray-800"
>
	<picture class="bg-gray-200 dark:bg-gray-800 rounded h-60 md:h-auto md:w-1/2 md:aspect-square" />

	<div class="p-10 md:aspect-square md:w-1/2 flex-1">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100">
			<a href={post.url}>{post.title}</a>
		</h2>

		<p class="text-gray-700 dark:text-gray-300 mb-12">{post.excerpt}</p>

		<p>
			<a class="text-blue-500 hover:text-blue-700" href={post.url}>
				{$t('common.readMore')}
			</a>
		</p>
	</div>
</article>
