import { loadTranslations } from '$/lib/i18n';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (context) => {
  const pathname = context.url.pathname;
  const initLocale = context.data.currentLanguageSetting || 'en';
  await loadTranslations(initLocale, pathname);

  return { pathname };
};
