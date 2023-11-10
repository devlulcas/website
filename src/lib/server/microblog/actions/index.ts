import { fail, type Action } from '@sveltejs/kit';
import { compile } from 'mdsvex';
import { zfd } from 'zod-form-data';
import { db } from '../../database/db';
import { microblogInsertSchema, microblogTagInsertSchema, type MicroblogInsertSchema } from '../../database/schema';
import { detectLanguage } from '../../posts/lib/detect-language';
import { upsertMicroblog } from '../repositories/microblog-repository';
import { upsertMicroblogTag } from '../repositories/microblog-tag-repository';

export const createOrUpdateMicroblogTag: Action = async ({ request }) => {
  const formData = await request.formData();

  const formDataResult = zfd.formData(microblogTagInsertSchema).safeParse(formData);

  if (!formDataResult.success) {
    return fail(400, { microblogTags: { message: 'Invalid form data', success: false } });
  }

  const newTagId = await upsertMicroblogTag(db, formDataResult.data);

  if (!newTagId) {
    return fail(500, { microblogTags: { message: 'Error creating/updating tag', success: false } });
  }

  return { microblogTags: { message: `Microblog tag with ID ${newTagId} was created/updated`, success: true } };
};

export const createOrUpdateMicroblog: Action = async ({ request }) => {
  const formData = await request.formData();

  const upsertMicroblogSchema = microblogInsertSchema.omit({ htmlContent: true, language: true }).extend({
    tags: zfd.repeatableOfType(zfd.text()),
  });

  const formDataResult = zfd.formData(upsertMicroblogSchema).safeParse(formData);

  if (!formDataResult.success) {
    return fail(400, { message: 'Invalid form data', success: false });
  }

  const processedContent = await compile(formDataResult.data.rawContent);

  if (!processedContent) {
    return fail(500, { message: 'Error processing content', success: false });
  }

  const language = detectLanguage(formDataResult.data.rawContent);

  const data: MicroblogInsertSchema & { tags: number[] } = {
    ...formDataResult.data,
    language: language.code,
    htmlContent: processedContent.code,
    tags: formDataResult.data.tags.map((tag) => parseInt(tag)),
  };

  const newMicroblogId = await upsertMicroblog(db, data);

  if (!newMicroblogId) {
    return fail(500, { message: 'Error creating/updating microblog', success: false });
  }

  return { message: `Microblog with ID ${newMicroblogId} was created/updated`, success: true };
};
