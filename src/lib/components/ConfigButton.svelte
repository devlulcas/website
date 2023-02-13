<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import '$lib/assets/styles/global.css';
	import { locale, t } from '$lib/i18n';
	import { Moon, Sun } from 'lucide-svelte';
	import { Settings2 } from 'lucide-svelte';

	// This is the function that will be called when the form is submitted
	// and will prevent the default form submission behavior
	// and instead change the language on the client-side
	const submitLang: SubmitFunction = ({ action }) => {
		$locale = action.searchParams.get('locale') ?? 'en';
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

	let closed = true;
</script>

<div class="relative flex items-center">
	<button
		aria-label={$t('common.config.config')}
		title={$t('common.config.config')}
		class="xl:hidden"
		on:click={() => {
			closed = !closed;
		}}
	>
		<Settings2 />
	</button>

	<div
		class="config absolute z-10 bg-white dark:bg-gray-800 bg-opacity-80 border border-gray-200 dark:border-gray-700 rounded-md shadow-md p-2"
		class:hidden={closed}
	>
		<form method="POST" use:enhance={submitTheme} class="flex gap-1">
			<button
				title={$t('common.config.lightMode')}
				class="bg-transparent border-none cursor-pointe px-2"
				formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}"
			>
				<Sun size={18} class="text-gray-900 dark:text-gray-500" />
			</button>
			<button
				title={$t('common.config.darkMode')}
				class="bg-transparent border-none cursor-pointer px-2"
				formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}"
			>
				<Moon size={18} class="text-gray-400 dark:text-gray-200" />
			</button>
		</form>

		<form method="POST" use:enhance={submitLang} class="flex gap-1 mt-2 md:mt-0">
			<button
				title="English"
				class:active-locale={$locale === 'en'}
				formaction="/?/setLang&locale=en&redirectTo={$page.url.pathname}"
			>
				🇺🇸
			</button>

			<button
				title="Português"
				class:active-locale={$locale === 'pt-BR'}
				formaction="/?/setLang&locale=pt-BR&redirectTo={$page.url.pathname}"
			>
				🇧🇷
			</button>
		</form>
	</div>
</div>

<style lang="postcss">
	button {
		@apply bg-transparent border-none cursor-pointer text-gray-500 px-2;
	}

	button:hover {
		@apply text-gray-700;
	}

	.active-locale {
		@apply bg-gray-700;
	}

	.config {
		top: calc(var(--header-height) + 2px);
		right: 2px;

		/* Tailwind XL media query */
		@media (min-width: 1280px) {
			position: relative;
			background-color: transparent;
			border: none;
			padding: 0;
			top: 0;
			right: 0;
			box-shadow: none;
			z-index: 0;
			display: flex;
			gap: 0.25rem;
			align-items: center;
			justify-content: flex-end;
		}
	}
</style>
