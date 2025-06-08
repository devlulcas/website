import type { Language } from '../../posts/types/language';

export type Nugget = {
	year: string;
	language: Language;
	slug: string;
	readingTime: number;
	content: string;
	image: string;
};
