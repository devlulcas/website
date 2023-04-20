import { visit } from 'unist-util-visit';

/**
 * Adds target="_blank" and rel="noopener noreferrer" to external links
 */
export function rehypeExternalUrl() {
	/**
	 * @param {import('rehype').Root} tree
	 */
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'a') {
				const href = node.properties.href;

				if (href && href.startsWith('http')) {
					node.properties.target = '_blank';
					node.properties.rel = 'noopener noreferrer';
				}
			}
		});
	};
}
