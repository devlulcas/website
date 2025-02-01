<script lang="ts">
	import errorGif from '$/lib/assets/images/error.gif';
	import SeoHead from '$/lib/components/seo-head/seo-head.svelte';
	import { t } from '$/lib/i18n';
	import { page } from '$app/stores';
</script>

<SeoHead />

<main
	class="flex min-h-[--view-height] w-full flex-col items-center justify-center gap-12 px-4 py-8"
>
	<img loading="lazy" src={errorGif} alt={$page.status.toString()} />

	<h2 class="text-center text-4xl font-bold text-gray-800 dark:text-gray-100">
		{$page.status} - {$page.error?.message}
	</h2>

	<a
		href="/"
		class="lc-background rounded-md bg-brand-700 px-4 py-2 text-center text-lg font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-700"
	>
		{$t('common.goBackHome')}
	</a>
</main>
