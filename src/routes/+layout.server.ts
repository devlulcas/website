import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies }) => {
	return {
		cookies: {
			lang: cookies.get('lang')
		}
	};
};
