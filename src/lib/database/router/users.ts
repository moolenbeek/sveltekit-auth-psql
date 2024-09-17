import db from "$lib/database/db.server";
import { userTable } from "$lib/database/drizzle-schemas";
import type { User } from "$lib/database/drizzle-schemas";

export const createUser = async (user: User) => {
	const result = await db.insert(userTable).values(user).onConflictDoNothing().returning();
	if (result.length === 0) {
		return null;
	} else {
		return result[0];
	}
};
