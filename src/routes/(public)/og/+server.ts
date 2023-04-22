import type { RequestHandler } from './$types';
import { ogHandler } from '$handlers/og';

export const GET: RequestHandler = async ({ url }) => {
	const text = url.searchParams.get('text') || 'Hello world!';

	const ogImage = await ogHandler({ text });

	return new Response(ogImage, {
		headers: {
			'Content-Type': 'image/png'
		}
	});
};
