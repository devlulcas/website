import fs from 'node:fs/promises';
import { parseMarkdownFile } from './markdown-parser';
import { sortPostsByDate } from './post-sort';
import path from 'node:path';

const POSTS_PATH = path.join(process.cwd(), '/posts');

export async function getPostsMetadata() {
	const list = await fs.readdir(POSTS_PATH);

	const filesPromise = list.map((path) => {
		return parseMarkdownFile(path);
	});

	const files = await Promise.all(filesPromise);

	return files.map((file) => file.metadata);
}

export async function getRecentPostsMetadata() {
	const filesMetadata = await getPostsMetadata();

	const sortedByDate = sortPostsByDate(filesMetadata);

	return sortedByDate;
}

export async function getPostsMetadataByTag(tag: string) {
	const filesMetadata = await getPostsMetadata();
	return filesMetadata.filter((data) => data.tags.includes(tag));
}
