import { sveltekit } from "@sveltejs/kit/vite";
import { resolve } from "node:path";

const config = {
	plugins: [sveltekit()],
	ssr: {
		noExternal: ["@fortawesome/*"]
	},
	resolve: {
		alias: [
			{
				find: "$lib",
				replacement: resolve("./src/lib")
			},
			{
				find: "$models",
				replacement: resolve("./src/models")
			},
			{
				find: "$stores",
				replacement: resolve("./src/stores")
			},
			{
				find: "$assets",
				replacement: resolve("./src/assets")
			},
			{
				find: "$types",
				replacement: resolve("./src/types")
			},
			{
				find: "$locales",
				replacement: resolve("./src/locales")
			},
			{
				find: "$",
				replacement: resolve("./src")
			}
		]
	}
};

export default config;
