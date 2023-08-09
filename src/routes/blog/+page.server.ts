import { fetchPosts } from '$/lib/server/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await fetchPosts();

	const featuredPost = posts.shift();

	return { posts, featuredPost };
};
