import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [mdsvex(mdsvexConfig), preprocess()],
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false
		}),
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
