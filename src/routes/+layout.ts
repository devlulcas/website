import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (context) => {
	const { pathname } = context.url;

	return { pathname };
};
