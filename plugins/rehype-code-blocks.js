import { visit } from 'unist-util-visit';

/**
 * Wraps code blocks in a div with a copy button and a title
 */
export function rehypeCodeBlocks() {
	/**
	 * @param {import('hast').Node} node
	 * @param {number} index
	 * @param {import('hast').Parent} parent
	 */
	const visitor = (node, index, parent) => {
		if (node.type === 'raw') {
			if (thatMonsterIsActuallyABlockOfCode(node)) {
				/**
				 * @type {import('hast').Element}
				 */
				const codeTitle = {
					type: 'raw',
					value: getCodeTitle(index, parent)
				};

				/**
				 * @type {import('hast').Element}
				 */
				const copyButton = {
					type: 'element',
					tagName: 'button',
					properties: {
						'data-copy-code': true,
						className: ['copy-code']
					},
					children: [
						{
							type: 'text',
							value: 'Copy'
						}
					]
				};

				/**
				 * @type {import('hast').Element}
				 */
				const headerBlock = {
					type: 'element',
					tagName: 'div',
					properties: {
						className: ['code-header-block']
					},
					children: [codeTitle, copyButton]
				};

				/**
				 * @type {import('hast').Element}
				 */
				const newBlock = {
					type: 'element',
					tagName: 'div',
					properties: {
						className: ['code-wrapper']
					},
					children: [headerBlock, node]
				};

				parent.children.splice(index, 1, newBlock);
			}
		}
	};

	/**
	 * @param {import('hast').Root} tree
	 */
	return (tree) => visit(tree, visitor);
}

/**
 * Check if the node is a code block that needs to be wrapped (and isn't already wrapped or a metadata block)
 *
 * @param {import('hast').Node} node
 * @returns {boolean}
 */
function thatMonsterIsActuallyABlockOfCode(node) {
	return (
		// This is a hack to prevent the code block from being wrapped if it's a metadata block
		node.value.includes('<pre class="language') &&
		// This is a hack to prevent the code block from being wrapped if it's already wrapped
		!node.value.includes('code-wrapper') &&
		!node.value.includes('copy-code') &&
		// This is a hack to prevent the code block from being wrapped if it's a module of metadata
		!node.value.includes('context="module"') &&
		// This is a hack to prevent the code block from being wrapped if it's empty
		node.value !== '/\n' &&
		node.value !== '' &&
		node.value.trim() &&
		!node.value.includes('<script>\n</script>')
	);
}

/**
 * Get the code title from the parent
 *
 * @param {number} index
 * @param {import('hast').Parent} parent
 * @returns {string}
 */
function getCodeTitle(index, parent) {
	const possibleTitlePosition = index - 2 > 0 ? index - 2 : 0;

	const possibleTitleElement = parent.children[possibleTitlePosition];

	const isCodeTitle =
		possibleTitleElement.type === 'raw' && possibleTitleElement.value.includes('code-title');

	let codeTitle = '';

	if (isCodeTitle) {
		codeTitle = possibleTitleElement.value;

		// remove the title from the parent
		parent.children.splice(possibleTitlePosition, 1, { type: 'text', value: '' });
	}

	return codeTitle;
}
