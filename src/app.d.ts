import { createServerClient } from '@supabase/ssr';
import type { Session } from '@supabase/supabase-js';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			supabase: ReturnType<typeof createServerClient>;
			getSession: () => Promise<Session | null>
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };

