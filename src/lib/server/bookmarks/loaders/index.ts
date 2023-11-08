import { db } from '../../database/db';
import { selectBookmarks } from '../repositories/bookmark-repository';
import type { Bookmark } from '../types';

export async function getBookmarks(): Promise<Bookmark[]> {
  const bookmarks = await selectBookmarks(db);

  if (!bookmarks) {
    return [];
  }

  const refinedBookmarks: Bookmark[] = [];

  for (const bookmark of bookmarks) {
    const exists = refinedBookmarks.find((refinedBookmark) => refinedBookmark.resourceId === bookmark.id.toString());

    if (exists && bookmark.tagName) {
      exists.tags.push(bookmark.tagName);
      continue;
    }

    refinedBookmarks.push({
      resourceId: bookmark.id.toString(),
      name: bookmark.name,
      url: bookmark.url,
      tags: bookmark.tagName ? [bookmark.tagName] : [],
      searchTerms: [bookmark.name].toString(),
      about: {
        en: bookmark.enUsDescription,
        ptBr: bookmark.ptBrDescription,
      },
    });
  }

  return refinedBookmarks;
}
