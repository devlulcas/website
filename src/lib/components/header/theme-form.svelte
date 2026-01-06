<script lang="ts">
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

<form use:enhance={submitTheme} method="POST" class="flex h-full min-w-fit gap-1">
	<button
		title={$t('common.header.themes.light')}
		class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-none bg-transparent p-2 hover:bg-white/5"
		formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}"
	>
		☀️️
	</button>

	<button
		title={$t('common.header.themes.dark')}
		class="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border-none bg-transparent p-2 hover:bg-white/5"
		formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}"
	>
		🌕
	</button>
</form>
