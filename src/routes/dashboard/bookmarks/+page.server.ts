import { createOrUpdateBookmark } from '$/lib/server/bookmarks/actions/index.js';
import { getBookmarkTags, getBookmarks } from '$/lib/server/bookmarks/loaders/index.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
  const tags = await getBookmarkTags();
  const bookmarks = await getBookmarks();
  return {tags, bookmarks};
};

export const actions = {
  createBookmark: createOrUpdateBookmark,
};
