<script lang="ts">
	import { locale } from '$/lib/i18n';
	import type { Bookmark } from '../data/types';

	export let bookmark: Bookmark;
</script>

<div class="card-info h-full">
	<div class="card-info-title h-full flex flex-col">
		<h3 class="text-xl font-bold dark:text-gray-100 text-gray-900">
			{bookmark.name}
		</h3>

		<p class="dark:text-gray-300 text-gray-700">
			{$locale === 'en'
				? bookmark.about.en || bookmark.about.ptBr
				: bookmark.about.ptBr || bookmark.about.en}
		</p>

		<ul class="flex gap-2 w-full flex-wrap-reverse mt-auto">
			{#each bookmark.tags as tag}
				<li
					class="px-2 py-1 bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-50 text-sm rounded-md"
				>
					{tag}
				</li>
			{/each}
		</ul>
	</div>
</div>
