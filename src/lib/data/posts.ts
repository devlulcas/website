import { parse } from 'node-html-parser';
import type { Post } from './types/types';
import { z } from 'zod';

const metadataSchema = z.object({
	slug: z.string(),
	title: z.string(),
	tags: z.array(z.string()).nullable().optional(),
	categories: z.array(z.string()).nullable().optional(),
	date: z.string(),
	updated: z.string().nullable().optional(),
	excerpt: z.string(),
	lang: z.union([z.literal('en'), z.literal('pt-br'), z.literal('es')]).optional()
});

export type Metadata = z.infer<typeof metadataSchema>;

type FetchPostsResult = Promise<{ posts: Post[] }>;

type ResolverResult = {
	metadata: unknown;
	default: { render: () => { html: string } };
};

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
			const post = (await resolver()) as ResolverResult;

			const metadata = metadataSchema.parse(post.metadata);

			const html = parse(post.default.render().html);

			const excerpt = metadata?.excerpt ? parse(metadata.excerpt) : html.querySelector('p');

			const filepathSlug = filepath
				.replace(/(\/index)?\.md/, '')
				.split('/')
				.pop();

			const slug = metadata.slug ?? filepathSlug;

			const isIndexFile = filepath.endsWith('/index.md');

			return {
				...metadata,
				categories: metadata.categories ?? [],
				slug,
				isIndexFile,
				excerpt: {
					html: excerpt?.toString(),
					rawText: excerpt?.structuredText ?? excerpt?.toString()
				}
			};
		})
	);

	let sortedPosts = posts.sort(sortPostByDate);

	if (category) {
		sortedPosts = sortedPosts.filter((post) => post.categories?.includes(category));
	}

	const formattedPosts = sortedPosts.map((post) => {
		const excerpt = post.excerpt?.html ?? post.excerpt?.rawText ?? '';

		return {
			title: post.title,
			slug: post.slug,
			url: '/blog/' + post.slug,
			excerpt: excerpt,
			date: post.date,
			tags: post.tags,
			updated: post.updated,
			isIndexFile: post.isIndexFile,
			categories: post.categories,
			ogImage: getOgImage(post.title)
		};
	}) satisfies Post[];

	return {
		posts: formattedPosts
	};
}

export async function getCategories() {
	const data = await fetchPosts({});

	const categories = data.posts.map((post) => post.categories).flat();

	return [...new Set(categories)];
}

function getOgImage(title: string) {
	const params = new URLSearchParams({
		theme: 'light',
		md: '1',
		fontSize: '100px',
		images: 'https://assets.vercel.com/image/upload/front/assets/design/hyper-color-logo.svg'
	});

	const url = new URL(`https://og-image.vercel.app/${encodeURIComponent(title)}`);

	url.search = params.toString();

	return url.toString();
}

type Dated = {
	date: string;
	updated?: string | null | undefined;
};

function sortPostByDate(a: Dated, b: Dated) {
	const aDate = new Date(a.updated || a.date);
	const bDate = new Date(b.updated || b.date);
	return aDate.getTime() - bDate.getTime();
}
