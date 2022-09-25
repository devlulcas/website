export type Project = {
	name: string;
	url: string;
	description: string;
	homepageUrl: string;
	createdAt: string;
	languages: {
		nodes: Array<{
			name: string;
		}>;
	};
};
