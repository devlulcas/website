import { bookmarksDatabase, notion } from '$lib/config/notion';
import type { Bookmark, QueryBookmarkDatabaseResponse } from './types';
import { generateSearchTerms } from './utils';

/**
 * Fetch all bookmarks from Notion
 * @returns List of bookmarks
 */
export async function getBookmarks(): Promise<Bookmark[]> {
	const notionQuery = await notion.databases.query({
		database_id: bookmarksDatabase
	});

	const data = notionQuery as unknown as QueryBookmarkDatabaseResponse;

	const bookmarks: (Bookmark | undefined)[] = data.results.map((bookmark) => {
		if (!bookmark.properties.URL.url) return;
		if (bookmark.properties.Name.title.length < 1) return;

		return {
			resourceId: bookmark.id,
			url: bookmark.properties.URL.url,
			name: bookmark.properties.Name.title[0].plain_text,
			tags: bookmark.properties.Tags.multi_select.map((tag) => tag.name),
			about: {
				en: bookmark.properties.AboutEn.rich_text[0].plain_text,
				ptBr: bookmark.properties.AboutPtBr.rich_text[0].plain_text
			},
			searchTerms: generateSearchTerms(bookmark)
		};
	});

	return bookmarks.filter(Boolean) as Bookmark[];
}
