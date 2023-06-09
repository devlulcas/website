import type { InferModel } from 'drizzle-orm';
import { mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const profile = mysqlTable('user_profile', {
	userId: varchar('user_id', { length: 255 }).primaryKey(),
	avatarUrl: varchar('avatar_url', { length: 255 }),
	githubProfileUrl: varchar('github_profile_url', { length: 255 })
});

export type Profile = InferModel<typeof profile>;
