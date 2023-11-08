import { ogHandler } from '$/lib/server/seo/og';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
  const text = url.searchParams.get('text') || 'Hello world!';

  const ogImage = await ogHandler({ text });

  return new Response(ogImage, {
    headers: {
      'Content-Type': 'image/png',
    },
  });
};
