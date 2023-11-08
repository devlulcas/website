import type { DrizzleDatabase } from '../../database/db';
import { contactTable, type ContactInsertSchema } from '../../database/schema';

export async function insertContact(db: DrizzleDatabase, contactData: ContactInsertSchema) {
  try {
    const result = await db.insert(contactTable).values(contactData).returning({ id: contactTable.id }).execute();
    return result[0].id;
  } catch (error) {
    console.error('insertContact', error);
    return null;
  }
}

export async function selectContacts(db: DrizzleDatabase) {
  try {
    const query = db
      .select({
        id: contactTable.id,
        name: contactTable.name,
        email: contactTable.email,
        message: contactTable.message,
        createdAt: contactTable.createdAt,
        updatedAt: contactTable.updatedAt,
      })
      .from(contactTable);

    const result = await query.execute();

    return result;
  } catch (error) {
    console.error('selectContacts', error);
    return null;
  }
}
