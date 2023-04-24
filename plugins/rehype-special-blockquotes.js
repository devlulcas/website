import { visit } from 'unist-util-visit';

export function rehypeSpecialBlockquote(specialTypes) {
	/**
	 * @param {import('rehype').Root} tree
	 */
	return (tree) => {
		/**
		 * @param {import('rehype').Element} node
		 */
		visit(tree, 'element', (node) => {
			if (node.tagName === 'blockquote') {
				const contentIndex = node.children.findIndex((child) => child.tagName === 'p');

				if (contentIndex === -1) {
					return;
				}

				const content = node.children[contentIndex];

				const [firstChild, ...children] = content.children;

				if (content && firstChild.type === 'text') {
					const firstChildText = firstChild.value;
					const [type, ...rest] = firstChildText.split(':');

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
							},
							...children
						]
					});

					return node;
				}
			}
		});
	};
}
