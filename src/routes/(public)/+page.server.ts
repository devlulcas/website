import { getCategories, getPosts, sortPostByDate } from '$/lib/data/posts';
import { getProjects } from '$/lib/data/projects';
import { langHandler } from '$handlers/lang';
import { themeHandler } from '$handlers/theme';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const [posts, projects] = await Promise.all([getPosts(), getProjects()]);

	// Get the first 3 posts
	const recentPosts = sortPostByDate(posts).slice(0, 3);

	// Get a featured post and remove it from the recent posts
	const featuredPost = recentPosts.shift();

	// Get the list of post categories
	const categories = getCategories(posts);

	return {
		featuredPost,
		posts,
		pinnedProjects: projects.pinnedItems,
		otherProjects: projects.repositories,
		categories
	};
};

export const actions = {
	setTheme: themeHandler,
	setLang: langHandler
} satisfies Actions;
