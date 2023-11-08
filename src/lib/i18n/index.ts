import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
  loaders: [
    {
      locale: 'en',
      key: 'common',
      loader: async () => (await import('./en/common.json')).default,
    },
    {
      locale: 'en',
      key: 'home',
      loader: async () => (await import('./en/home.json')).default,
    },
    {
      locale: 'en',
      key: 'about',
      loader: async () => (await import('./en/about.json')).default,
    },
    {
      locale: 'en',
      key: 'bookmarks',
      loader: async () => (await import('./en/bookmarks.json')).default,
    },
    {
      locale: 'en',
      key: 'blog',
      loader: async () => (await import('./en/blog.json')).default,
    },
    {
      locale: 'pt',
      key: 'common',
      loader: async () => (await import('./pt/common.json')).default,
    },
    {
      locale: 'pt',
      key: 'home',
      loader: async () => (await import('./pt/home.json')).default,
    },
    {
      locale: 'pt',
      key: 'about',
      loader: async () => (await import('./pt/about.json')).default,
    },
    {
      locale: 'pt',
      key: 'bookmarks',
      loader: async () => (await import('./pt/bookmarks.json')).default,
    },
    {
      locale: 'pt',
      key: 'blog',
      loader: async () => (await import('./pt/blog.json')).default,
    },
  ],
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
