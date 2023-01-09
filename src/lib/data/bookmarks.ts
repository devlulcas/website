import { NOTION_TOKEN, NOTION_DATABASE_ID } from '$env/static/private';
import { Client } from '@notionhq/client';

const key = NOTION_TOKEN;

const bookmarksDatabase = NOTION_DATABASE_ID;

const notion = new Client({ auth: key });

export async function getBookmarks() {
	const response = await notion.databases.query({
		database_id: bookmarksDatabase
	});

	return response.results;
}
