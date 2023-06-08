import type { InferModel } from 'drizzle-orm';
import { json, mysqlTable, timestamp, uniqueIndex, varchar } from 'drizzle-orm/mysql-core';
import { user } from './user';

export const bookmark = mysqlTable(
	'bookmark',
	{
		id: varchar('id', { length: 255 }).primaryKey(),
		name: varchar('name', { length: 280 }).notNull(),
		url: varchar('url', { length: 280 }).notNull(),
		aboutEn: varchar('about', { length: 560 }).notNull(),
		aboutPtBr: varchar('about', { length: 560 }).notNull(),
		tags: json('tags').default([]),
		searchTerms: varchar('search_terms', { length: 560 }).notNull(),
		userId: varchar('user_id', { length: 15 }).notNull(),
		createdAt: timestamp('created_at').defaultNow(),
		updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
		deletedAt: timestamp('deleted_at')
	},
	(bookmark) => ({
		searchTermIndex: uniqueIndex('search_term_idx').on(bookmark.searchTerms)
	})
);

export type Bookmark = InferModel<typeof bookmark>;

export type NewBookmark = InferModel<typeof bookmark, 'insert'>;

export function isTagArray(value: unknown): value is string[] {
	return Array.isArray(value) && value.every((item) => typeof item === 'string');
}
