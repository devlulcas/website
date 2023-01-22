import { fetchPosts, getCategories } from '$lib/data/posts';
import { fetchMoreProjects, fetchPinnedProjects } from '$lib/data/projects';
import { themeHandler } from '$handlers/theme';
import type { Actions, PageServerLoad } from './$types';
import { langHandler } from '$handlers/lang';
import { contactHandler } from '$handlers/contact';

export const load: PageServerLoad = async () => {
	const data = await fetchPosts({});

	const [pinnedProjects, otherProjects, categories] = await Promise.all([
		fetchPinnedProjects(),
		fetchMoreProjects(),
		getCategories()
	]);

	const posts = data.posts.slice(0, 5);

	const featuredPost = posts[0];

	posts.shift();

	return {
		featuredPost,
		posts,
		pinnedProjects,
		otherProjects,
		categories
	};
};

export const actions = {
	setTheme: themeHandler,
	setLang: langHandler,
	contact: contactHandler
} satisfies Actions;
