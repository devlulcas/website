<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { locale, locales, t } from '$lib/i18n';
	import '$lib/assets/styles/global.css';
	import { page } from '$app/stores';

	const submitLang: SubmitFunction = ({ action }) => {
		$locale = action.searchParams.get('idiom') ?? 'en';
	};
</script>

<form method="POST" use:enhance={submitLang}>
	<button formaction="/?/setLang&idiom=en&redirectTo={$page.url.pathname}">English</button>
	<button formaction="/?/setLang&idiom=pt-br&redirectTo={$page.url.pathname}">Português</button>
</form>
