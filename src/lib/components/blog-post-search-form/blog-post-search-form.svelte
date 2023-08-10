<script lang="ts">
	import { SearchIcon } from 'lucide-svelte';

	let className = '';
	export { className as class };
</script>

<form class="w-full flex gap-2 flex-col {className}" action="/blog/search" method="GET">
	<label class="sr-only" for="search-blog-post">Search blog post</label>

	<div class="w-full p-[2px] overflow-hidden rounded-lg lc-gradient">
		<div class="flex items-center rounded-md focus-within:outline overflow-hidden">
			<input
				type="search"
				id="search-blog-post"
				name="search"
				placeholder="Search blog post"
				class="p-2 bg-background w-full outline-none"
			/>

			<button title="Search" type="submit" class="p-2 bg-background focus:bg-transparent outline-none">
				<SearchIcon class="w-6 h-6" />
			</button>
		</div>
	</div>
</form>
