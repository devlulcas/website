import type { Handle } from '@sveltejs/kit';

// This hook is called on every request
export const handle: Handle = async ({ event, resolve }) => {
	let theme: string | null = null;

	const newTheme = event.url.searchParams.get('theme');

	const actualTheme = event.cookies.get('theme');

	if (newTheme && newTheme !== actualTheme) {
		theme = newTheme;
	} else if (actualTheme) {
		theme = actualTheme;
	}

	if (!theme) return await resolve(event);

	// Changes the theme attribute on the <html> element
	return await resolve(event, {
		transformPageChunk: ({ html }) => {
			return html.replace('data-theme=""', `data-theme="${theme}"`);
		}
	});
};
