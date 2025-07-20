import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	site: "https://radoje.dev",
	integrations: [tailwind(), sitemap()],
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "gruvbox-dark-hard",
		},
	},
	build: {
		format: "file",
	},
})
