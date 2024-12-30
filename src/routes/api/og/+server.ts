import { website } from '$/lib/assets/config/website';
import { read } from '$app/server';
import inter from '$lib/assets/fonts/inter-bold.ttf';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { render } from 'svelte/server';
import type { RequestHandler } from './$types';
import SvelteOG from './og.svelte';

const fontData = read(inter).arrayBuffer();

const height = 630;
const width = 1200;

export const GET: RequestHandler = async ({ url }) => {
	const searchParams = url.searchParams;

	const text = searchParams.get('text') || website.title;
	const thumb = searchParams.get('thumb') || website.image;
	const tags = searchParams.getAll('tag') ?? [];

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const result = render(SvelteOG, {
		props: {
			text,
			thumb,
			tags,
		}
	});

	console.log(result.head);


	const element = toReactNode(`${result.html}`);

	const svg = await satori(element, {
		fonts: [
			{
				name: 'Inter',
				data: await fontData,
				style: 'normal'
			}
		],
		height,
		width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: width
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png',
			'cache-control': 'public, max-age=86400'
		}
	});
};
