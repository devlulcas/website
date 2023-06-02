<script lang="ts">
	import { page } from '$app/stores';
	import error from '$lib/assets/images/error.gif';
</script>

<main
	class="max-h-[--screen] overflow-hidden flex flex-col items-center justify-center flex-1 w-full px-4 py-8 mx-auto space-y-8 max-w-7xl sm:px-6 lg:px-8"
>
	<h2 class="text-4xl font-bold text-center text-gray-800 dark:text-gray-100">
		{$page.status} - {$page.error?.message}
	</h2>
</main>

<img
	class="fixed w-screen h-screen opacity-20 z-[-1]"
	loading="lazy"
	src={error}
	alt={$page.status.toString()}
/>
