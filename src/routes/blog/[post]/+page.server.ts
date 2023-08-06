import { fetchPosts, getPostRecommendations } from '$/lib/server/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, url }) => {
	const { post: slug } = params;

	const posts = await fetchPosts();

	const currentPostIndex = posts.findIndex((post) => slug.toLowerCase() === post.slug);

	if (currentPostIndex === -1) {
		throw error(404, 'Post not found');
	}

	const currentPost = posts[currentPostIndex];

	return {
		post: currentPost,
		recommendations: getPostRecommendations(posts, currentPostIndex)
	};
};
