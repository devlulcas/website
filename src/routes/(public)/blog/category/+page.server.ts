import { getCategories, getPosts } from '$lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const posts = await getPosts();

	const categories = await getCategories(posts);

	return {
		posts: posts.slice(0, 4),
		categories: categories
	};
};
