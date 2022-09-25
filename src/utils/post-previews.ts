import fs from 'node:fs/promises';
import { parseMarkdownFile } from './parse';
import { sortPostsByDate } from './sort';

export async function getPostsMetadata() {
	const list = await fs.readdir('./posts');

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
