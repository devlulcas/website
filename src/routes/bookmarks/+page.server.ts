import { getBookmarks } from '$lib/data/bookmarks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const bookmarks = await getBookmarks();

	return { bookmarks };
};
