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
			'$layouts/*': 'src/layouts/*',
			'$i18n/*': 'src/i18n/*',
			'$commonTypes/*': 'src/types/*',
			'$utils/*': 'src/utils/*',
			'$/*': 'src/*'
		}
	}
};

export default config;
