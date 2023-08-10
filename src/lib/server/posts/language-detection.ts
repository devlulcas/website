import { franc } from 'franc-min';

export type Language = { niceName: 'Português'; code: 'pt-br' } | { niceName: 'English'; code: 'en' };

export function detectLanguage(text: string): Language {
	const lang = franc(text, {
		minLength: 3,
		only: ['eng', 'por']
	});

	if (lang === 'pot') {
		return {
			niceName: 'Português',
			code: 'pt-br'
		};
	}

	return {
		niceName: 'English',
		code: 'en'
	};
}
