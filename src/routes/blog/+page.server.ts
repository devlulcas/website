import { fetchPosts } from '$/lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await fetchPosts();

	return { featuredPosts: posts.slice(0, 3), posts: posts.slice(3) };
};
