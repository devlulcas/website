import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { config } from 'dotenv';

config({
  path: '.env.local',
});

const DATABASE_URL = process.env.PG_DB_URL;

if (!DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}

const sql = postgres(DATABASE_URL, { max: 1 });
const db = drizzle(sql);

await migrate(db, { migrationsFolder: './src/lib/server/database/migrations' });
