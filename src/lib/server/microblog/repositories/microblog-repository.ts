import { eq, isNull } from 'drizzle-orm';
import type { DrizzleDatabase } from '../../database/db';
import {
  microblogTable,
  microblogTagTable,
  microblogToTagTable,
  type MicroblogInsertSchema,
} from '../../database/schema';

export async function upsertMicroblog(db: DrizzleDatabase, microblogData: MicroblogInsertSchema & { tags: number[] }) {
  try {
    db.transaction(async (tx) => {
      try {
        const result = await tx
          .insert(microblogTable)
          .values(microblogData)
          .returning({ insertedId: microblogTable.id })
          .onConflictDoUpdate({
            target: [microblogTable.id],
            set: {
              updatedAt: new Date(),
              title: microblogData.title,
              rawContent: microblogData.rawContent,
              htmlContent: microblogData.htmlContent,
              language: microblogData.language,
            },
          });

        const newMicroblogId = result[0].insertedId.toString();

        const tagsIds = microblogData.tags.map((tagId) => tagId.toString());

        tagsIds.forEach(async (tagId) => {
          await tx
            .insert(microblogToTagTable)
            .values({ microblogId: parseInt(newMicroblogId), tagId: parseInt(tagId) })
            .execute();
        });
      } catch (error) {
        tx.rollback();
        throw error;
      }
    });
  } catch (error) {
    console.error('upsertMicroblog', error);
    return null;
  }
}

export async function selectMicroblogs(db: DrizzleDatabase) {
  try {
    const query = db
      .select({
        id: microblogTable.id,
        title: microblogTable.title,
        rawContent: microblogTable.rawContent,
        htmlContent: microblogTable.htmlContent,
        language: microblogTable.language,
        createdAt: microblogTable.createdAt,
        updatedAt: microblogTable.updatedAt,
        tagName: microblogTagTable.name,
      })
      .from(microblogTable)
      .leftJoin(microblogToTagTable, eq(microblogTable.id, microblogToTagTable.microblogId))
      .leftJoin(microblogTagTable, eq(microblogToTagTable.tagId, microblogTagTable.id))
      .where(isNull(microblogTable.deletedAt));

    const result = await query.execute();

    return result;
  } catch (error) {
    console.error('selectMicroblogs', error);
    return null;
  }
}

export async function selectMicroblogById(db: DrizzleDatabase, id: number) {
  try {
    const query = db
      .select({
        id: microblogTable.id,
        title: microblogTable.title,
        rawContent: microblogTable.rawContent,
        htmlContent: microblogTable.htmlContent,
        language: microblogTable.language,
        createdAt: microblogTable.createdAt,
        updatedAt: microblogTable.updatedAt,
        tagName: microblogTagTable.name,
      })
      .from(microblogTable)
      .leftJoin(microblogToTagTable, eq(microblogTable.id, microblogToTagTable.microblogId))
      .leftJoin(microblogTagTable, eq(microblogToTagTable.tagId, microblogTagTable.id))
      .where(eq(microblogTable.id, id))
      .limit(1);

    const result = await query.execute();

    return result;
  } catch (error) {
    console.error('selectMicroblogs', error);
    return null;
  }
}
