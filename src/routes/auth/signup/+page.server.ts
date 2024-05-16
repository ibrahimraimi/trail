import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { auth } from "$lib/server/lucia";

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) {
		throw redirect(302, "/");
	}
};

export const actions: Actions = {
	default: async ({ request }) => {
		const { first_name, last_name, email, password } = Object.fromEntries(
			await request.formData()
		) as Record<string, string>;

		try {
			await auth.createUser({
				// @ts-ignore
				key: {
					providerId: "email",
					providerUserId: email,
					password
				},
				attributes: {
					first_name,
					last_name,
					email
				}
			});
		} catch (error) {
			console.error(error);
			return fail(400, { message: "Could not register user" });
		}

		throw redirect(302, "/login");
	}
};
