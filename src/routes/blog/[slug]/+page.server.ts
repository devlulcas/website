import { posts } from '$/data/posts/posts';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export async function load(context: PageServerLoad) {
	const { slug } = context.params;

	const post = posts.find((post) => slug === post.slug);

	if (!post) {
		throw error(404, 'Postagem não encontrada');
	}

	return {
		post
	};
}
