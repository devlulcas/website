// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		auth: import('lucia-auth').AuthRequest;
	}
	// interface PageData {}
	// interface Platform {}
}

/// <reference types="lucia-auth" />
declare global {
	namespace Lucia {
		type Auth = import('$lib/server/auth').Auth;
		type UserAttributes = {
			username: string;
			roles: Role[];
			email: string;
			name?: string;
		};
	}
}
