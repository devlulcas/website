import type { Config } from "drizzle-kit";
 
export default {
  schema: "./schema.ts",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.PG_DB_URL,
  }
} satisfies Config;
