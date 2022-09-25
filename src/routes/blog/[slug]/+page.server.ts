import { parseMarkdownFile } from '$utils/posts/markdown-parser';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export async function load(context: PageServerLoad) {
	const { slug } = context.params;

	try {
		const { content, metadata } = await parseMarkdownFile(slug);

		const body = { metadata, content };

		return {
			body
		};
	} catch {
		throw error(404, 'Postagem não encontrada');
	}
}
