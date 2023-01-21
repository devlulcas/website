<script lang="ts">
	import type { Bookmark } from '../data/types';

	export let bookmark: Bookmark;
</script>

<a
	class="max-w-sm max-h-full h-80 border-gray-300 border-2 rounded-md p-2 flex flex-col gap-2"
	href={bookmark.url}
>
	<h2 class="text-lg font-semibold">{bookmark.name}</h2>

	<p class="text-md h-full">{bookmark.about}</p>

	<ul class="flex gap-1 flex-wrap">
		{#each bookmark.tags as tag}
			<li class="px-1 py-0.5 rounded-sm text-xs font-semibold text-gray-600 bg-gray-200">
				{tag}
			</li>
		{/each}
	</ul>
</a>
