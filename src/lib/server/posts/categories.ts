import { AVAILABLE_POST_CATEGORIES } from '$/lib/assets/config';
import type { PostMetadata } from './fetch-posts';
import type { RawPostSchema } from './raw-post-schema';

/**
 * Sum up the posts metadata to get every unique category
 *
 * @param posts the posts metadata
 * @returns the list of categories from the posts metadata
 */
export function extractCategories(posts: Pick<RawPostSchema, 'categories'>[]): string[] {
	const categories = posts.map((post) => post.categories).flat();
	return [...new Set(categories)];
}

/**
 * Gets the posts metadata for a specific category
 *
 * @param posts the posts metadata
 * @param category the category to filter
 */
export function filterPostsByCategory(posts: PostMetadata[], category: string): PostMetadata[] {
	return posts.filter((post) => post.categories.includes(category));
}

export function isValidCategory(category: string) {
	return AVAILABLE_POST_CATEGORIES.includes(category.toLowerCase());
}