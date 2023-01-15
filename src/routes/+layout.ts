import { loadTranslations, locale } from '$lib/i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (context) => {
	const { pathname } = context.url;

	const defaultLocale = context.data.cookies.lang || 'en';

	const initLocale = locale.get() || defaultLocale;

	await loadTranslations(initLocale, pathname);

	return {};
};
