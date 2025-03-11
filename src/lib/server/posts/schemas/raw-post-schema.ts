import { PUBLIC_HOST } from '$env/static/public';
import { z } from 'zod';

export const rawPostSchema = z.object({
	title: z.string({ required_error: 'Title is required.' }),
	ogTitle: z.string().optional(),
	excerpt: z.string().max(280, { message: 'Excerpt must be at most 280 characters long.' }),
	date: z.string({ required_error: 'Date is required.' }),
	draft: z.boolean().default(true),
	cover: z.string().default(`${PUBLIC_HOST}/og.png`),
	tags: z.array(z.string()).default([]),
	categories: z
		.array(z.string())
		.default([])
});

export type RawPostSchema = z.infer<typeof rawPostSchema>;
