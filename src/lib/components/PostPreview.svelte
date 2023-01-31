<script lang="ts">
	import { t } from '$lib/i18n';
	import type { Post } from '../data/types';

	export let post: Post;
</script>

<article class="p-4 mb-4 bg-gray-50 dark:bg-gray-900 rounded shadow-lg">
	<h2 class="text-2xl mb-2 min-h-16 font-bold text-gray-900 dark:text-gray-100">
		<a href={post.url}>{post.title}</a>
	</h2>

	<p class="text-gray-700 dark:text-gray-300">{post.excerpt}</p>

	<p class="mt-4">
		<a class="text-brand-600 hover:text-brand-500" href={post.url}>
			{$t('common.readMore')}
		</a>
	</p>
</article>
