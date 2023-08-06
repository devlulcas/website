import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// * Theme event handler, gets the data from the event and then return the user theme
const themeHookHandle: Handle = ({ event, resolve }) => {
	const newTheme = event.url.searchParams.get('theme');

	const actualTheme = event.cookies.get('theme');

	const defaultTheme = 'dark';

	const selectedTheme = newTheme || actualTheme || defaultTheme;

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
	const baseLang = event.request.headers.get('accept-language')?.split('-').at(0)?.toLowerCase();

	const browserLang = baseLang === 'pt' ? 'pt-br' : 'en';

	const newLang = event.url.searchParams.get('lang');

	const actualLang = event.cookies.get('lang');

	const defaultLang = 'en';

	const selectedLang = newLang || actualLang || browserLang || defaultLang;

	const lang = selectedLang === 'pt-br' ? 'pt-br' : 'en';

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replace('lang', `lang="${lang}"`);
			return html;
		}
	});
};

export const handle: Handle = sequence(themeHookHandle, i18nHookHandle);
