import { PRIVATE_NOTION_BLOGS_DATABASE_ID } from '$env/static/private';
import { firestore } from '../../database/lib/firebase';
import { fetchFromNotion } from '../../notion/lib/fetch-from-notion';
import type { Blog } from '../types/blog';
import type { NotionBlogDatabase } from '../types/notion-blog-database';
import { fetchMetadata } from './fetch-metadata';

async function getBlogsFromNotion(): Promise<Blog[]> {
	try {
		const json = await fetchFromNotion<NotionBlogDatabase>(PRIVATE_NOTION_BLOGS_DATABASE_ID);

		if (!json) {
			return [];
		}

		const blogs: Blog[] = [];

		for (const result of json.results) {
			if (!result.properties.name.title.length) {
				continue;
			}

			const resourceId = result.id;
			const name = result.properties.name.title[0].plain_text;
			const url = result.properties.url.url;
			const tags = result.properties.tags.multi_select.map((tag) => tag.name);
			const searchTerms = [name, ...tags].join(' ').toLowerCase();

			const now = new Date();

			// Fetch metadata for the blog
			const metadata = await fetchMetadata(url);

			blogs.push({
				resourceId,
				name,
				url,
				tags,
				searchTerms,
				updatedAt: now.toISOString(),
				metadata
			});
		}

		return blogs;
	} catch (error) {
		console.error(error);
		return [];
	}
}

async function getBlogsFromFirestore(): Promise<Blog[]> {
	const blogs = await firestore.collection('blogs').get();
	const data = blogs.docs.map((doc) => doc.data() as Blog);
	return data;
}

async function replaceFirestoreBlogs(blogs: Blog[]) {
	const batch = firestore.batch();

	for (const blog of blogs) {
		batch.set(firestore.collection('blogs').doc(blog.resourceId), blog);
	}

	await batch.commit();
	return blogs;
}

export async function getBlogs(): Promise<Blog[]> {
	const firestoreBlogs = await getBlogsFromFirestore();
	const now = new Date();
	const timeout = 24 * 60 * 60 * 1000 * 7; // 7 days

	const isCached = firestoreBlogs.every((blog) => {
		return now.getTime() - new Date(blog.updatedAt).getTime() < timeout;
	});

	if (isCached) {
		return firestoreBlogs;
	}

	const notionBlogs = await getBlogsFromNotion();
	const blogs = await replaceFirestoreBlogs(notionBlogs);

	return blogs;
}
