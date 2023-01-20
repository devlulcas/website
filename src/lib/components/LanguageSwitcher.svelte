<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { locale, locales, t } from '$lib/i18n';
	import '$lib/assets/styles/global.css';
	import { page } from '$app/stores';
	import Button from './Button.svelte';

	const submitLang: SubmitFunction = ({ action }) => {
		$locale = action.searchParams.get('idiom') ?? 'en';
	};
</script>

<form method="POST" use:enhance={submitLang}>
	<Button formaction="/?/setLang&idiom=en&redirectTo={$page.url.pathname}">English</Button>
	<Button formaction="/?/setLang&idiom=pt-br&redirectTo={$page.url.pathname}">Português</Button>
</form>
