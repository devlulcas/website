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
	class="flex gap-1"
>
	<button
		title="English"
		class="bg-transparent border-none cursor-pointer p-2 rounded hover:bg-white/5"
		formaction="/?/setLocale&lang=en&redirectTo={$page.url.pathname}"
	>
		<img src={unitedStatesOfAmericaSvg} alt="USA Flag" class="w-4 h-4" />
	</button>

	<button
		title="Português brasileiro"
		class="bg-transparent border-none cursor-pointer p-2 rounded hover:bg-white/5"
		formaction="/?/setLocale&lang=pt&redirectTo={$page.url.pathname}"
	>
		<img src={brazilSvg} alt="Brazil flag" class="w-4 h-4" />
	</button>
</form>
