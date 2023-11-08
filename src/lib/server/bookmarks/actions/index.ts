import { fail, type Action } from '@sveltejs/kit';
import { zfd } from 'zod-form-data';
import { db } from '../../database/db';
import { bookmarkInsertSchema, bookmarkTagInsertSchema } from '../../database/schema';
import { upsertBookmark } from '../repositories/bookmark-repository';
import { upsertBookmarkTag } from '../repositories/bookmark-tag-repository';

export const createOrUpdateBookmarkTag: Action = async ({ request }) => {
  const formData = await request.formData();

  const formDataResult = zfd.formData(bookmarkTagInsertSchema).safeParse(formData);

  if (!formDataResult.success) {
    return fail(400, { message: 'Invalid form data', success: false });
  }

  const newTagId = await upsertBookmarkTag(db, formDataResult.data);

  if (!newTagId) {
    return fail(500, { message: 'Error creating/updating tag', success: false });
  }

  return { message: `Bookmark tag with ID ${newTagId} was created/updated`, success: true };
};

export const createOrUpdateBookmark: Action = async ({ request }) => {
  const formData = await request.formData();

  const upsertBookmarkSchema = bookmarkInsertSchema.extend({
    tags: zfd.repeatableOfType(zfd.text()),
  });

  const formDataResult = zfd.formData(upsertBookmarkSchema).safeParse(formData);

  if (!formDataResult.success) {
    return fail(400, { message: 'Invalid form data', success: false });
  }

  const newBookmarkId = await upsertBookmark(db, {
    ...formDataResult.data,
    tags: formDataResult.data.tags.map((tag) => parseInt(tag)),
  });

  if (!newBookmarkId) {
    return fail(500, { message: 'Error creating/updating bookmark', success: false });
  }

  return { message: `Bookmark with ID ${newBookmarkId} was created/updated`, success: true };
};
