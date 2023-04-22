import { getPosts, getPostsByCategory } from '$/lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { category } = params;

	const posts = await getPosts();

	const postsByCategory = getPostsByCategory(posts, category);

	return {
		category,
		posts: postsByCategory
	};
};
