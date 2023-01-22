import { fetchPosts, getCategories } from '$lib/data/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data = await fetchPosts({ category: '' });
	const categories = await getCategories();

	const featuredPost = data.posts[0];

	data.posts.shift();

	return {
		categories,
		featuredPost,
		posts: data.posts
	};
}
