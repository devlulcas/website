import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

import { mdsvex } from "mdsvex";
import relativeImages from "mdsvex-relative-images";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
  extensions: [".md", ".svx", ".mdx"],
  remarkPlugins: [relativeImages],
  rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ["*"],
    },
    alias: {
      "$/*": "src/*",
    },
  },
};

export default config;
