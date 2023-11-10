import type { Language } from '../../posts/types';

export type MicroblogPost = {
  id: string;
  tags: string[];
  title: string;
  language: Language['code'];
  htmlContent: string;
  searchTerms: string;
  createdAt: Date;
  updatedAt: Date;
};
