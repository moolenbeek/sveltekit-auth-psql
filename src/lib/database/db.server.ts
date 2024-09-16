import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
	connectionString: process.env.DATABASE_URL
});

await pool.connect();
const db = drizzle(pool);

export default db;
