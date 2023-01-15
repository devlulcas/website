import { redirect, type Cookies } from '@sveltejs/kit';

interface LangHandlerParams {
	cookies: Cookies;
	url: URL;
}

export const langHandler = async ({ cookies, url }: LangHandlerParams) => {
	const redirectTo = url.searchParams.get('redirectTo') ?? '/';
	const lang = url.searchParams.get('idiom');

	console.log('lang', lang);

	if (lang) {
		const fullYear = 60 * 60 * 24 * 365;

		cookies.set('lang', lang, {
			path: '/',
			maxAge: fullYear,
			httpOnly: false
		});
	}

	if (redirectTo && redirectTo.startsWith('/')) {
		throw redirect(303, redirectTo);
	}

	throw redirect(303, '/');
};
