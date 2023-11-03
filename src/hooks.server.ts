import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createServerClient } from '@supabase/ssr';
import { error, redirect, type Handle } from '@sveltejs/kit';
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

	// Pick language by priority
	const selectedLang = newLanguageSetting || currentLanguageSetting || defaultLanguage || 'en';

	const lang = selectedLang === 'pt' ? 'pt' : 'en';

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			html = html.replace('lang', `lang="${lang}"`);
			return html;
		}
	});
};

// * Supabase event handler, gets the data from the event and then return the user session
const supabaseHandle: Handle = async ({ event, resolve }) => {
	event.locals.supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			get: (key) => event.cookies.get(key),
			set: (key, value, options) => {
				event.cookies.set(key, value, options);
			},
			remove: (key, options) => {
				event.cookies.delete(key, options);
			}
		}
	});

	/**
	 * a little helper that is written for convenience so that instead
	 * of calling `const { data: { session } } = await supabase.auth.getSession()`
	 * you just call this `await getSession()`
	 */
	const getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	event.locals.getSession = getSession;

	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};

// * Auth event handler, protect the dashboard routes
export const authHandle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/dashboard')) {
		const session = await event.locals.getSession();

		if (!session) {
			throw redirect(303, '/');
		}
	}

	if (event.url.pathname.startsWith('/dashboard') && event.request.method === 'POST') {
		const session = await event.locals.getSession();
		if (!session) {
			throw error(303, '/');
		}
	}

	return resolve(event);
};

export const handle: Handle = sequence(themeHookHandle, supabaseHandle, authHandle, i18nHookHandle);
