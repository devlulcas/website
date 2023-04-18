import { getCategories, getPosts } from '$/lib/data/posts';

export async function load() {
	const posts = await getPosts();

	const categories = getCategories(posts);

	const featuredPost = posts.shift() || posts[0];

	return {
		categories,
		featuredPost,
		posts
	};
}
