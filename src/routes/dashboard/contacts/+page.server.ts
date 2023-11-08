import { getContacts } from '$/lib/server/contact/loaders';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const contacts = await getContacts();
  return { contacts };
};
