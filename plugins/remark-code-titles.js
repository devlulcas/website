import { visit } from 'unist-util-visit';

/**
 * Adds a special piece of syntax to code blocks to add a title to them
 */
export function remarkCodeTitles() {
	/**
	 * Visitor for the code block
	 *
	 * @param {import('mdast').Code} node
	 * @param {number} index
	 * @param {import('mdast').Parent} parent
	 * @returns
	 */
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

	/**
	 * @param {import('mdast').Root} tree
	 */
	return (tree) => visit(tree, 'code', visitor);
}
