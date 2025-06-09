export type NotionBlogDatabase = {
	URL: {
		id: string;
		type: string;
		url: string;
	};
	Tags: {
		id: string;
		type: string;
		multi_select: Array<{
			id: string;
			name: string;
			color: string;
		}>;
	};
	Name: {
		id: string;
		type: string;
		title: Array<{
			type: string;
			text: {
				content: string;
				link: {
					url: string;
				};
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
			href: string;
		}>;
	};
};
