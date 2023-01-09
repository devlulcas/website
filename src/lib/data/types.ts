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
