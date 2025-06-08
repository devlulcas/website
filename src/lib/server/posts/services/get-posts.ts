import { parse as parseHtml } from 'node-html-parser';
import { readingTime } from 'reading-time-estimator';
import type { Component } from 'svelte';
import { render } from 'svelte/server';
import { z } from 'zod';
import { generateOgURL } from '../../../utils/og';
import { detectLanguage } from '../lib/detect-language';
import { rawPostSchema } from '../schemas/raw-post-schema';
import type { PostBloatedMetadata } from '../types/post-bloated-metadata';
import type { PostMetadata } from '../types/post-metadata';

/**
 * Fetches all the posts metadata. It also adds the slug and the SEO metadata
 * @returns all the posts metadata
 */
async function getPosts(): Promise<PostBloatedMetadata[]> {
	const postFiles = import.meta.glob('/content/posts/**/*.md');

	const postMetadataPromises: Promise<PostBloatedMetadata>[] = Object.entries(postFiles).map(
		async ([filepath, resolver]) => {
			const resolverData = await resolver();

			const resolverDataSchema = z.object({
				metadata: z.unknown(),
				default: z.function()
			});

			const parsedData = resolverDataSchema.parse(resolverData);

			const metadata = rawPostSchema.safeParse(parsedData.metadata);

			if (metadata.success === false) {
				const errorList = JSON.stringify(metadata.error.issues, null, 2);
				const errorMessage = `Invalid metadata in ${filepath}: ${errorList}`;
				throw new Error(errorMessage);
			}

			const slug =
				filepath
					.replace(/(\/index)?\.md/, '')
					.split('/')
					.pop() ?? filepath;

			const language = detectLanguage(metadata.data.title + ' ' + metadata.data.excerpt);

			const defaultFunction = parsedData.default as Component;
			const rendered = render(defaultFunction);

			const renderedHtml = rendered.body;

			const expectedReadingTime = readingTime(renderedHtml, 300, language.code);

			const thumb = parseHtml(renderedHtml).querySelector('img')?.getAttribute('src');

			const cover = generateOgURL(metadata.data, language, thumb);

			const getDate = () => {
				try {
					return new Date(metadata.data.date).toISOString();
				} catch (error) {
					console.error(error);
					return new Date().toISOString();
				}
			};

			const data: PostBloatedMetadata = {
				cover,
				filepath,
				renderedHtml,
				language,
				slug,
				readingTime: expectedReadingTime.minutes,
				categories: metadata.data.categories,
				date: getDate(),
				draft: metadata.data.draft,
				excerpt: metadata.data.excerpt,
				tags: metadata.data.tags,
				title: metadata.data.title,
				ogTitle: metadata.data.ogTitle ?? metadata.data.title
			};

			return data;
		}
	);

	const postsMetadata = await Promise.all(postMetadataPromises);

	const publicPosts = postsMetadata.filter((post) => !post.draft);

	return publicPosts.sort((a, b) => {
		const aDate = new Date(a.date || a.date);
		const bDate = new Date(b.date || b.date);
		return bDate.getTime() - aDate.getTime();
	});
}

export const GLOBAL_POSTS: Readonly<PostBloatedMetadata[]> = Object.freeze(await getPosts());
export const GLOBAL_POSTS_SLIM: Readonly<PostMetadata[]> = Object.freeze(
	GLOBAL_POSTS.map((post) => {
		return {
			...post,
			renderedHtml: undefined,
			filepath: undefined
		};
	})
);
