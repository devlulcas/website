<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import '$lib/assets/styles/global.css';
	import { locale } from '$lib/i18n';
	import { Moon, Sun } from 'lucide-svelte';
	import Button from './Button.svelte';

	// This is the function that will be called when the form is submitted
	// and will prevent the default form submission behavior
	// and instead change the language on the client-side
	const submitLang: SubmitFunction = ({ action }) => {
		$locale = action.searchParams.get('idiom') ?? 'en';
	};

	// This is the function that will be called when the form is submitted
	// and will prevent the default form submission behavior
	// and instead change the theme on the client-side
	// If the client is not able to change the theme, the form will be submitted
	const submitTheme: SubmitFunction = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};

	let whatTheme = 'light';
</script>

<div class="flex gap-1">
	<form method="POST" use:enhance={submitTheme} class="flex gap-1">
		<button
			class:active={whatTheme === 'light'}
			formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}"
		>
			<Sun />
		</button>
		<button
			class:active={whatTheme === 'dark'}
			formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}"
		>
			<Moon />
		</button>
	</form>

	<form method="POST" use:enhance={submitLang} class="flex gap-1">
		<button
			class:active-locale={$locale === 'en'}
			formaction="/?/setLang&idiom=en&redirectTo={$page.url.pathname}"
		>
			🇺🇸
		</button>

		<button
			class:active-locale={$locale === 'pt-BR'}
			formaction="/?/setLang&idiom=pt-br&redirectTo={$page.url.pathname}"
		>
			🇧🇷
		</button>
	</form>
</div>

<style lang="postcss">
	button {
		@apply bg-transparent border-none cursor-pointer text-gray-500 px-2;
	}

	button:hover {
		@apply text-gray-700;
	}

	.active {
		@apply text-gray-700;
	}

	.active-locale {
		@apply bg-gray-700;
	}
</style>
