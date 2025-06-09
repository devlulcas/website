export type NotionBlogDatabase = {
	name: { title: [{ plain_text: string }] };
	url: { url: string };
	tags: {
		multi_select: { name: string }[];
	};
};
