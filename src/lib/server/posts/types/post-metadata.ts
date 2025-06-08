import type { Language } from './language';
import type { RawPost } from './raw-post';

export type PostMetadata = Required<
	RawPost & {
		slug: string;
		language: Language;
		readingTime: number;
	}
>;
