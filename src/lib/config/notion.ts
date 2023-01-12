import { NOTION_TOKEN, NOTION_DATABASE_ID } from '$env/static/private';
import { Client } from '@notionhq/client';

export const bookmarksDatabase = NOTION_DATABASE_ID;

export const notion = new Client({ auth: NOTION_TOKEN });
