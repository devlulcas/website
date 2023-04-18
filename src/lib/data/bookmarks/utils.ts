import type { BookmarkResponse } from './types';

/**
 * Generate search terms for a bookmark
 * @param bookmark Bookmark to generate search terms
 * @returns Search terms
 */
export function generateSearchTerms(bookmark: BookmarkResponse) {
	const searchTerms = [
		bookmark.properties.Name.title[0].plain_text,
		bookmark.properties.Tags.multi_select.map((tag) => tag.name),
		bookmark.properties.AboutEn.rich_text[0].plain_text,
		bookmark.properties.AboutPtBr.rich_text[0].plain_text
	];

	return searchTerms.flat().join(' ').toLowerCase();
}
