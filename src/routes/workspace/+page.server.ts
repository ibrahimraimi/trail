import type { Actions, PageServerLoad } from "./$types";

import { prisma } from "$lib/server/prisma";
import { fail } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	return {
		tasks: await prisma.task.findMany()
	};
};

export const actions: Actions = {
	createTask: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};

		try {
			await prisma.task.create({
				data: {
					title,
					content
				}
			});
		} catch (error) {
			console.error(error);
			return fail(500, { message: "Could not create the task" });
		}

		return {
			status: 201
		};
	}
};
