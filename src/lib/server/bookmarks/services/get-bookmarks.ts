import {
	PRIVATE_NOTION_API_KEY,
	PRIVATE_NOTION_DATABASE_ID,
	PRIVATE_NOTION_VERSION
} from '$env/static/private';
import { firestore } from '../../database/lib/firebase';
import type { Bookmark } from '../types/bookmark';
import type { NotionBookmarkDatabase } from '../types/notion-bookmark-database';

function getNotionHeaders() {
	const headers = new Headers();

	headers.set('Authorization', 'Bearer ' + PRIVATE_NOTION_API_KEY);
	headers.set('Notion-Version', PRIVATE_NOTION_VERSION);
	headers.set('Content-Type', 'application/json');

	return headers;
}

function isNotionBookmarkDatabase(json: unknown): json is NotionBookmarkDatabase {
	return json !== null && typeof json === 'object' && 'results' in json;
}

async function getBookmarksFromNotion(): Promise<Bookmark[]> {
	try {
		const url = `https://api.notion.com/v1/databases/${PRIVATE_NOTION_DATABASE_ID}/query`;

		const response = await fetch(url, {
			method: 'POST',
			headers: getNotionHeaders()
		});

		if (!response.ok) {
			console.error('Notion API error', await response.json());
			return [];
		}

		const json = await response.json();

		if (!isNotionBookmarkDatabase(json)) {
			console.error('Notion API error', json);
			return [];
		}

		const bookmarks: Bookmark[] = [];

		for (const result of json.results) {
			if (!result.properties.name.title.length) {
				continue;
			}

			const resourceId = result.id;
			const name = result.properties.name.title[0].plain_text;
			const url = result.properties.url.url;
			const aboutInEnglish = result.properties.about_en.rich_text[0].plain_text;
			const aboutInPortuguese = result.properties.about_pt_br.rich_text[0].plain_text;
			const tags = result.properties.tags.multi_select.map((tag) => tag.name);
			const searchTerms = [name, aboutInEnglish, aboutInPortuguese, ...tags]
				.join(' ')
				.toLowerCase();

			const now = new Date();

			bookmarks.push({
				resourceId,
				name,
				url,
				tags,
				searchTerms,
				about: {
					en: aboutInEnglish,
					ptBr: aboutInPortuguese
				},
				updatedAt: now.toISOString()
			});
		}

		return bookmarks;
	} catch (error) {
		console.error(error);
		return [];
	}
}

async function getBookmarksFromFirestore(): Promise<Bookmark[]> {
	const bookmarks = await firestore.collection('bookmarks').get();

	const data = bookmarks.docs.map((doc) => doc.data() as Bookmark);

	return data;
}

async function replaceFirestoreBookmarks(bookmarks: Bookmark[]) {
	const batch = firestore.batch();

	for (const bookmark of bookmarks) {
		batch.set(firestore.collection('bookmarks').doc(bookmark.resourceId), bookmark);
	}

	await batch.commit();

	return bookmarks;
}

export async function getBookmarks(): Promise<Bookmark[]> {
	const firestoreBookmarks = await getBookmarksFromFirestore();
	const now = new Date();
	const timeout = 24 * 60 * 60 * 1000 * 7; // 7 days

	const isCached = firestoreBookmarks.every((bookmark) => {
		return now.getTime() - new Date(bookmark.updatedAt).getTime() < timeout;
	});

	if (isCached) {
		return firestoreBookmarks;
	}

	const notionBookmarks = await getBookmarksFromNotion();

	const bookmarks = await replaceFirestoreBookmarks(notionBookmarks);

	return bookmarks;
}
