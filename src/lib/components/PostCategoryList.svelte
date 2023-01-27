<script lang="ts">
	export let categories: string[] = [];
</script>

<ul class="flex gap-2 my-5 flex-wrap">
	{#each categories as category}
		<li class="flex-1 min-w-fit">
			<a
				class="py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-sm flex items-center justify-center text-gray-500 dark:text-gray-300 hover:text-gray-700"
				href={'/blog/category/' + category}
			>
				{category}
			</a>
		</li>
	{/each}
</ul>
