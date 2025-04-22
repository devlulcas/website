import { extractCategories } from '$/lib/server/posts/lib/categories';
import { GLOBAL_POSTS_SLIM } from '$/lib/server/posts/services/get-posts';
import Fuse from 'fuse.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const search = url.searchParams.get('search');

	const [featuredPost, ...otherPosts] = GLOBAL_POSTS_SLIM;

	if (search) {
		const fuse = new Fuse(GLOBAL_POSTS_SLIM, {
			keys: ['title', { name: 'tags', weight: 0.5 }, { name: 'excerpt', weight: 0.5 }]
		});

		const filteredPosts = fuse.search(search).map((result) => result.item);

		return { posts: filteredPosts, featuredPost: null, search };
	}

	const categories = extractCategories(GLOBAL_POSTS_SLIM);

	return { posts: otherPosts, featuredPost, search, categories };
};
