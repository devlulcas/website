import { visit } from 'unist-util-visit';

/**
 * Adds loading="lazy" to images
 */
export function rehypeBetterImages() {
	/**
	 * @param {import('rehype').Root} tree
	 */
	return function transformer(tree) {
		visit(tree, 'element', (node) => {
			if (node.tagName === 'img') {
				node.properties.loading = 'lazy';
			}
		});
	};
}
