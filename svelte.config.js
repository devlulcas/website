import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['/sitemap.xml', '/rss.xml']
		},
		alias: {
			'$assets/*': 'src/assets/*',
			'$modules/*': 'src/modules/*',
			'$layouts/*': 'src/layouts/*',
			'$i18n/*': 'src/i18n/*',
			'$commonTypes/*': 'src/types/*',
			'$utils/*': 'src/utils/*',
			'$/*': 'src/*'
		}
	}
};

export default config;
