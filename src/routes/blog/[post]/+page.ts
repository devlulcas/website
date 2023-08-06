import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

/**
 * Dynamically loads the svelte component for the post (only possible in +page.js)
 * and pass on the data from +page.server.js
 */
export const load: PageLoad = async ({ data }) => {
	const postPath = data.post.slug;

	if (!postPath) {
		throw error(404, 'Post not found');
	}

	const component = await import(`./../../../../posts/${postPath}/index.md`);

	return {
		metadata: data.post,
		component: component.default,
		recommendations: data.recommendations
	};
};
