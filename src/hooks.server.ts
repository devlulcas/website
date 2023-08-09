import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// * Theme event handler, gets the data from the event and then return the user theme
const themeHookHandle: Handle = ({ event, resolve }) => {
	const newTheme = event.url.searchParams.get('theme');
	const currentTheme = event.cookies.get('theme');
	const selectedTheme = newTheme || currentTheme || 'dark';
	const theme = selectedTheme === 'dark' ? 'dark' : 'light';

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replace('data-theme', `data-theme="${theme}"`);
			return html;
		}
	});
};

// * i18n event handler, gets the data from the event and then return the user language
const i18nHookHandle: Handle = ({ event, resolve }) => {
	const acceptLanguageHeader = event.request.headers.get('accept-language');

	// Get the default language from the browser
	const defaultLanguage = acceptLanguageHeader?.split(',')[0].split('-')[0];
	const newLanguageSetting = event.url.searchParams.get('lang');
	const currentLanguageSetting = event.cookies.get('lang');

	// ! Debug
	console.table({
		defaultLanguage,
		newLanguageSetting,
		currentLanguageSetting
	});

	// Pick language by priority
	const selectedLang = newLanguageSetting || currentLanguageSetting || defaultLanguage || 'en';

	const lang = selectedLang === 'pt' ? 'pt' : 'en';

	// Set in the cookie the language
	event.cookies.set('lang', lang);

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replace('lang', `lang="${lang}"`);
			return html;
		}
	});
};

export const handle: Handle = sequence(themeHookHandle, i18nHookHandle);
