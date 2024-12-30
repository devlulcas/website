import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPosts } from '$/lib/server/posts/services/get-posts';
import { getPostRecommendations } from '$/lib/server/posts/lib/get-post-recommendations';

export const load: PageServerLoad = async ({ params }) => {
	const { post: slug } = params;

	const posts = await getPosts();

	const currentPostIndex = posts.findIndex((post) => slug.toLowerCase() === post.slug);

	if (currentPostIndex === -1) {
		error(404, 'Post not found');
	}

	const currentPost = posts[currentPostIndex];

	return {
		post: currentPost,
		recommendations: getPostRecommendations(posts, currentPostIndex)
	};
};
