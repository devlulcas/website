import { PRIVATE_NOTION_API_KEY, PRIVATE_NOTION_VERSION } from '$env/static/private';
import type { NotionData } from '../types/notion-data';

function getNotionHeaders() {
	const headers = new Headers();

	headers.set('Authorization', 'Bearer ' + PRIVATE_NOTION_API_KEY);
	headers.set('Notion-Version', PRIVATE_NOTION_VERSION);
	headers.set('Content-Type', 'application/json');

	return headers;
}

function isNotionData(json: unknown): json is NotionData {
	return json !== null && typeof json === 'object' && 'results' in json;
}

export async function fetchFromNotion<T>(databaseId: string): Promise<NotionData<T> | null> {
	try {
		const url = `https://api.notion.com/v1/databases/${databaseId}/query`;

		const response = await fetch(url, {
			method: 'POST',
			headers: getNotionHeaders()
		});

		if (!response.ok) {
			console.error('Notion API error', await response.json());
			return null;
		}

		const json = await response.json();

		if (!isNotionData(json)) {
			console.error('Notion API error', json);
			return null;
		}

		return json as NotionData<T>;
	} catch (error) {
		console.error(error);
		return null;
	}
}
