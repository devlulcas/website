import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import relativeImages from 'mdsvex-relative-images';
import { visit } from 'unist-util-visit';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			remarkPlugins: [relativeImages, remarkCodeTitles],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeStuff]
		})
	],
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*', '/sitemap.xml', '/rss.xml']
		},
		alias: {
			'$handlers/*': 'src/handlers/*',
			'$utils/*': 'src/utils/*',
			'$/*': 'src/*'
		}
	}
};

export default config;

function remarkCodeTitles() {
	const visitor = (node, index, parent) => {
		if (node.type !== 'code') return node;

		if (!node.lang) return node;

		const [lang, title] = node.lang.split(':');

		if (title) {
			parent.children.splice(index, 0, {
				type: 'html',
				value: `<p class="code-title">${title}</p>`
			});
		}

		node.lang = lang;

		return node;
	};

	return (tree) => visit(tree, 'code', visitor);
}

function rehypeStuff() {
	const visitor = (node, index, parent) => {
		if (node.type === 'raw') {
			// We don't want to wrap the metadata block
			const metadataBlockInitialString = 'context="module"';
			if (node.value.includes(metadataBlockInitialString)) return node;

			// We don't want to wrap the non code blocks
			const codeBlockInitialString = '<pre class="language';
			if (!node.value.includes(codeBlockInitialString)) return node;

			// We don't want to wrap the already wrapped code blocks
			if (node.value.includes('code-wrapper')) return node;
			if (node.value.includes('copy-code')) return node;

			// We don't want to wrap the code blocks that are inside a code wrapper
			if (node?.children) return node;

			// ! This is a hacky way to get the title of the code block
			// ! We are assuming that the title will always be 2 nodes before the code block
			// ! This is not a good way to do it, but it works for now
			// ! Problem: I'm getting recursive code blocks

			const possibleTitlePosition = index - 2 > 0 ? index - 2 : 0;

			const possibleTitleElement = parent.children[possibleTitlePosition];

			const isCodeTitle =
				possibleTitleElement.type === 'raw' && possibleTitleElement.value.includes('code-title');

			let codeTitle = '';

			if (isCodeTitle) {
				codeTitle = possibleTitleElement.value;
			}

			const newValue =
				'<div class="code-wrapper"><button data-copy-code="true" class="copy-code">Copy</button>' +
				codeTitle +
				node.value +
				'</div>';

			node.value = newValue;

			codeTitle = '';

			return node;
		}

		if (node.type !== 'element') return node;

		if (node.tagName !== 'a') return node;

		if (!node.properties) return node;

		if (!node.properties.href) return node;

		if (node.properties.href.startsWith('http')) {
			node.properties.target = '_blank';

			node.properties.rel = 'noopener noreferrer';
		}

		return node;
	};

	return (tree) => visit(tree, 'raw', visitor);
}
