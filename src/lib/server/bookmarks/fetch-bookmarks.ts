import { NOTION_BOOKMARKS_DATABASE_ID, NOTION_KEY } from '$env/static/private';
import { Client } from '@notionhq/client';
import { notionBookmarksResultSchema, type NotionBookmarkResult } from './types';

/**
 * Generate search terms for a bookmark
 *
 * @param bookmark Bookmark to generate search terms
 * @returns Search terms
 */
function generateSearchTerms(bookmark: NotionBookmarkResult): string {
	const searchTerms = [
		bookmark.properties.Name.title[0].plain_text,
		bookmark.properties.Tags.multi_select.map((tag) => tag.name),
		bookmark.properties.AboutEn.rich_text[0].plain_text,
		bookmark.properties.AboutPtBr.rich_text[0].plain_text
	];

	return searchTerms.flat().join(' ').toLowerCase();
}

export type Bookmark = {
	resourceId: string;
	name: string;
	url: string;
	about: {
		en: string;
		ptBr: string;
	};
	tags: string[];
	searchTerms: string;
};

/**
 * Fetch all bookmarks from Notion
 * @returns List of bookmarks
 */
export async function fetchBookmarks(): Promise<Bookmark[]> {
	const notion = new Client({ auth: NOTION_KEY });

	const notionQuery = await notion.databases.query({
		database_id: NOTION_BOOKMARKS_DATABASE_ID
	});

	const parsedResult = notionBookmarksResultSchema.safeParse(notionQuery);

	if (!parsedResult.success) {
		console.error('Error fetching bookmarks', parsedResult.error);
		return [];
	}

	const bookmarks = parsedResult.data.results.map((bookmark) => {
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
