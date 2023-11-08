import { getPosts } from '$/lib/server/posts/services/get-posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = await getPosts();

  const featuredPost = posts.shift();

  return { posts, featuredPost };
};
