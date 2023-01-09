import { fetchPosts } from '$lib/data/posts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const data = await fetchPosts({ category: '' });
	return {
		posts: data.posts.slice(0, 10)
	};
}
