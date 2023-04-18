import { z } from 'zod';

export const rawPostMetadataSchema = z.object({
	title: z.string(),
	tags: z.array(z.string()).default([]),
	categories: z.array(z.string()).default([]),
	date: z.string(),
	updated: z.string().optional(),
	excerpt: z.string(),
	lang: z.union([z.literal('en'), z.literal('pt-br'), z.literal('es')]).default('en')
});

export type RawPostMetadata = z.infer<typeof rawPostMetadataSchema>;

export type RawPostMetadataWithSlug = RawPostMetadata & {
	slug: string;
};

export type PostSEO = {
	title: string;
	description: string;
	openGraph: string;
	twitter: {
		cardType: 'summary_large_image';
		handle: '@devlulcas';
		site: '@devlulcas';
	};
	additionalMetaTags: [
		{
			name: 'keywords';
			content: string;
		}
	];
};

export type FullPostMetadata = RawPostMetadataWithSlug & {
	url: string;
	thumbnail: string;
	seo: PostSEO;
};
