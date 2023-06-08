import { github } from '@lucia-auth/oauth/providers';
import { auth } from './lucia';
import { website } from '$/lib/config/website';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';

export const GITHUB_OAUTH_COOKIE_NAME = 'github_oauth_state';
export const githubAuth = github(auth, {
	clientId: GITHUB_CLIENT_ID,
	clientSecret: GITHUB_CLIENT_SECRET,
	redirectUri: website.auth.github.callbackUrl,
	scope: ['user']
});
