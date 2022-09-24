import { parseMarkdownFile } from '$utils/parse';
import { error } from '@sveltejs/kit';

export async function load({ params }: any) {
	const { slug } = params;

	try {
		const { content, metadata } = await parseMarkdownFile(`src/posts/${slug}/index.md`);

		const body = JSON.stringify({ metadata, content });

		return {
			body
		};
	} catch {
		throw error(404, 'Not found');
	}
}
