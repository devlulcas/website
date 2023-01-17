import { visit } from 'unist-util-visit';

export function rehypeSpecialBlockquote() {
	/**
	 * @param {import('hast').Root} tree
	 */
	return (tree) => {
		/**
		 * @param {import('hast').Element} node
		 */
		visit(tree, 'element', (node) => {
			if (node.tagName === 'blockquote') {
				const contentIndex = node.children.findIndex((child) => child.tagName === 'p');

				if (contentIndex === -1) {
					return;
				}

				const content = node.children[contentIndex];

				if (content) {
					const specialTypes = ['note', 'warning', 'tip', 'danger'];

					const text = content.children[0].value;
					const [type, ...rest] = text.split(':');

					if (!specialTypes.includes(type)) {
						return;
					}

					// put the rest of the text back together in case it had colons in it
					const message = rest.join(':').trim();

					node.properties.className = ['blockquote', type];

					// remove the content
					node.children.splice(contentIndex, 1);

					// add the message
					node.children.push({
						type: 'element',
						tagName: 'p',
						properties: {},
						children: [
							{
								type: 'text',
								value: message
							}
						]
					});

					return node;
				}
			}
		});
	};
}
