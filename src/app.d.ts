// See https://kit.svelte.dev/docs/types#app

import type { Telegram } from "@twa-dev/types";

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	interface Window {
		Telegram: Telegram;
	}
}
