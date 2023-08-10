import { website } from '$/lib/assets/config';
import { readingTime } from 'reading-time-estimator';
import { z } from 'zod';
import { detectLanguage, type Language } from './language-detection';
import { rawPostSchema, type RawPostSchema } from './raw-post-schema';

export type PostMetadata = Required<
	RawPostSchema & {
		slug: string;
		language: Language;
		readingTime: number;
	}
>;

/**
 * Fetches all the posts metadata. It also adds the slug and the SEO metadata
 *
 * @returns all the posts metadata
 */
export async function fetchPosts(): Promise<PostMetadata[]> {
	const postFiles = import.meta.glob('/posts/**/*.md');

	const postMetadataPromises: Promise<PostMetadata>[] = Object.entries(postFiles).map(async ([filepath, resolver]) => {
		const resolverData = await resolver();

		const resolverDataSchema = z.object({
			metadata: z.unknown(),
			default: z.object({
				render: z.function().returns(
					z.object({
						html: z.string()
					})
				)
			})
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

		const expectedReadingTime = readingTime(parsedData.default.render().html, 300, language.code);

		const cover = metadata.data.cover ? metadata.data.cover : website.url;

		const data: PostMetadata = {
			cover,
			language,
			slug,
			readingTime: expectedReadingTime.minutes,
			categories: metadata.data.categories,
			date: metadata.data.date,
			draft: metadata.data.draft,
			excerpt: metadata.data.excerpt,
			tags: metadata.data.tags,
			title: metadata.data.title
		};

		return data;
	});

	const postsMetadata = await Promise.all(postMetadataPromises);

	const publicPosts = postsMetadata.filter((post) => !post.draft);

	return publicPosts.sort((a, b) => {
		const aDate = new Date(a.date || a.date);
		const bDate = new Date(b.date || b.date);
		return bDate.getTime() - aDate.getTime();
	});
}
