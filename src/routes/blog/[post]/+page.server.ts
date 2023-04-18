import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getPosts } from '$/lib/data/posts';

export const load: PageServerLoad = async ({ params, url }) => {
	const { post: slug } = params;

	console.log('params', url);

	const posts = await getPosts();

	const post = posts.find((post) => slug.toLowerCase() === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
