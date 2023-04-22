import type { Handle, RequestEvent } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const theme = themeHookEventHandler(event);
	const lang = i18nHookEventHandler(event);

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html.replace('data-theme=""', `data-theme="${theme}"`);

			html.replace('%lang%', lang);

			return html;
		}
	});
};

// * Theme event handler, gets the data from the event and then return the user theme
const themeHookEventHandler = (event: RequestEvent) => {
	const newTheme = event.url.searchParams.get('theme');

	const actualTheme = event.cookies.get('theme');

	const defaultTheme = 'dark';

	const theme = newTheme || actualTheme || defaultTheme;

	return theme === 'dark' ? 'dark' : 'light';
};

// * i18n event handler, gets the data from the event and then return the user language
const i18nHookEventHandler = (event: RequestEvent) => {
	const baseLang = event.request.headers.get('accept-language')?.split('-').at(0);

	const browserLang = baseLang === 'pt' ? 'pt-br' : 'en';

	const newLang = event.url.searchParams.get('lang');

	const actualLang = event.cookies.get('lang');

	const defaultLang = 'en';

	const lang = newLang || actualLang || browserLang || defaultLang;

	return lang === 'pt-br' ? 'pt-br' : 'en';
};
