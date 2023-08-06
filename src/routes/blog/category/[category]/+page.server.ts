import { fetchPosts, filterPostsByCategory } from '$/lib/server/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const category = params.category;

	const posts = await fetchPosts();

	const filteredPosts = filterPostsByCategory(posts, category);

	if (filteredPosts.length === 0) {
		throw error(404, `Category "${category}" not found`);
	}

	return { posts: filteredPosts, category };
};
