<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import Button from './Button.svelte';

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
</script>

<form method="POST" use:enhance={submitTheme} class="flex flex-col md:flex-row gap-1">
	<Button formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}">Light</Button>
	<Button formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}">Dark</Button>
</form>
