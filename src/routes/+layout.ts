import { loadTranslations } from '$/lib/i18n';
import type { LayoutLoad } from './$types';
import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit';

type DatabaseDefinitions = unknown;

export const load: LayoutLoad = async (context) => {
  // supabase
  context.depends('supabase:auth');

  const supabase = createSupabaseLoadClient<DatabaseDefinitions>({
    supabaseUrl: PUBLIC_SUPABASE_URL,
    supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
    event: { fetch },
    serverSession: context.data.session,
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // i18n
  const pathname = context.url.pathname;
  const initLocale = context.data.currentLanguageSetting || 'en';
  await loadTranslations(initLocale, pathname);

  return { pathname, supabase, session };
};
