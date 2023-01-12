import { db } from '$lib/config/firebase';
import { bookmarksDatabase, notion } from '$lib/config/notion';
import { addDoc, collection, doc, Firestore, getDocs, updateDoc } from 'firebase/firestore';
import type { BaseBookmark, Bookmark, QueryBookmarkDatabaseResponse } from './types';

async function addBookmarkToDatabase(db: Firestore, bookmark: BaseBookmark) {
	const bookmarksCol = collection(db, 'bookmarks');
	const docRef = await addDoc(bookmarksCol, bookmark);
	console.log('Document written with ID: ', docRef.id);
}

async function updateBookmarkInDatabase(db: Firestore, bookmark: Bookmark) {
	const bookmarksRef = doc(db, 'bookmarks', bookmark.id);

	await updateDoc(bookmarksRef, {
		resourceId: bookmark.resourceId,
		name: bookmark.name,
		url: bookmark.url,
		about: bookmark.about,
		tags: bookmark.tags
	});
}

async function getBookmarksFromDatabase(db: Firestore) {
	const bookmarksCol = collection(db, 'bookmarks');
	const bookmarkSnapshot = await getDocs(bookmarksCol);
	const bookmarkList = bookmarkSnapshot.docs.map((doc) => {
		const data = doc.data() as Bookmark;

		return {
			...data,
			id: doc.id
		};
	});

	return { metadata: bookmarkSnapshot.metadata, data: bookmarkList };
}

function fromDatabaseObjectToPOJO(data: any): Bookmark[] {
	return data.map((item: any) => ({
		...item,
		updatedAt: new Date(item.updatedAt ?? '').toISOString(),
		createdAt: new Date(item.createdAt ?? '').toISOString(),
		tags: item.tags
	}));
}

export async function getBookmarks() {
	const dataFromDatabase = await getBookmarksFromDatabase(db);

	dataFromDatabase.data.sort(
		(a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
	);

	const mostRecentBookmark = dataFromDatabase.data.at(0)?.updatedAt;

	// check if the most recent bookmark was updated in the last minutes
	const now = new Date().getTime();
	const lastUpdate = new Date(mostRecentBookmark ?? '').getTime();
	const minutesPassed = Math.floor((now - lastUpdate) / 60000);

	if (minutesPassed < 2) return fromDatabaseObjectToPOJO(dataFromDatabase.data);

	// if more than X minutes passed we try to talk with the notion api again
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

	bookmarks.forEach((bookmark) => {
		const alreadyExists = dataFromDatabase.data.find((b) => b.url === bookmark.url);

		if (alreadyExists) {
			return updateBookmarkInDatabase(db, {
				...alreadyExists,
				updatedAt: new Date().toISOString()
			});
		}

		addBookmarkToDatabase(db, {
			...bookmark,
			updatedAt: new Date().toISOString(),
			createdAt: new Date().toISOString()
		});
	});

	const updatedData = await getBookmarksFromDatabase(db);

	return fromDatabaseObjectToPOJO(updatedData.data);
}
