export type Blog = {
	resourceId: string;
	name: string;
	url: string;
	tags: string[];
	searchTerms: string;
	updatedAt: string;
	metadata?: BlogMetadata;
};

export type BlogMetadata = {
	title?: string;
	description?: string;
	image?: string;
	siteName?: string;
};
