import type { Handle, RequestEvent } from '@sveltejs/kit';
import { auth } from '$lib/server/auth';
import { sequence } from '@sveltejs/kit/hooks';

// * Theme event handler, gets the data from the event and then return the user theme
const themeHookEventHandler: Handle = ({ event, resolve }) => {
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
const i18nHookEventHandler: Handle = ({ event, resolve }) => {
	const baseLang = event.request.headers.get('accept-language')?.split('-').at(0);

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

// * Auth event handler, gets the data from the event and then return the user auth
export const authHandle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	return await resolve(event);
};

export const handle: Handle = sequence(authHandle, themeHookEventHandler, i18nHookEventHandler);
