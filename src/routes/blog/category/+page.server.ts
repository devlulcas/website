import { fetchPosts, getCategories } from '$lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await fetchPosts({});

	const categories = await getCategories();

	return {
		posts: data.posts.slice(0, 4),
		categories: categories
	};
};
