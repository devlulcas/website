import { extractCategories } from '$/lib/server/posts/lib/categories';
import { getPosts } from '$/lib/server/posts/services/get-posts';
import Fuse from 'fuse.js';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const search = url.searchParams.get('search');

	const posts = await getPosts();

	const featuredPost = posts.shift();

	if (search) {
		const fuse = new Fuse(posts, {
			keys: ['title', { name: 'tags', weight: 0.5 }, { name: 'excerpt', weight: 0.5 }]
		});

		const filteredPosts = fuse.search(search).map((result) => result.item);

		return { posts: filteredPosts, featuredPost: null, search };
	}

	const categories = extractCategories(posts);

	return { posts, featuredPost, search, categories };
};
