import type { Language } from '../../posts/types';

export type Nugget = {
  year: string;
  language: Language;
  slug: string;
  readingTime: number;
  content: string;
};
