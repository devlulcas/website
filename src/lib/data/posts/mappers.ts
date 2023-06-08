import { getOgImage } from '$/lib/helpers/get-og-url';
import type { FullPostMetadata, PostSEO, RawPostMetadata, RawPostMetadataWithSlug } from './types';

/**
 * Tranforms a post filepath into a slug
 *
 * /posts/my-post/index.md => my-post
 *
 * @param filepath The filepath of the post file
 * @returns the slug of the post
 */
export function fromFilepathToPostSlug(filepath: string): string {
	return (
		filepath
			.replace(/(\/index)?\.md/, '')
			.split('/')
			.pop() ?? filepath
	);
}

/**
 * Enhances the post metadata with the slug and the SEO metadata
 *
 * @param post the post metadata
 * @returns the post metadata with the slug and the SEO metadata
 */
export function fromRawPostMetadataToFullPostMetadata(
	post: RawPostMetadataWithSlug
): FullPostMetadata {
	return {
		...post,
		url: '/blog/' + post.slug,
		thumbnail: getOgImage(post.title),
		seo: getSeoFromRawPostMetadata(post)
	};
}

/**
 * Gets the SEO metadata from a post metadata
 *
 * @param post the post metadata
 * @returns SEO metadata for the post
 */
function getSeoFromRawPostMetadata(post: RawPostMetadata): PostSEO {
	return {
		title: post.title,
		description: post.excerpt,
		openGraph: getOgImage(post.title),
		twitter: {
			cardType: 'summary_large_image',
			handle: '@devlulcas',
			site: '@devlulcas'
		},
		additionalMetaTags: [
			{
				name: 'keywords',
				content: post.tags.join(',')
			}
		]
	};
}
