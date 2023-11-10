import { createOrUpdateBookmarkTag } from '$/lib/server/bookmarks/actions';
import { getBookmarkTags } from '$/lib/server/bookmarks/loaders';
import { createOrUpdateMicroblogTag } from '$/lib/server/microblog/actions';
import { getMicroblogTags } from '$/lib/server/microblog/loaders';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const bookmarkTags = await getBookmarkTags();
  const microblogTags = await getMicroblogTags();
  return { bookmarkTags, microblogTags };
};

export const actions = {
  createOrUpdateBookmarkTag: createOrUpdateBookmarkTag,
  createOrUpdateMicroblogTag: createOrUpdateMicroblogTag,
};
