import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import relativeImages from 'mdsvex-relative-images';
import { remarkCodeTitles } from './plugins/remark-code-titles.js';
import { rehypeCodeBlocks } from './plugins/rehype-code-blocks.js';
import { rehypeExternalUrl } from './plugins/rehype-external-url.js';
import { rehypeBetterImages } from './plugins/rehype-better-images.js';
import { rehypeSpecialBlockquote } from './plugins/rehype-special-blockquotes.js';
import { remarkVideo } from './plugins/remark-video.js';

const specialTypes = [
	'note',
	'warning',
	'tip',
	'danger',
	'important',
	'caution',
	'info',
	'success',
	'question'
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [relativeImages, remarkCodeTitles, [remarkVideo, { width: 560, height: 315 }]],
			rehypePlugins: [
				rehypeCodeBlocks,
				rehypeSlug,
				rehypeAutolinkHeadings,
				rehypeExternalUrl,
				rehypeBetterImages,
				[rehypeSpecialBlockquote, specialTypes]
			]
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*']
		},
		alias: {
			'$handlers/*': 'src/handlers/*',
			'$utils/*': 'src/utils/*',
			'$/*': 'src/*'
		}
	}
};

export default config;
