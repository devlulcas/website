import { fetchPosts } from '$lib/data/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { post: slug } = params;

	const data = await fetchPosts({ category: '' });

	const posts = data.posts;

	const post = posts.find((post) => slug.toLowerCase() === post.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
};
