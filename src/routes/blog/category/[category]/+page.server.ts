import { fetchPosts } from '$lib/data/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { category } = params;

	const data = await fetchPosts({ category });

	return {
		posts: data.posts
	};
};
