import type { NotionBookmarksResultSchema } from "../schemas/notion-bookmarks-result-schema";

export type NotionBookmarkResult = NotionBookmarksResultSchema['results'][0];

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
