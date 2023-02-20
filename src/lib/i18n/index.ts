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
		}
	]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
