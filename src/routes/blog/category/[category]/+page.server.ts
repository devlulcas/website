import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { getPosts } from "$/lib/server/posts/services/get-posts";
import { filterPostsByCategory } from "$/lib/server/posts/lib/categories";

export const load: PageServerLoad = async ({ params }) => {
  const category = params.category;

  const posts = await getPosts();

  const filteredPosts = filterPostsByCategory(posts, category);

  if (filteredPosts.length === 0) {
    error(404, `Category "${category}" not found`);
  }

  return { posts: filteredPosts, category };
};
