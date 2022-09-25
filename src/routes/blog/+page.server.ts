import { parseMarkdownFile } from '$utils/parse';
import { getRecentPostsMetadata } from '$utils/post-previews';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export async function load(context: PageServerLoad) {
	try {
		const posts = await getRecentPostsMetadata();

		const tags = posts.flatMap((data) => data.tags);

		const uniqueTags = Array.from(new Set(tags));

		const featuredPost = posts.find((post) => post.featured) ?? posts[0];

		return {
			featuredPost,
			posts,
			tags: uniqueTags
		};
	} catch {
		throw error(404, 'Postagem não encontrada');
	}
}
