import { GITHUB_OAUTH_COOKIE_NAME, auth, githubAuth } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { db } from '$/lib/server/database';
import { profile } from '$/lib/server/database/schema/profile';

export const GET: RequestHandler = async ({ cookies, url, locals }) => {
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');

	const storedState = cookies.get(GITHUB_OAUTH_COOKIE_NAME);

	if (!code || !state || state !== storedState) {
		throw new Response(null, { status: 401 });
	}

	try {
		const { existingUser, providerUser, createUser } = await githubAuth.validateCallback(code);

		const getUser = async () => {
			if (existingUser) return existingUser;

			const newUser = await createUser({
				id: providerUser.id.toString(),
				role: 'USER',
				banned: false,
				email: providerUser.email,
				username: providerUser.login
			});

			await db
				.insert(profile)
				.values({
					userId: newUser.id,
					avatarUrl: providerUser.avatar_url,
					githubProfileUrl: providerUser.html_url
				})
				.execute()
				.catch(console.error);

			return newUser;
		};

		const user = await getUser();

		const session = await auth.createSession(user.id);

		locals.auth.setSession(session);
	} catch (error) {
		console.log(error);
		return new Response(null, {
			status: 500
		});
	}

	if (url.searchParams.has('redirect')) {
		const redirectUrl = url.searchParams.get('redirect');
		throw redirect(302, '/' + redirectUrl);
	}

	throw redirect(302, '/');
};
