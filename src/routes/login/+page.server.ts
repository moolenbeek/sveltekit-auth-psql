import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { Argon2id } from "oslo/password";
import { lucia } from "$lib/database/lucia";
import { getUserByEmail } from "$lib/database/router/users";

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user) {
		throw redirect(302, "/");
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const formData = await request.formData();
		const email = formData.get("email");
		const password = formData.get("password");

		if (
			typeof email !== "string" ||
			typeof password !== "string" ||
			!email ||
			!password
		) {
			return fail(400, {
				message: "Invalid email or password"
			});
		}

		const user = await getUserByEmail(email);

    if (!user || typeof user.password !== 'string') {
      return fail(400, {
          message: "Invalid email or password"
      });
  }
  
  const validPassword = await new Argon2id().verify(user.password, password);
  
  if (!validPassword) {
			return fail(400, {
				message: "Invalid email or password"
			});
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);

		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: ".",
			...sessionCookie.attributes
		});

    console.log(`Login successful for user: ${email}`);
    console.log(`Session ID: ${session.id}`);
    console.log(`Session Cookie: ${sessionCookie.value}`);
		throw redirect(302, "/");
	}
};
