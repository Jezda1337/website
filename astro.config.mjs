import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import flexoki from "./flexoki.json"

// https://astro.build/config
export default defineConfig({
	site: "https://radoje.dev",
	integrations: [tailwind(), sitemap()],
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: flexoki,
		},
	},
	build: {
		format: "file",
	},
})
