import { relations } from 'drizzle-orm';
import { integer, json, pgTable, primaryKey, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

/**
 * -> Bookmark
 */

export const bookmark = pgTable('bookmark', {
	id: serial('id').primaryKey(),
	name: varchar('name'),
	url: text('url'),
	ptBrDescription: text('description_pt_br'),
	enUsDescription: text('description_en_us'),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	deletedAt: timestamp('deleted_at')
});

export const bookmarkRelations = relations(bookmark, ({ many }) => ({
	bookmarkToTag: many(bookmarkToTag)
}));

export const bookmarkTag = pgTable('bookmark_tag', {
	id: serial('id').primaryKey(),
	name: varchar('name'),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	deletedAt: timestamp('deleted_at')
});

export const bookmarkTagRelations = relations(bookmarkTag, ({ many }) => ({
	bookmarkToTag: many(bookmarkToTag)
}));

export const bookmarkToTag = pgTable(
	'bookmark_tag',
	{
		bookmarkId: integer('bookmark_id').references(() => bookmark.id),
		tagId: integer('tag_id').references(() => bookmarkTag.id)
	},
	(table) => {
		return {
			id: primaryKey(table.bookmarkId, table.tagId)
		};
	}
);

export const bookmarkToTagRelations = relations(bookmarkToTag, ({ one }) => ({
	bookmark: one(bookmark, {
		fields: [bookmarkToTag.bookmarkId],
		references: [bookmark.id]
	}),
	tag: one(bookmarkTag, {
		fields: [bookmarkToTag.tagId],
		references: [bookmarkTag.id]
	})
}));

/**
 * -> Project
 */

export const project = pgTable('project', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  liveUrl: text('url'),
  gitUrl: text('url'),
  ptBrDescription: text('description_pt_br'),
  enUsDescription: text('description_en_us'),
	ptBrDetails: text('details_pt_br'),
  enUsDetails: text('details_en_us'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
  deletedAt: timestamp('deleted_at'),
	images: json('images').$type<string[]>().default([]),
	techs: json('tags').$type<string[]>().default([]),
});

/**
 * -> Microblog
 */

export const microblog = pgTable('microblog', {
	id: serial('id').primaryKey(),
	title: varchar('title'),
	content: text('content'),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	deletedAt: timestamp('deleted_at')
});


export const microblogRelations = relations(microblog, ({ many }) => ({
	microblogToTag: many(microblogToTag)
}));

export const microblogTag = pgTable('microblog_tag', {
	id: serial('id').primaryKey(),
	name: varchar('name'),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
	deletedAt: timestamp('deleted_at')
});

export const microblogTagRelations = relations(microblogTag, ({ many }) => ({
	microblogToTag: many(microblogToTag)
}));

export const microblogToTag = pgTable(
	'microblog_tag',
	{
		microblogId: integer('microblog_id').references(() => microblog.id),
		tagId: integer('tag_id').references(() => microblogTag.id)
	},
	(table) => {
		return {
			id: primaryKey(table.microblogId, table.tagId)
		};
	}
);

export const microblogToTagRelations = relations(microblogToTag, ({ one }) => ({
	microblog: one(microblog, {
		fields: [microblogToTag.microblogId],
		references: [microblog.id]
	}),
	tag: one(microblogTag, {
		fields: [microblogToTag.tagId],
		references: [microblogTag.id]
	})
}));
