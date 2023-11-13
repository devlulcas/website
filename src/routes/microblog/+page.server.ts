import { getMicroblogTags, getMicroblogs } from '$/lib/server/microblog/loaders/index.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
  const tags = await getMicroblogTags();
  const microblogPosts = await getMicroblogs();
  return { tags, microblogPosts };
};
