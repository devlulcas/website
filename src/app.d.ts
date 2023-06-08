// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { NewUser } from './lib/server/database/schema/user';

// and what to do when importing types
declare global {
	namespace App {
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
	}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/auth').Auth;
		type UserAttributes = {
			userId: NewUser['id'];
			username: NewUser['username'];
			role: NewUser['role'];
			banned: NewUser['banned'];
			email: NewUser['email'];
		};
	}
}
