import { createOrUpdateMicroblog } from '$/lib/server/microblog/actions/index.js';
import { getMicroblogTags } from '$/lib/server/microblog/loaders/index.js';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
  const tags = await getMicroblogTags();
  return { tags };
};

export const actions = {
  createMicroblog: createOrUpdateMicroblog,
};
