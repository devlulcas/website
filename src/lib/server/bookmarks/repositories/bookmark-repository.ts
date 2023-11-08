import { eq } from 'drizzle-orm';
import type { DrizzleDatabase } from '../../database/db';
import { bookmarkTable, bookmarkTagTable, bookmarkToTagTable, type BookmarkInsertSchema } from '../../database/schema';

export async function upsertBookmark(db: DrizzleDatabase, bookmarkData: BookmarkInsertSchema & { tags: number[] }) {
	try {
		db.transaction(async (tx) => {
			try {
				const result = await tx
					.insert(bookmarkTable)
					.values(bookmarkData)
					.returning({ insertedId: bookmarkTable.id })
					.onConflictDoUpdate({
						target: [bookmarkTable.updatedAt, bookmarkTable.name],
						set: { updatedAt: new Date(), name: bookmarkData.name }
					});

				const newBookmarkId = result[0].insertedId.toString();

				const relationCreatedSuccessfully = await relateTagsToBookmark(
					tx,
					newBookmarkId,
					bookmarkData.tags.flatMap((tag) => tag.toString())
				);

				// Bubble up error if relation creation failed
				if (!relationCreatedSuccessfully) throw new Error('Error creating bookmark relation with tags');
			} catch (error) {
				tx.rollback();
				throw error;
			}
		});
	} catch (error) {
		console.error('upsertBookmark', error);
		return null;
	}
}

export async function selectBookmarks(db: DrizzleDatabase) {
	try {
		const query = db
		.select({
			id: bookmarkTable.id,
			name: bookmarkTable.name,
			ptBrDescription: bookmarkTable.ptBrDescription,
			enUsDescription: bookmarkTable.enUsDescription,
			url: bookmarkTable.url,
			createdAt: bookmarkTable.createdAt,
			updatedAt: bookmarkTable.updatedAt,
			tagName: bookmarkTagTable.name
		})
		.from(bookmarkTable)
		.leftJoin(bookmarkToTagTable, eq(bookmarkTable.id, bookmarkToTagTable.bookmarkId))
		.leftJoin(bookmarkTagTable, eq(bookmarkToTagTable.tagId, bookmarkTagTable.id));

		const result = await query.execute();

		return result;
	} catch (error) {
		console.error('selectBookmarks', error);
		return null;
	}
}

export async function relateTagsToBookmark(db: DrizzleDatabase, bookmarkId: string, tagIds: string[]) {
	try {
		await db.transaction(async (tx) => {
			const queries = tagIds.map((tagId) => {
				return tx
					.insert(bookmarkToTagTable)
					.values({ bookmarkId: parseInt(bookmarkId), tagId: parseInt(tagId) })
					.execute();
			});

			await Promise.all(queries).catch((error) => {
				console.error('relateTagsToBookmark', error);
				tx.rollback();
				throw error;
			});
		});

		return true;
	} catch (error) {
		console.error('relateTagsToBookmark', error);
		return null;
	}
}
