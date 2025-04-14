import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: [
		'javascript',
		'typescript',
		'html',
		'css',
		'json',
		'bash',
		'php',
		'elixir',
		'go',
		'rust',
		'gleam',
		'kotlin',
		'lua',
		'svelte',
		'markdown',
		'tsx',
		'jsx',
		'http',
		'mermaid',
		'sql',
		'text',
		'diff'
	]
});

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
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
			return `{@html \`${html}\` }`;
		}
	},
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
