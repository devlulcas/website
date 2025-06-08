import type { Language } from './language';
import type { RawPost } from './raw-post';

export type PostBloatedMetadata = Required<
	RawPost & {
		slug: string;
		language: Language;
		readingTime: number;
		filepath: string;
		renderedHtml: string;
	}
>;
