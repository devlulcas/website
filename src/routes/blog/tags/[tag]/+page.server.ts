import { getPostsMetadataByTag } from '$utils/post-previews';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../../../../../.svelte-kit/types/src/routes/blog/tags/$types';

export async function load(context: PageServerLoad) {
	const { tag } = context.params;

	try {
		const posts = await getPostsMetadataByTag(tag);

		return {
			posts
		};
	} catch {
		throw error(404, 'Postagem não encontrada');
	}
}
