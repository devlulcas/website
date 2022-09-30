import { posts } from '$/data/posts/posts';
import { getAllProjects, getPinnedProjects } from '$utils/projects/project-fetcher';
import type { Actions } from './$types';

export async function load() {
	const allProjects = await getAllProjects();

	const pinnedProjects = await getPinnedProjects();

	const featuredPost = posts.find((post) => post.featured) ?? posts[0];

	return {
		pinnedProjects,
		allProjects,
		featuredPost,
		posts
	};
}

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();

		const sender = data.get('sender');

		const content = data.get('content');

		console.log({ sender, content });
	}
};
