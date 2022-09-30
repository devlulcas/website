import type { Post } from '$/data/posts/posts';

export async function load({ data }) {
	const post = data.post as Post;

	const component = post.isIndexFile
		? await import(`../../../../posts/${post.slug}/index.md`)
		: await import(`../../../../posts/${post.slug}.md`);

	return {
		post: post,
		component: component.default
	};
}
