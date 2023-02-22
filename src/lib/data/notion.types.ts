type BoilerplateNode<T> = {
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
	properties: T;
	url: string;
};

type TextNode = {
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

type URLNode = {
	id: string;
	type: string;
	url: string;
};

type MultiSelectNode = {
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

type TitleNode = {
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

export type { BoilerplateNode, TextNode, URLNode, MultiSelectNode, TitleNode };
