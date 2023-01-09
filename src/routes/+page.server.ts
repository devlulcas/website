import { fetchPosts, getCategories } from '$lib/data/posts';
import { fetchMoreProjects, fetchPinnedProjects } from '$lib/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const data = await fetchPosts({});

	const [pinnedProjects, otherProjects, categories] = await Promise.all([
		fetchPinnedProjects(),
		fetchMoreProjects(),
		getCategories()
	]);

	return {
		posts: data.posts.slice(0, 5),
		pinnedProjects,
		otherProjects,
		categories
	};
};
