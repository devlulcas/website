import { website } from '$/lib/assets/config';
import { parse as parseHtml } from 'node-html-parser';
import { readingTime } from 'reading-time-estimator';
import { z } from 'zod';
import { detectLanguage } from '../lib/detect-language';
import { rawPostSchema, type RawPostSchema } from '../schemas/raw-post-schema';
import type { PostMetadata } from '../types';

/**
 * Fetches all the posts metadata. It also adds the slug and the SEO metadata
 * @returns all the posts metadata
 */
export async function getPosts(): Promise<PostMetadata[]> {
  const postFiles = import.meta.glob('/content/posts/**/*.md');

  const postMetadataPromises: Promise<PostMetadata>[] = Object.entries(
    postFiles
  ).map(async ([filepath, resolver]) => {
    const resolverData = await resolver();

    const resolverDataSchema = z.object({
      metadata: z.unknown(),
      default: z.object({
        render: z.function().returns(
          z.object({
            html: z.string(),
          })
        ),
      }),
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

    const language = detectLanguage(
      metadata.data.title + ' ' + metadata.data.excerpt
    );

    const renderedHtml = parsedData.default.render().html;

    const expectedReadingTime = readingTime(renderedHtml, 300, language.code);

    let thumb = parseHtml(renderedHtml)
      .querySelector('img')
      ?.getAttribute('src');

    thumb ||= '/images/og-image.webp';

    thumb = new URL(thumb, website.url).toString();

    const generateCover = (post: RawPostSchema, thumb: string) => {
      const cover = new URL('/api/og', website.url);
      cover.searchParams.append('text', post.title);
      cover.searchParams.append('thumb', thumb);
      post.tags.forEach((tag) => cover.searchParams.append('tag', tag));

      return cover.toString();
    };

    const cover = generateCover(metadata.data, thumb);

    const getDate = () => {
      try {
        return new Date(metadata.data.date).toISOString();
      } catch (error) {
        return new Date().toISOString();
      }
    };

    const data: PostMetadata = {
      cover,
      language,
      slug,
      readingTime: expectedReadingTime.minutes,
      categories: metadata.data.categories,
      date: getDate(),
      draft: metadata.data.draft,
      excerpt: metadata.data.excerpt,
      tags: metadata.data.tags,
      title: metadata.data.title,
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
