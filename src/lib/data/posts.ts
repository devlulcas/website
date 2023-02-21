import { parse } from 'node-html-parser';
import type { Post } from './types';

interface Metadata {
	slug: string;
	title: string;
	tags: string[] | null | undefined;
	categories: string[] | null | undefined;
	date: string;
	updated: string | null | undefined;
	excerpt?: string;
}

type FetchPostsResult = Promise<{ posts: Post[] }>;

/**
 * Get all posts
 *
 * @param params List of params to filter posts by
 * @returns List of posts (metadata)
 */
export async function fetchPosts({ category = '' }): FetchPostsResult {
	const postFiles = import.meta.glob('/posts/**/*.md');

	const posts = await Promise.all(
		Object.entries(postFiles).map(async ([filepath, resolver]) => {
			const post = (await resolver()) as {
				metadata: Metadata;
				default: { render: () => { html: string } };
			};

			const html = parse(post.default.render().html);

			const excerpt = post.metadata?.excerpt
				? parse(post.metadata.excerpt)
				: html.querySelector('p');

			const slug = filepath
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop();

			const isIndexFile = filepath.endsWith('/index.md');

			return {
				...post.metadata,
				categories: post.metadata?.categories ?? [],
				slug,
				isIndexFile,
				excerpt: {
					html: excerpt?.toString(),
					rawText: excerpt?.structuredText ?? excerpt?.toString()
				}
			};
		})
	);

	let sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories?.includes(category));
	}

	const getOgImage = (title: string) => {
    const params = new URLSearchParams({
      theme: 'light',
      md: '1',
      fontSize: '100px',
      images: 'https://assets.vercel.com/image/upload/front/assets/design/hyper-color-logo.svg'
    });

    const url = new URL(`https://og-image.vercel.app/${encodeURIComponent(title)}`);

    url.search = params.toString();

    return url.toString();
  };

	const formattedPosts = sortedPosts.map((post) => ({
		title: post.title,
		slug: `${post.slug}`,
		url: `/blog/${post.slug}`,
		excerpt: post.excerpt?.html ?? post.excerpt?.rawText ?? '',
		date: post.date,
		tags: post.tags,
		updated: post.updated,
		isIndexFile: post.isIndexFile,
		categories: post.categories,
		ogImage: getOgImage(post.title)
	}));

	return {
		posts: formattedPosts
	};
}

export async function getCategories() {
	const data = await fetchPosts({});

	const categories = data.posts.map((post) => post.categories).flat();

	return [...new Set(categories)];
}
