import { getBookmarks } from '$/lib/server/bookmarks/services/get-bookmarks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const bookmarks = await getBookmarks();
	return { bookmarks };
};
