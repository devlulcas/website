import type { PageLoad } from './$types';

/**
 * Dynamically loads the svelte component for the post (only possible in +page.js)
 * and pass on the data from +page.server.js
 */
export const load: PageLoad = async ({ data }) => {
	// load the markdown file based on slug
	const slugPath = data.post.slug?.toLowerCase() ?? '';

	const component = data.post.isIndexFile
		? // vite requires relative paths and explicit file extensions for dynamic imports
		  // see https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
		  await import(`./../../../../posts/${slugPath}/index.md`)
		: await import(`./../../../../posts/${slugPath}.md`);

	return {
		post: data.post,
		component: component.default
	};
};
