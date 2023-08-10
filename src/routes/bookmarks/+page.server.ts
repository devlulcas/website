import { fetchBookmarks } from '$/lib/server/bookmarks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const bookmarks = await fetchBookmarks();

	return { bookmarks };
};
