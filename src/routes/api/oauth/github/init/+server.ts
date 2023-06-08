import { GITHUB_OAUTH_COOKIE_NAME, githubAuth } from '$lib/server/auth';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	const [url, state] = await githubAuth.getAuthorizationUrl();

	cookies.set(GITHUB_OAUTH_COOKIE_NAME, state, {
		path: '/',
		maxAge: 60 * 60
	});

	return new Response(null, {
		status: 302,
		headers: {
			location: url.toString()
		}
	});
};
