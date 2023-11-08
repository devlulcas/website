export type Bookmark = {
  resourceId: string;
  name: string;
  url: string;
  about: {
    en: string;
    ptBr: string;
  };
  tags: string[];
  searchTerms: string;
};
