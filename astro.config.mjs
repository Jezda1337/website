import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
	site: "https://radoje.dev",
	integrations: [sitemap()],
	vite: { plugins: [tailwindcss()] },
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
