import { redirect, type Cookies } from '@sveltejs/kit';

interface LangHandlerParams {
	cookies: Cookies;
	url: URL;
}

export const langHandler = async ({ cookies, url }: LangHandlerParams) => {
	const redirectTo = url.searchParams.get('redirectTo') ?? '/';
	const lang = url.searchParams.get('locale');
	const doNotRedirect = url.searchParams.get('doNotRedirect') === 'true';

	if (lang) {
		const fullYear = 60 * 60 * 24 * 365;

		cookies.set('locale', lang, {
			path: '/',
			maxAge: fullYear,
			httpOnly: false
		});
	}

	if (doNotRedirect) return;

	if (redirectTo && redirectTo.startsWith('/')) {
		throw redirect(303, redirectTo);
	}

	throw redirect(303, '/');
};
