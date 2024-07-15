import { getBookmarks } from "$/lib/server/bookmarks/loaders";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const bookmarks = await getBookmarks();
  return { bookmarks };
};
