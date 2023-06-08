import { dev } from '$app/environment';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { planetscale } from '@lucia-auth/adapter-mysql';
import { connection } from '../database';

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: planetscale(connection),
	transformDatabaseUser: (user) => ({
		id: user.id,
		role: user.role,
		banned: user.banned,
		email: user.email,
		avatarUrl: user.avatarUrl,
		githubProfileUrl: user.githubProfileUrl,
		username: user.username
	})
});
