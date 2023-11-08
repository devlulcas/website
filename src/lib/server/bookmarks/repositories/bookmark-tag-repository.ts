import { asc, ilike } from 'drizzle-orm';
import type { DrizzleDatabase } from '../../database/db';
import { bookmarkTagTable, type BookmarkTagInsertSchema } from '../../database/schema';

export async function upsertBookmarkTag(db: DrizzleDatabase, bookmarkTagData: BookmarkTagInsertSchema) {
  try {
    const result = await db
      .insert(bookmarkTagTable)
      .values(bookmarkTagData)
      .returning({ insertedId: bookmarkTagTable.id })
      .onConflictDoUpdate({
        target: [bookmarkTagTable.updatedAt, bookmarkTagTable.name],
        set: { updatedAt: new Date(), name: bookmarkTagData.name },
      });

    return result[0].insertedId.toString();
  } catch (error) {
    console.error('upsertBookmarkTag', error);
    return null;
  }
}

export async function selectBookmarkTagByName(db: DrizzleDatabase, name: string) {
  try {
    const result = await db
      .select()
      .from(bookmarkTagTable)
      .where(ilike(bookmarkTagTable.name, name))
      .orderBy(asc(bookmarkTagTable.name))
      .execute();

    return result;
  } catch (error) {
    console.error('selectBookmarkTagByName', error);
    return null;
  }
}

export function selectBookmarkTags(db: DrizzleDatabase) {
  try {
    const result = db.select().from(bookmarkTagTable).orderBy(asc(bookmarkTagTable.name));

    return result;
  } catch (error) {
    console.error('selectBookmarkTags', error);
    return null;
  }
}
