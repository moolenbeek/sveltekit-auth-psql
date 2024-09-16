import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
	id: text("id").notNull().primaryKey(),
	email: text("email").notNull().unique(),
	name: text("name").notNull(),
	password: text("password")
});

export type User = typeof userTable.$inferInsert;
