import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// * Theme event handler, gets the data from the event and then return the user theme
const themeHookHandle: Handle = ({ event, resolve }) => {
	let theme: 'dark' | 'light' = 'dark';

	try {
		const newTheme = event.url.searchParams.get('theme');
		const currentTheme = event.cookies.get('theme');
		const selectedTheme = newTheme || currentTheme || 'dark';
		theme = selectedTheme === 'dark' ? 'dark' : 'light';
	} catch (error) {
		console.error('Error parsing theme:', error);
	}

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replace('data-theme', `data-theme="${theme}"`);
			return html;
		}
	});
};

// * i18n event handler, gets the data from the event and then return the user language
const i18nHookHandle: Handle = ({ event, resolve }) => {
	let lang = 'en';

	try {
		const acceptLanguageHeader = event.request.headers.get('accept-language');
		// Get the default language from the browser
		const defaultLanguage = acceptLanguageHeader?.split(',')[0].split('-')[0];
		const newLanguageSetting = event.url.searchParams.get('lang');
		const currentLanguageSetting = event.cookies.get('lang');
		// Pick language by priority
		const selectedLang = newLanguageSetting || currentLanguageSetting || defaultLanguage || 'en';
		lang = selectedLang === 'pt' ? 'pt' : 'en'
	} catch (error) {
		console.error('Error parsing language:', error);
	}

	// Set the cookie for the selected language
	event.cookies.set('lang', lang, {
		path: '/',
		maxAge: 60 * 60 * 24 * 365
	});

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replace('lang', `lang="${lang}"`);
			return html;
		}
	});
};

export const handle: Handle = sequence(themeHookHandle, i18nHookHandle);
