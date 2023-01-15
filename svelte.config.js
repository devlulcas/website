import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import relativeImages from 'mdsvex-relative-images';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [relativeImages],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*', '/sitemap.xml', '/rss.xml']
		},
		alias: {
			'$handlers/*': 'src/handlers/*',
			'$utils/*': 'src/utils/*',
			'$/*': 'src/*'
		}
	}
};

export default config;
