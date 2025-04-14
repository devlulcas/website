import { getPostRecommendations } from '$/lib/server/posts/lib/get-post-recommendations';
import { GLOBAL_POSTS_SLIM } from '$/lib/server/posts/services/get-posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { post: slug } = params;


	const currentPostIndex = GLOBAL_POSTS_SLIM
		.findIndex((post) => slug.toLowerCase() === post.slug);

	if (currentPostIndex === -1) {
		error(404, 'Post not found');
	}

	const currentPost = GLOBAL_POSTS_SLIM[currentPostIndex];

	return {
		post: currentPost,
		recommendations: getPostRecommendations(GLOBAL_POSTS_SLIM, currentPostIndex)
	};
};
