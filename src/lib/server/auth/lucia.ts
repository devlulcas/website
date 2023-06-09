import { dev } from '$app/environment';
import lucia from 'lucia-auth';
import { sveltekit } from 'lucia-auth/middleware';
import { planetscale } from '@lucia-auth/adapter-mysql';
import { connection } from '../database';

export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: planetscale(connection),
	transformDatabaseUser: (userData) => {
		return {
			userId: userData.id,
			email: userData.email,
			role: userData.role,
			username: userData.username,
			banned: userData.banned
		};
	}
});
