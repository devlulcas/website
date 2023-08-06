import { z } from 'zod';

export const notionBookmarksResultSchema = z.object({
	results: z.array(
		z.object({
			id: z.string(),
			properties: z.object({
				URL: z.object({
					url: z.string()
				}),
				Name: z.object({
					title: z.array(
						z.object({
							plain_text: z.string()
						})
					)
				}),
				Tags: z.object({
					multi_select: z.array(
						z.object({
							name: z.string()
						})
					)
				}),
				AboutEn: z.object({
					rich_text: z.array(
						z.object({
							plain_text: z.string()
						})
					)
				}),
				AboutPtBr: z.object({
					rich_text: z.array(
						z.object({
							plain_text: z.string()
						})
					)
				})
			})
		})
	)
});

export type NotionBookmarksResult = z.infer<typeof notionBookmarksResultSchema>;

export type NotionBookmarkResult = NotionBookmarksResult['results'][0];
