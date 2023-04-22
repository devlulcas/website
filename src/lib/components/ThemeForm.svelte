<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import { t } from '$lib/i18n';
	import { Moon, Sun } from 'lucide-svelte';

	// This is the function that will be called when the form is submitted
	// and will prevent the default form submission behavior
	// and instead change the theme on the client-side
	// If the client is not able to change the theme, the form will be submitted
	const submitTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}

		action.searchParams.append('doNotRedirect', 'true');
	};
</script>

<form use:enhance={submitTheme} method="POST" class="flex gap-1">
	<button
		title={$t('common.config.lightMode')}
		class="bg-transparent border-none cursor-pointer p-2 rounded hover:bg-white/5"
		formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}"
	>
		<Sun size={18} class="text-gray-900 dark:text-gray-500" />
	</button>

	<button
		title={$t('common.config.darkMode')}
		class="bg-transparent border-none cursor-pointer p-2 rounded hover:bg-white/5"
		formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}"
	>
		<Moon size={18} class="text-gray-400 dark:text-gray-200" />
	</button>
</form>
