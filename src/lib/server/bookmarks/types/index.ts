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

export type NotionBookmarkDatabase = {
  results: {
    id: string;
    properties: {
      url: { url: string };
      about_en: { rich_text: [{ plain_text: string }] };
      tags: {
        multi_select: { name: string }[];
      };
      about_pt_br: { rich_text: [{ plain_text: string }] };
      name: { title: [{ plain_text: string }] };
    };
  }[];
};
