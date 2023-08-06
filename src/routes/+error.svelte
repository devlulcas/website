<script lang="ts">
	import { page } from '$app/stores';
</script>

<main
	class="min-h-[--safe-area-view-height] flex flex-col items-center justify-center w-full px-4 py-8 gap-12"
>
	<img loading="lazy" src="/error.gif" alt={$page.status.toString()} />

	<h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
		{$page.status} - {$page.error?.message}
	</h2>

	<a
		href="/"
		class="px-4 py-2 text-lg font-bold text-center text-white transition-all duration-300 bg-brand-500 rounded-md shadow-md hover:bg-brand-700"
	>
		Go back home
	</a>
</main>
