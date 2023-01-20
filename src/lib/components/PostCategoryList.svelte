<script lang="ts">
	export let categories: string[] = [];
</script>

<ul class="flex gap-2 p-5">
	{#each categories as category}
		<li>
			<a
				class="py-2 px-3 bg-blue-50 rounded-sm flex items-center text-blue-500 hover:text-blue-700"
				href={'/blog/category/' + category}
			>
				{category}
			</a>
		</li>
	{/each}
</ul>
