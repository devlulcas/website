import { bookmarksDatabase, notion } from '$lib/config/notion';
import type { Bookmark, QueryBookmarkDatabaseResponse } from './types';

export async function getBookmarks(): Promise<Bookmark[]> {
	const notionQuery = await notion.databases.query({
		database_id: bookmarksDatabase
	});

	const data = notionQuery as unknown as QueryBookmarkDatabaseResponse;

	const bookmarks = data.results.map((bookmark) => {
		return {
			resourceId: bookmark.id,
			url: bookmark.properties.URL.url,
			name: bookmark.properties.Name.title[0].plain_text,
			about: bookmark.properties.About.rich_text[0].plain_text,
			tags: bookmark.properties.Tags.multi_select.map((tag) => tag.name)
		};
	});

	return bookmarks.map((bookmark) => ({
		...bookmark,
		searchTerms: `${bookmark.name} ${bookmark.about} ${bookmark.tags.join(' ')}`
	}));
}
