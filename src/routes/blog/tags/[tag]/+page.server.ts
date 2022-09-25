import { getPostsMetadataByTag } from '$utils/posts/post-metadata';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export async function load(context: PageServerLoad) {
	const { tag } = context.params;

	try {
		const posts = await getPostsMetadataByTag(tag);

		return {
			slug: tag,
			posts
		};
	} catch {
		throw error(404, 'Postagem não encontrada');
	}
}
