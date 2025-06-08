export type Project = {
	name: string;
	description: string;
	code: string;
	url?: string;
	createdAt: string;
	languages?: { name: string }[];
	image: string;
};
