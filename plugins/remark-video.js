import { visit } from 'unist-util-visit';
/**
 * Remark plugin to convert youtube links to embeds
 *
 * @param {{width: number, height: number}} options
 */
export function remarkVideo({ width = 560, height = 315 }) {
	/**
	 *
	 * @param {import('mdast').Link} node
	 */
	const visitor = (node) => {
		if (node.type === 'link' && node.url) {
			if (isVideoUrl(node.url)) {
				const videoId = node.url.split('v=').at(1);

				const videoTitle = node.children.at(0).value;

				const videoUrl = `https://www.youtube.com/embed/${videoId}`;

				const videoHtml = `
			    <div class="video-wrapper">
			      <iframe
			        width="${width}"
			        height="${height}"
			        src="${videoUrl}"
			        title="${videoTitle}"
			        frameborder="0"
			        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			        allowfullscreen
			      ></iframe>
			      <p>${videoTitle}</p>
			    </div>
			  `;

				const videoNode = {
					type: 'html',
					value: videoHtml
				};

				node.children = [videoNode];

				return node;
			}
		}
	};

	/**
	 * @param {import('mdast').Root} tree
	 */
	return (tree) => visit(tree, visitor);
}

/**
 * Checks if the url is a video url
 * @param {string} url
 */
function isVideoUrl(url) {
	const possibleVideoUrls = ['youtube.com/watch?v=', 'youtu.be/'];
	return possibleVideoUrls.some((possibleVideoUrl) => url.includes(possibleVideoUrl));
}
