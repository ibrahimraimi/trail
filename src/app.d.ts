import type { PrismaClient } from "@prisma/client";

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			validate: import("@lucia-auth/sveltekit").Validate;
			validateUser: import("@lucia-auth/sveltekit").ValidateUser;
			SetSession: import("@lucia-auth/sveltekit").SetSession;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	var prisma: PrismaClient;

	/// <reference types="lucia-auth">
	declare namespace Lucia {
		type Auth = import("$lib/server/lucia").Auth;
		type UserAttributes = {
			email: string;
			first_name: string;
			last_name: string;
		};
	}
}

export {};
