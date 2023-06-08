import { drizzle } from 'drizzle-orm/planetscale-serverless';
import { connect } from '@planetscale/database';
import {
	DATABASE_HOST,
	DATABASE_PASSWORD,
	DATABASE_URL,
	DATABASE_USERNAME
} from '$env/static/private';

export const connection = connect({
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD,
	url: DATABASE_URL
});

export const db = drizzle(connection);
