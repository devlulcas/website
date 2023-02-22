import type * as Notion from './notion.types';

export type ProgrammingLanguageNode = {
	name: string;
};

export type ProjectNode = {
	name: string;
	url: string;
	description: string;
	homepageUrl: string;
	createdAt: string;
	languages: {
		nodes: ProgrammingLanguageNode[];
	};
};

export type ProjectResponse<T extends 'pinnedItems' | 'repositories'> = T extends 'pinnedItems'
	? {
			viewer: {
				pinnedItems: {
					edges: {
						node: ProjectNode;
					}[];
				};
			};
	  }
	: T extends 'repositories'
	? {
			viewer: {
				repositories: {
					edges: {
						node: ProjectNode;
					}[];
				};
			};
	  }
	: never;

export type QueryBookmarkDatabaseResponse = {
	object: string;
	results: BookmarkResponse[];
	next_cursor: null;
	has_more: boolean;
	type: string;
};

export type BookmarkResponse = Notion.BoilerplateNode<{
	URL: Notion.URLNode;
	AboutEn: Notion.TextNode;
	AboutPtBr: Notion.TextNode;
	Tags: Notion.MultiSelectNode;
	Name: Notion.TitleNode;
}>;

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

export type Post = {
	title: string;
	slug: string;
	url: string;
	excerpt: string;
	date: string;
	tags: string[] | null | undefined;
	updated: string | null | undefined;
	isIndexFile: boolean;
	categories: string[];
	ogImage: string;
};

export type Project = {
	createdAt: string;
	name: string;
	url: string;
	picture: string;
	description: string;
	homepageUrl: string;
	languages: string[];
};
