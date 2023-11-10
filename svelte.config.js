import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export const mdsvexOptions = {
  extensions: ['.md', '.svx', '.mdx'],
  remarkPlugins: [relativeImages],
  rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['*'],
    },
    alias: {
      '$/*': 'src/*',
    },
  },
};

export default config;
