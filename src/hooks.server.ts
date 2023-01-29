import type { Handle } from '@sveltejs/kit';

// This hook is called on every request
export const handle: Handle = async ({ event, resolve }) => {
	const newLocale = event.url.searchParams.get('locale');

	const actualLocale = event.cookies.get('locale');

	let locale: string | null = null;

	if (newLocale && newLocale !== actualLocale) {
		locale = newLocale;
	} else if (actualLocale) {
		locale = actualLocale;
	}

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
			return html
				.replace('data-theme=""', `data-theme="${theme}"`)
				.replace('%lang%', locale || 'pt-BR');
		}
	});
};
