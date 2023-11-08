import { db } from '../../database/db';
import { selectContacts } from '../repositories/contact-repository';
import type { Contact } from '../types';

export async function getContacts(): Promise<Contact[]> {
  const contacts = await selectContacts(db);
 
  if (!contacts) {
    return [];
  }

  return contacts;
}
