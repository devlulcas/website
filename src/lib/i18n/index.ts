import i18n, { type Config } from 'sveltekit-i18n';

const config: Config = {
	loaders: [
		{
			locale: 'en',
			key: 'common',
			loader: async () => (await import('./en/common.json')).default
		},
		{
			locale: 'en',
			key: 'home',
			loader: async () => (await import('./en/home.json')).default
		},
		{
			locale: 'en',
			key: 'bookmarks',
			loader: async () => (await import('./en/bookmarks.json')).default
		},
		{
			locale: 'en',
			key: 'blog',
			loader: async () => (await import('./en/blog.json')).default
		},
		{
			locale: 'pt',
			key: 'common',
			loader: async () => (await import('./pt/common.json')).default
		},
		{
			locale: 'pt',
			key: 'home',
			loader: async () => (await import('./pt/home.json')).default
		},
		{
			locale: 'pt',
			key: 'bookmarks',
			loader: async () => (await import('./pt/bookmarks.json')).default
		},
		{
			locale: 'pt',
			key: 'blog',
			loader: async () => (await import('./pt/blog.json')).default
		},
		{
			locale: 'pt',
			key: 'cv',
			loader: async () => (await import('./pt/cv.json')).default
		},
		{
			locale: 'en',
			key: 'cv',
			loader: async () => (await import('./en/cv.json')).default
		},
		{
			locale: 'en',
			key: 'recommendations',
			loader: async () => (await import('./en/recommendations.json')).default
		},
		{
			locale: 'pt',
			key: 'recommendations',
			loader: async () => (await import('./pt/recommendations.json')).default
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
