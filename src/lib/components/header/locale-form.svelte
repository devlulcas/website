<script lang="ts">
	import unitedStatesOfAmericaSvg from '$/lib/assets/images/flags/en.svg';
	import brazilSvg from '$/lib/assets/images/flags/pt-br.svg';
	import { locale, t } from '$/lib/i18n';
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import type { SubmitFunction } from '@sveltejs/kit';

	const submitTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}

		action.searchParams.append('doNotRedirect', 'true');
	};
</script>

<form
	title={$t('common.header.languages')}
	use:enhance={submitTheme}
	method="POST"
	class="flex h-full w-fit gap-1"
>
	<button
		title="English"
		class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-none bg-transparent p-2 hover:bg-white/5"
		formaction="/?/setLocale&lang=en&redirectTo={page.url.pathname}"
	>
		<img
			src={unitedStatesOfAmericaSvg}
			alt="USA Flag"
			class="h-5 w-5 rounded-full {$locale === 'en' ? 'border-brand-600 border-2 p-[1px]' : ''}"
		/>
	</button>

	<button
		title="Português brasileiro"
		class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-none bg-transparent p-2 hover:bg-white/5"
		formaction="/?/setLocale&lang=pt&redirectTo={page.url.pathname}"
	>
		<img
			src={brazilSvg}
			alt="Brazil flag"
			class="h-5 w-5 rounded-full {$locale === 'pt' ? 'border-brand-600 border-2 p-[1px]' : ''}"
		/>
	</button>
</form>
