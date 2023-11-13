import { eq } from 'drizzle-orm';
import type { DrizzleDatabase } from '../../database/db';
import { bookmarkTable, bookmarkTagTable, bookmarkToTagTable, type BookmarkInsertSchema } from '../../database/schema';

export async function upsertBookmark(db: DrizzleDatabase, bookmarkData: BookmarkInsertSchema & { tags: number[] }) {
  try {
    const result = await db
      .insert(bookmarkTable)
      .values(bookmarkData)
      .returning({ insertedId: bookmarkTable.id })
      .onConflictDoUpdate({
        target: [bookmarkTable.name],
        set: {
          updatedAt: new Date(),
          name: bookmarkData.name,
          ptBrDescription: bookmarkData.ptBrDescription,
          enUsDescription: bookmarkData.enUsDescription,
          url: bookmarkData.url,
        },
      });

    const newBookmarkId = result[0].insertedId.toString();

    const tagsIds = bookmarkData.tags.map((tagId) => tagId.toString());

    tagsIds.forEach(async (tagId) => {
      await db
        .insert(bookmarkToTagTable)
        .values({ bookmarkId: parseInt(newBookmarkId), tagId: parseInt(tagId) })
        .execute();
    });

    return newBookmarkId;
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
        tagName: bookmarkTagTable.name,
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
