<script lang="ts">
	import unitedStatesOfAmericaSvg from '$/lib/assets/images/flags/en.svg';
	import brazilSvg from '$/lib/assets/images/flags/pt-br.svg';
	import { t } from '$/lib/i18n';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
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
		formaction="/?/setLocale&lang=en&redirectTo={$page.url.pathname}"
	>
		<img src={unitedStatesOfAmericaSvg} alt="USA Flag" class="h-4 w-4" />
	</button>

	<button
		title="Português brasileiro"
		class="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-none bg-transparent p-2 hover:bg-white/5"
		formaction="/?/setLocale&lang=pt&redirectTo={$page.url.pathname}"
	>
		<img src={brazilSvg} alt="Brazil flag" class="h-4 w-4" />
	</button>
</form>
