import { getPosts } from '$/lib/server/posts/services/get-posts';
import { getFeaturedProjects } from '$/lib/server/projects/services/get-feature-projects';
import { getProjects } from '$/lib/server/projects/services/get-projects';
import { error, redirect } from '@sveltejs/kit';
import { sql } from "@vercel/postgres";
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = await getPosts();

  const featuredPost = posts[0];

  const recentPosts = posts.splice(1, 3);

  const featuredProjects = getFeaturedProjects();

  const projects = await getProjects().catch(() => []);

  return { featuredProjects, projects, recentPosts, featuredPost };
};

export const actions: Actions = {
  // Send a message from the contact form
  sendMessage: async ({ request }) => {
    const formData = await request.formData();
    const formValueName = formData.get('name')
    const formValueEmail = formData.get('email');
    const formValueMessage = formData.get('message');

    if (!formValueName || !formValueEmail || !formValueMessage) {
      throw error(400, 'Missing form data');
    }

    const name = formValueName.toString();
    const email = formValueEmail.toString();
    const message = formValueMessage.toString();

    try {
      await sql`INSERT INTO messages (name, email, message) VALUES (${name}, ${email}, ${message})`;
    } catch (err) {
      console.error(err);
      throw error(500, 'Failed to send message');
    }
  },
  // Change the users theme based on the url and save that state in a cookie
  setTheme: async ({ cookies, url }) => {
    const theme = url.searchParams.get('theme');

    if (theme) {
      const fullYear = 60 * 60 * 24 * 365;

      cookies.set('theme', theme, {
        path: '/',
        maxAge: fullYear,
      });
    }

    redirectTo(url);
  },
  // Change the users language based on the url and save that state in a cookie
  setLocale: async ({ cookies, url }) => {
    const currentLanguageSetting = url.searchParams.get('lang');

    if (currentLanguageSetting) {
      cookies.set('lang', currentLanguageSetting);
    }

    redirectTo(url);
  },
};

function redirectTo(url: URL) {
  const redirectTo = url.searchParams.get('redirectTo') ?? '/';
  const doNotRedirect = url.searchParams.get('doNotRedirect') === 'true';

  if (doNotRedirect) return;

  if (redirectTo && redirectTo.startsWith('/')) {
    throw redirect(303, redirectTo);
  }

  throw redirect(303, '/');
}
