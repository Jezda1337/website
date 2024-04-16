import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	site: "https://radoje.dev",
	integrations: [tailwind(), sitemap()],
	markdown: {
		syntaxHighlight: "prism",
	},
	build: {
		format: "file",
	},
})
