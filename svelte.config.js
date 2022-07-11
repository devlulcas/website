import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";

const config = {
	kit: {
		// Config do adapter para construir um site estático
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: null,
			precompress: false
		}),
		// Prerender para renderizar o conteúdo em tempo de compilação
		prerender: {
			default: true
		}
	},

	// Config de pré-processadores como Sass, Stylus ou PostCSS
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
