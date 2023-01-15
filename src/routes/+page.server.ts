import { fetchPosts, getCategories } from '$lib/data/posts';
import { fetchMoreProjects, fetchPinnedProjects } from '$lib/data/projects';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

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

export const actions: Actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');
		const redirectTo = url.searchParams.get('redirectTo') ?? '/';

		if (theme) {
			const fullYear = 60 * 60 * 24 * 365;

			cookies.set('theme', theme, {
				path: '/',
				maxAge: fullYear
			});
		}

		if (redirectTo && redirectTo.startsWith('/')) {
			throw redirect(303, redirectTo);
		}

		throw redirect(303, '/');
	}
};
