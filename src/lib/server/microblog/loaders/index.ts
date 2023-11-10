import { error } from '@sveltejs/kit';
import { db } from '../../database/db';
import { selectMicroblogs } from '../repositories/microblog-repository';
import { selectMicroblogTags } from '../repositories/microblog-tag-repository';
import type { MicroblogPost } from '../types';

export async function getMicroblogs(): Promise<MicroblogPost[]> {
  const microblogs = await selectMicroblogs(db);

  if (!microblogs) {
    return [];
  }

  const refinedMicroblogs: MicroblogPost[] = [];

  for (const microblog of microblogs) {
    const exists = refinedMicroblogs.find((refinedMicroblog) => refinedMicroblog.id === microblog.id.toString());

    if (exists && microblog.tagName) {
      exists.tags.push(microblog.tagName);
      continue;
    }

    refinedMicroblogs.push({
      id: microblog.id.toString(),
      tags: microblog.tagName ? [microblog.tagName] : [],
      title: microblog.title,
      htmlContent: microblog.htmlContent,
      searchTerms: `${microblog.title} ${microblog.rawContent}`,
      createdAt: microblog.createdAt,
      updatedAt: microblog.updatedAt,
      language: microblog.language === 'en' ? 'en' : 'pt-br',
    });
  }

  return refinedMicroblogs;
}

export async function getMicroblogById(): Promise<MicroblogPost & { rawContent: string }> {
  const microblogs = await selectMicroblogs(db);

  if (!microblogs) {
    throw error(404, 'Microblog not found');
  }

  const refinedMicroblogs: (MicroblogPost & { rawContent: string })[] = [];

  for (const microblog of microblogs) {
    const exists = refinedMicroblogs.find((refinedMicroblog) => refinedMicroblog.id === microblog.id.toString());

    if (exists && microblog.tagName) {
      exists.tags.push(microblog.tagName);
      continue;
    }

    refinedMicroblogs.push({
      id: microblog.id.toString(),
      tags: microblog.tagName ? [microblog.tagName] : [],
      title: microblog.title,
      htmlContent: microblog.htmlContent,
      rawContent: microblog.rawContent,
      searchTerms: `${microblog.title} ${microblog.rawContent}`,
      createdAt: microblog.createdAt,
      updatedAt: microblog.updatedAt,
      language: microblog.language === 'en' ? 'en' : 'pt-br',
    });
  }

  return refinedMicroblogs[0];
}

export async function getMicroblogTags(): Promise<{ id: string; name: string }[]> {
  const tags = await selectMicroblogTags(db);

  if (!tags) {
    return [];
  }

  return tags.map((tag) => ({ id: tag.id.toString(), name: tag.name }));
}
