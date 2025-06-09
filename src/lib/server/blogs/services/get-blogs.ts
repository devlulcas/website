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
		console.log(json.results);
		for (const result of json.results) {
			if (!result.properties.Name.title.length) {
				continue;
			}

			const resourceId = result.id;
			const name = result.properties.Name.title[0].plain_text;
			const url = result.properties.URL.url;
			const tags = result.properties.Tags.multi_select.map((tag) => tag.name);
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
	const data = blogs.docs.reduce<Blog[]>((acc, doc) => {
		const blog = doc.data() as Blog;

		if (!blog.name) {
			return acc;
		}

		const filledBlog: Blog = {
			name: blog.name || '',
			url: blog.url || '',
			tags: blog.tags || [],
			searchTerms: blog.searchTerms || '',
			updatedAt: blog.updatedAt || new Date().toISOString(),
			resourceId: blog.resourceId || '',
			metadata: {
				title: blog.metadata?.title || '',
				description: blog.metadata?.description || '',
				image: blog.metadata?.image || '',
				siteName: blog.metadata?.siteName || ''
			}
		};

		return [...acc, filledBlog];
	}, []);

	return data;
}

async function replaceFirestoreBlogs(blogs: Blog[]) {
	const batch = firestore.batch();

	for (const blog of blogs) {
		const filledBlog: Blog = {
			name: blog.name || '',
			url: blog.url || '',
			tags: blog.tags || [],
			searchTerms: blog.searchTerms || '',
			updatedAt: blog.updatedAt || new Date().toISOString(),
			resourceId: blog.resourceId || '',
			metadata: {
				title: blog.metadata?.title || '',
				description: blog.metadata?.description || '',
				image: blog.metadata?.image || '',
				siteName: blog.metadata?.siteName || ''
			}
		};

		batch.set(firestore.collection('blogs').doc(blog.resourceId), filledBlog);
	}

	await batch.commit();
	return blogs;
}

export async function getBlogs(): Promise<Blog[]> {
	const firestoreBlogs = await getBlogsFromFirestore();
	const now = new Date();
	const timeout = 24 * 60 * 60 * 1000 * 30; // 30 days

	const isCached =
		firestoreBlogs.length > 0 &&
		firestoreBlogs.every((blog) => {
			return now.getTime() - new Date(blog.updatedAt).getTime() < timeout;
		});

	if (isCached) {
		return firestoreBlogs;
	}

	const notionBlogs = await getBlogsFromNotion();
	const blogs = await replaceFirestoreBlogs(notionBlogs);

	return blogs;
}
