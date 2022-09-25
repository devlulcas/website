import { getRecentPostsMetadata } from '$utils/posts/post-metadata';
import { getProjects } from '$utils/projects/project-fetcher';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';

export async function load() {
	try {
		const { allProjects, pinnedProjects } = await getProjects();

		const posts = await getRecentPostsMetadata();

		const featuredPost = posts.find((post) => post.featured) ?? posts[0];

		return {
			pinnedProjects,
			allProjects,
			featuredPost,
			posts
		};
	} catch {
		throw error(404, 'Postagem não encontrada');
	}
}

export const actions: Actions = {
	contact: async ({ request }) => {
		const data = await request.formData();

		const sender = data.get('sender');

		const content = data.get('content');

		console.log({ sender, content });
	}
};
