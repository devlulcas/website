<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';

	import { page } from '$app/stores';

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

<form method="POST" use:enhance={submitTheme}>
	<button formaction="/?/setTheme&theme=light&redirectTo={$page.url.pathname}">Light</button>
	<button formaction="/?/setTheme&theme=dark&redirectTo={$page.url.pathname}">Dark</button>
</form>
