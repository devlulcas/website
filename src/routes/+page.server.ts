import { fetchPosts, getCategories } from '$lib/data/posts';
import { fetchMoreProjects, fetchPinnedProjects } from '$lib/data/projects';
import { themeHandler } from '$handlers/theme';
import type { Actions, PageServerLoad } from './$types';
import { langHandler } from '$handlers/lang';

export const load: PageServerLoad = async () => {
	const data = await fetchPosts({});

	const [pinnedProjects, otherProjects, categories] = await Promise.all([
		fetchPinnedProjects(),
		fetchMoreProjects(),
		getCategories()
	]);

	const filteredOtherProjects = otherProjects.filter((project) => {
		const isPinnedProject = !pinnedProjects.some(
			(pinnedProject) => pinnedProject.name === project.name
		);

		const isStudy = project.name.includes('learning');

		const isSchoolProject = project.name === 'lrl-airlines' || project.name.includes('atividades');

		return isPinnedProject && !isStudy && !isSchoolProject;
	});

	const posts = data.posts.slice(0, 3);

	const featuredPost = posts[0];

	posts.shift();

	return {
		featuredPost,
		posts,
		pinnedProjects,
		otherProjects: filteredOtherProjects,
		categories
	};
};

export const actions = {
	setTheme: themeHandler,
	setLang: langHandler
} satisfies Actions;
