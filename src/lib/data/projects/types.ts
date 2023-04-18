export type Project = {
	createdAt: string;
	name: string;
	url: string;
	picture: string;
	description: string;
	homepageUrl: string;
	languages: string[];
};

export type ProjectEdge = {
	node: {
		name: string;
		url: string;
		description?: string;
		homepageUrl?: string;
		createdAt: string;
		languages?: {
			nodes: {
				name: string;
			}[];
		};
	};
};
