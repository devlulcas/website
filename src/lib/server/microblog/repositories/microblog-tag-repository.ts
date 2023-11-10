import { asc, ilike } from 'drizzle-orm';
import type { DrizzleDatabase } from '../../database/db';
import { microblogTagTable, type MicroblogTagInsertSchema } from '../../database/schema';

export async function upsertMicroblogTag(db: DrizzleDatabase, microblogTagData: MicroblogTagInsertSchema) {
  try {
    const result = await db
      .insert(microblogTagTable)
      .values(microblogTagData)
      .returning({ insertedId: microblogTagTable.id })
      .onConflictDoUpdate({
        target: [microblogTagTable.name],
        set: { updatedAt: new Date(), name: microblogTagData.name },
      });

    return result[0].insertedId.toString();
  } catch (error) {
    console.error('upsertMicroblogTag', error);
    return null;
  }
}

export async function selectMicroblogTagByName(db: DrizzleDatabase, name: string) {
  try {
    const result = await db
      .select()
      .from(microblogTagTable)
      .where(ilike(microblogTagTable.name, name))
      .orderBy(asc(microblogTagTable.name))
      .execute();

    return result;
  } catch (error) {
    console.error('selectMicroblogTagByName', error);
    return null;
  }
}

export function selectMicroblogTags(db: DrizzleDatabase) {
  try {
    const result = db.select().from(microblogTagTable).orderBy(asc(microblogTagTable.name));
    return result;
  } catch (error) {
    console.error('selectMicroblogTags', error);
    return null;
  }
}
