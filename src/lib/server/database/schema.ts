import { relations } from 'drizzle-orm';
import { integer, json, pgTable, primaryKey, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import type { z } from 'zod';

/**
 * -> Microblog
 */

export const microblogTable = pgTable('microblog', {
  id: serial('id').primaryKey(),
  title: varchar('title').notNull(),
  rawContent: text('raw_content').notNull(),
  htmlContent: text('html_content').notNull(),
  language: text('language').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const microblogRelations = relations(microblogTable, ({ many }) => ({
  microblogToTag: many(microblogToTagTable),
}));

export const microblogInsertSchema = createInsertSchema(microblogTable);
export type MicroblogInsertSchema = z.infer<typeof microblogInsertSchema>;

export const microblogSelectSchema = createSelectSchema(microblogTable);
export type MicroblogSelectSchema = z.infer<typeof microblogSelectSchema>;

/**
 * -> MicroblogTag
 */

export const microblogTagTable = pgTable('microblog_tag', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const microblogTagRelations = relations(microblogTagTable, ({ many }) => ({
  microblogToTag: many(microblogToTagTable),
}));

export const microblogTagInsertSchema = createInsertSchema(microblogTagTable);
export type MicroblogTagInsertSchema = z.infer<typeof microblogTagInsertSchema>;

export const microblogTagSelectSchema = createSelectSchema(microblogTagTable);
export type MicroblogTagSelectSchema = z.infer<typeof microblogTagSelectSchema>;

/**
 * -> MicroblogToTag
 */

export const microblogToTagTable = pgTable(
  'microblog_to_tag',
  {
    microblogId: integer('microblog_id').references(() => microblogTable.id),
    tagId: integer('tag_id').references(() => microblogTagTable.id),
  },
  (table) => {
    return {
      id: primaryKey(table.microblogId, table.tagId),
    };
  },
);

export const microblogToTagRelations = relations(microblogToTagTable, ({ one }) => ({
  microblog: one(microblogTable, {
    fields: [microblogToTagTable.microblogId],
    references: [microblogTable.id],
  }),
  tag: one(microblogTagTable, {
    fields: [microblogToTagTable.tagId],
    references: [microblogTagTable.id],
  }),
}));

export const microblogToTagInsertSchema = createInsertSchema(microblogToTagTable);
export type MicroblogToTagInsertSchema = z.infer<typeof microblogToTagInsertSchema>;

export const microblogToTagSelectSchema = createSelectSchema(microblogToTagTable);
export type MicroblogToTagSelectSchema = z.infer<typeof microblogToTagSelectSchema>;

/**
 * -> Project
 */

export const projectTable = pgTable('project', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 140 }).notNull(),
  deployUrl: text('deploy_url'),
  vcsUrl: text('vcs_url'),
  ptBrDescription: text('description_pt_br').notNull(),
  enUsDescription: text('description_en_us').notNull(),
  ptBrDetails: text('details_pt_br').notNull(),
  enUsDetails: text('details_en_us').notNull(),
  images: json('images').$type<string[]>().default([]).notNull(),
  stack: json('stack').$type<string[]>().default([]).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
});

export const projectInsertSchema = createInsertSchema(projectTable);
export type ProjectInsertSchema = z.infer<typeof projectInsertSchema>;

export const projectSelectSchema = createSelectSchema(projectTable);
export type ProjectSelectSchema = z.infer<typeof projectSelectSchema>;

/**
 * -> Bookmark
 */

export const bookmarkTable = pgTable('bookmark', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull().unique(),
  url: text('url').notNull().unique(),
  ptBrDescription: text('description_pt_br').notNull(),
  enUsDescription: text('description_en_us').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const bookmarkRelations = relations(bookmarkTable, ({ many }) => ({
  bookmarkToTag: many(bookmarkToTagTable),
}));

export const bookmarkInsertSchema = createInsertSchema(bookmarkTable);
export type BookmarkInsertSchema = z.infer<typeof bookmarkInsertSchema>;

export const bookmarkSelectSchema = createSelectSchema(bookmarkTable);
export type BookmarkSelectSchema = z.infer<typeof bookmarkSelectSchema>;

/**
 * -> BookmarkTag
 */

export const bookmarkTagTable = pgTable('bookmark_tag', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull().unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const bookmarkTagRelations = relations(bookmarkTagTable, ({ many }) => ({
  bookmarkToTag: many(bookmarkToTagTable),
}));

export const bookmarkTagInsertSchema = createInsertSchema(bookmarkTagTable);
export type BookmarkTagInsertSchema = z.infer<typeof bookmarkTagInsertSchema>;

export const bookmarkTagSelectSchema = createSelectSchema(bookmarkTagTable);
export type BookmarkTagSelectSchema = z.infer<typeof bookmarkTagSelectSchema>;

/**
 * -> BookmarkToTag
 */

export const bookmarkToTagTable = pgTable(
  'bookmark_to_tag',
  {
    bookmarkId: integer('bookmark_id').references(() => bookmarkTable.id),
    tagId: integer('tag_id').references(() => bookmarkTagTable.id),
  },
  (table) => {
    return {
      id: primaryKey(table.bookmarkId, table.tagId),
    };
  },
);

export const bookmarkToTagRelations = relations(bookmarkToTagTable, ({ one }) => ({
  bookmark: one(bookmarkTable, {
    fields: [bookmarkToTagTable.bookmarkId],
    references: [bookmarkTable.id],
  }),
  tag: one(bookmarkTagTable, {
    fields: [bookmarkToTagTable.tagId],
    references: [bookmarkTagTable.id],
  }),
}));

export const bookmarkToTagInsertSchema = createInsertSchema(bookmarkToTagTable);
export type BookmarkToTagInsertSchema = z.infer<typeof bookmarkToTagInsertSchema>;

export const bookmarkToTagSelectSchema = createSelectSchema(bookmarkToTagTable);
export type BookmarkToTagSelectSchema = z.infer<typeof bookmarkToTagSelectSchema>;

/**
 * -> Contact
 */

export const contactTable = pgTable('contact', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const contactInsertSchema = createInsertSchema(contactTable);
export type ContactInsertSchema = z.infer<typeof contactInsertSchema>;

export const contactSelectSchema = createSelectSchema(contactTable);
export type ContactSelectSchema = z.infer<typeof contactSelectSchema>;
