import { filterPostsByCategory } from '$/lib/server/posts/lib/categories';
import { GLOBAL_POSTS_SLIM } from '$/lib/server/posts/services/get-posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category;

	const filteredPosts = filterPostsByCategory(GLOBAL_POSTS_SLIM, category);

	if (filteredPosts.length === 0) {
		error(404, `Category "${category}" not found`);
	}

	return { posts: filteredPosts, category };
};
