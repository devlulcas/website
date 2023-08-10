<script lang="ts">
	import { locale } from '$/lib/i18n';
	import type { Bookmark } from '$/lib/server/bookmarks';

	export let bookmark: Bookmark;

	let description: string;

	$: {
		if ($locale === 'en') {
			description = bookmark.about.en || bookmark.about.ptBr;
		} else {
			description = bookmark.about.ptBr || bookmark.about.en;
		}
	}
</script>

<div class="h-full flex flex-col">
	<h3 class="text-xl font-bold text-card-foreground mb-2">
		{bookmark.name}
	</h3>

	<p class="text-muted-foreground">
		{description}
	</p>

	<ul class="flex gap-2 w-full flex-wrap-reverse mt-auto">
		{#each bookmark.tags as tag}
			<li class="px-2 py-1 bg-neutral-50 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-50 text-sm rounded">
				{tag}
			</li>
		{/each}
	</ul>
</div>
