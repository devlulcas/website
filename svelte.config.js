import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			'$assets/*': 'src/assets/*',
			'$modules/*': 'src/modules/*',
			'$i18n/*': 'src/i18n/*',
			'$utils/*': 'src/utils/*'
		}
	}
};

export default config;
