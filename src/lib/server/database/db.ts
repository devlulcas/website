import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema'
import { PG_DB_URL } from '$env/static/private';
 
const client = postgres(PG_DB_URL)

export const db = drizzle(client, { schema });
 
