import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'pt-br',
			key: 'common',
			loader: async () => (await import('./pt-br/common.json')).default
		},
		{
			locale: 'en',
			key: 'homepage',
			loader: async () => (await import('./en/homepage.json')).default
		},
		{
			locale: 'pt-br',
			key: 'homepage',
			loader: async () => (await import('./pt-br/homepage.json')).default
		},
		{
			locale: 'en',
			key: 'posts',
			loader: async () => (await import('./en/posts.json')).default
		},
		{
			locale: 'pt-br',
			key: 'posts',
			loader: async () => (await import('./pt-br/posts.json')).default
		},
		{
			locale: 'en',
			key: 'bookmarks',
			loader: async () => (await import('./en/bookmarks.json')).default
		},
		{
			locale: 'pt-br',
			key: 'bookmarks',
			loader: async () => (await import('./pt-br/bookmarks.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
