import type { Config } from 'drizzle-kit';
import { config } from 'dotenv';

config();

export default {
	schema: './src/lib/server/database/schema/*',
	out: './src/lib/server/database/migrations',
	connectionString: process.env.DATABASE_URL
} satisfies Config;
