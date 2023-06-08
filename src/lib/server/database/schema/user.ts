import type { InferModel } from 'drizzle-orm';
import { bigint, boolean, mysqlEnum, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

export const user = mysqlTable('auth_user', {
	id: varchar('id', { length: 255 }).primaryKey(),
	email: varchar('email', { length: 255 }).notNull(),
	role: mysqlEnum('role', ['ADMIN', 'USER']).default('USER').notNull(),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
	deletedAt: timestamp('deleted_at')
});

export type User = InferModel<typeof user>;

export type NewUser = InferModel<typeof user, 'insert'>;

export const session = mysqlTable('auth_session', {
	id: varchar('id', { length: 128 }).primaryKey(),
	userId: varchar('user_id', { length: 255 }).notNull(),
	activeExpires: bigint('active_expires', { mode: 'number' }).notNull(),
	idleExpires: bigint('idle_expires', { mode: 'number' }).notNull()
});

export const key = mysqlTable('auth_key', {
	id: varchar('id', { length: 255 }).primaryKey(),
	userId: varchar('user_id', { length: 255 }).notNull(),
	primaryKey: boolean('primary_key').notNull(),
	hashedPassword: varchar('hashed_password', { length: 255 }),
	expires: bigint('expires', { mode: 'number' })
});
