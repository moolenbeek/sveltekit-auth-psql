import type { Config } from "drizzle-kit";

export default {
	out: "./src/lib/database/migrations",
	schema: "./src/lib/database/drizzle-schemas.ts",
	breakpoints: true,
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!
	}
} satisfies Config;
