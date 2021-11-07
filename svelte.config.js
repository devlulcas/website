// svelte.config.js
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		target: '#svelte'
	}
};

export default config;
