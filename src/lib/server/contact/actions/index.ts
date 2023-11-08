import { fail, type Action } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { db } from '../../database/db';
import { contactInsertSchema } from '../../database/schema';
import { insertContact } from '../repositories/contact-repository';

export const createContact: Action = async ({ request }) => {
  const formData = await request.formData();

  const formDataResult = zfd.formData(contactInsertSchema).safeParse(formData);

  if (!formDataResult.success) {
    return fail(400, { message: 'Invalid form data', success: false });
  }

  const newContact = await insertContact(db, formDataResult.data);

  if (!newContact) {
    return fail(500, { message: 'Error creating contact data', success: false });
  }

  return { message: `Contact with ID ${newContact} was created/updated`, success: true };
};
