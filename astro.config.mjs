import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	experimental: {
		viewTransitions: true,
	},
	viewTransitions: {
		reload: true, // would probably need more explicit naming like reloadOnPageChange
		scroll: true
	}
})
