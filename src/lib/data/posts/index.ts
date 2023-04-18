import { z } from 'zod';
import {
	rawPostMetadataSchema,
	type FullPostMetadata,
	type RawPostMetadata,
	type RawPostMetadataWithSlug
} from './types';
import { fromFilepathToPostSlug, fromRawPostMetadataToFullPostMetadata } from './mappers';

/**
 * Fetches all the posts metadata. It also adds the slug and the SEO metadata
 *
 * @returns all the posts metadata
 */
export async function getPosts(): Promise<FullPostMetadata[]> {
	const postFiles = import.meta.glob('/posts/**/*.md');

	const postMetadataPromises: Promise<RawPostMetadataWithSlug>[] = Object.entries(postFiles).map(
		async ([filepath, resolver]) => {
			const resolverData = await resolver();

			const resolverPostResult = z.object({
				metadata: z.unknown(),
				default: z.object({
					render: z.function().returns(
						z.object({
							html: z.string()
						})
					)
				})
			});

			const resolvedPost = resolverPostResult.parse(resolverData);

			const postMetadata = rawPostMetadataSchema.parse(resolvedPost.metadata);

			const postSlug = fromFilepathToPostSlug(filepath);

			return { ...postMetadata, slug: postSlug };
		}
	);

	const postsMetadata = await Promise.all(postMetadataPromises);

	return postsMetadata.map(fromRawPostMetadataToFullPostMetadata);
}

/**
 * Sum up the posts metadata to get every unique category
 *
 * @param posts the posts metadata
 * @returns the list of categories from the posts metadata
 */
export function getCategories(posts: RawPostMetadata[]): string[] {
	const categories = posts.map((post) => post.categories).flat();
	return [...new Set(categories)];
}

/**
 * Sort the posts by date
 *
 * @param posts the posts metadata
 * @returns the posts metadata sorted by date
 */
export function sortPostByDate(posts: FullPostMetadata[]): FullPostMetadata[] {
	return posts.sort((a, b) => {
		const aDate = new Date(a.updated || a.date);
		const bDate = new Date(b.updated || b.date);
		return aDate.getTime() - bDate.getTime();
	});
}

/**
 * Gets the posts metadata for a specific category
 *
 * @param posts the posts metadata
 * @param category the category to filter
 */
export function getPostsByCategory(
	posts: FullPostMetadata[],
	category: string
): FullPostMetadata[] {
	return posts.filter((post) => post.categories.includes(category));
}

/**
 * Gets the posts metadata for a specific tag
 *
 * @param posts the posts metadata
 * @param tag the tag to filter
 */
export function getPostsByTag(posts: FullPostMetadata[], tag: string): FullPostMetadata[] {
	return posts.filter((post) => post.tags.includes(tag));
}
