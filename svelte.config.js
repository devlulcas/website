import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

import * as dvl from 'devlulcas-md';
import relativeImages from 'mdsvex-relative-images';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

const blockQuoteTypes = [
	{ prefix: 'tip', className: 'tip' },
	{ prefix: 'warning', className: 'warning' },
	{ prefix: 'danger', className: 'danger' },
	{ prefix: 'info', className: 'info' },
	{ prefix: 'success', className: 'success' },
	{ prefix: 'note', className: 'note' },
	{ prefix: 'important', className: 'important' },
	{ prefix: 'caution', className: 'caution' },
	{ prefix: 'error', className: 'error' }
];

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md', '.svx', '.mdx'],
	remarkPlugins: [
		relativeImages,
		dvl.remarkBetterImages,
		[dvl.remarkCustomBlockquotes, { types: blockQuoteTypes }],
		dvl.remarkExternalUrl
	],
	rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],

	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		},
		alias: {
			'$/*': 'src/*'
		}
	}
};

export default config;
