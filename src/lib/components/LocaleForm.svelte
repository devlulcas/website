<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import { locale } from '$lib/i18n';

	// This is the function that will be called when the form is submitted
	// and will prevent the default form submission behavior
	// and instead change the language on the client-side
	const submitLang: SubmitFunction = ({ action }) => {
		$locale = action.searchParams.get('locale') ?? 'en';

		action.searchParams.append('doNotRedirect', 'true');
	};

	$: flag = `/icons/flags/${$locale === 'en' ? 'en' : 'pt-br'}.svg`;

	$: submitTo = () => {
		const idiom = $locale === 'en' ? 'pt-br' : 'en';
		return `/?/setLang&locale=${idiom}&redirectTo=${$page.url.pathname}`;
	};
</script>

<form use:enhance={submitLang} method="POST" class="flex gap-1 mt-2 md:mt-0">
	{#if $locale === 'en'}
		<input type="hidden" name="locale" value="pt-br" />
	{:else}
		<input type="hidden" name="locale" value="en" />
	{/if}

	<button
		type="submit"
		formaction={submitTo()}
		aria-label={$locale === 'en' ? 'Português' : 'English'}
		class="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
	>
		<img
			src={flag}
			title={$locale}
			alt={$locale}
			width={24}
			height={24}
			decoding="async"
			loading="lazy"
			style="aspect-ratio: auto {24} / {24};"
		/>
	</button>
</form>
