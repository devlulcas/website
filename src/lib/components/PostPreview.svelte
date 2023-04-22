<script lang="ts">
	import { t } from '$lib/i18n';
	import type { FullPostMetadata } from '../data/posts/types';

	export let post: FullPostMetadata;
</script>

<article class="p-4 mb-4 bg-gray-50 dark:bg-gray-900 rounded shadow-lg">
	<h2 class="text-2xl mb-2 min-h-16 font-bold text-gray-900 dark:text-gray-100">
		<a href={post.url}>{post.title}</a>

		<span class="absolute text-xs text-gray-500 dark:text-gray-400 ml-2">
			{post.lang === 'en' ? 'EN-US' : 'PT-BR'}
		</span>
	</h2>

	<p class="text-gray-700 dark:text-gray-300">{post.excerpt}</p>

	<p class="mt-4">
		<a class="text-sm uppercase text-brand-600 hover:text-brand-500" href={post.url}>
			{$t('common.readMore')}
		</a>
	</p>
</article>
