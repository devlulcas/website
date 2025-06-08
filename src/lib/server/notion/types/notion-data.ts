export type NotionData<T = object> = {
	results: {
		id: string;
		properties: T;
	}[];
};
