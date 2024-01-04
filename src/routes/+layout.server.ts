import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (context) => {
  const currentLanguageSetting = context.cookies.get('lang');
  return { currentLanguageSetting };
};
