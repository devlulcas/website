import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { resolve } from "path";

const __dirname = resolve();

const config = {
	kit: {
		// Config do vite para suportar path aliases
		vite: {
			ssr: {
				noExternal: ["@fortawesome/*"]
			},
			resolve: {
				alias: [
					{
						find: "$",
						replacement: resolve(__dirname, "./src")
					},
					{
						find: "$lib",
						replacement: resolve(__dirname, "./src/lib")
					},
					{
						find: "$models",
						replacement: resolve(__dirname, "./src/models")
					},
					{
						find: "$stores",
						replacement: resolve(__dirname, "./src/stores")
					},
					{
						find: "$assets",
						replacement: resolve(__dirname, "./src/assets")
					}
				]
			}
		},
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
