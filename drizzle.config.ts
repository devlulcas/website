import { config } from 'dotenv';
import type { Config } from 'drizzle-kit';

config({
  path: '.env.local',
});

const DATABASE_URL = process.env.PG_DB_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

export default {
  schema: './src/lib/server/database/schema.ts',
  out: './src/lib/server/database/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: DATABASE_URL,
  },
} satisfies Config;
