import { redirect, type Cookies } from '@sveltejs/kit';

interface ThemeHandlerParams {
	url: URL;
	cookies: Cookies;
}

export const themeHandler = async ({ cookies, url }: ThemeHandlerParams) => {
	const theme = url.searchParams.get('theme');
	const redirectTo = url.searchParams.get('redirectTo') ?? '/';

	if (theme) {
		const fullYear = 60 * 60 * 24 * 365;

		cookies.set('theme', theme, {
			path: '/',
			maxAge: fullYear
		});
	}

	if (redirectTo && redirectTo.startsWith('/')) {
		throw redirect(303, redirectTo);
	}

	throw redirect(303, '/');
};
