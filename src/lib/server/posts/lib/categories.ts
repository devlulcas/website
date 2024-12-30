import { availablePostCategories } from '$/lib/assets/config/website';
import type { RawPostSchema } from '../schemas/raw-post-schema';
import type { PostMetadata } from '../types';

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
	const lowerCaseCategory = category.toLowerCase();

	const lowerCaseCategories = posts
		.map((post) => post.categories.map((cat) => cat.toLowerCase()))
		.flat();

	if (!lowerCaseCategories.includes(lowerCaseCategory)) {
		return [];
	}

	return posts.filter((post) =>
		post.categories.map((cat) => cat.toLowerCase()).includes(lowerCaseCategory)
	);
}

export function isValidCategory(category: string) {
	return availablePostCategories.includes(category.toLowerCase());
}
