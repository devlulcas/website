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

type BookmarkResponse = {
	object: string;
	id: string;
	created_time: string;
	last_edited_time: string;
	created_by: {
		object: string;
		id: string;
	};
	last_edited_by: {
		object: string;
		id: string;
	};
	cover: null;
	icon: null;
	parent: {
		type: string;
		database_id: string;
	};
	archived: boolean;
	properties: {
		URL: {
			id: string;
			type: string;
			url: string;
		};
		About: {
			id: string;
			type: string;
			rich_text: [
				{
					type: string;
					text: {
						content: string;
						link: null;
					};
					annotations: {
						bold: boolean;
						italic: boolean;
						strikethrough: boolean;
						underline: boolean;
						code: boolean;
						color: string;
					};
					plain_text: string;
					href: null;
				}
			];
		};
		Tags: {
			id: string;
			type: string;
			multi_select: [
				{
					id: string;
					name: string;
					color: string;
				}
			];
		};
		Name: {
			id: string;
			type: string;
			title: [
				{
					type: string;
					text: {
						content: string;
						link: null;
					};
					annotations: {
						bold: boolean;
						italic: boolean;
						strikethrough: boolean;
						underline: boolean;
						code: boolean;
						color: string;
					};
					plain_text: string;
					href: null;
				}
			];
		};
	};
	url: string;
};

export type Bookmark = {
	resourceId: string;
	name: string;
	url: string;
	about: string;
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
