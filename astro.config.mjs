import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	trailingSlash: "never",
	site: "https://radoje.dev/",
	integrations: [tailwind(), sitemap()],
	experimental: {
		viewTransitions: true,
	},
	markdown: {
		syntaxHighlight: "prism",
	},
	output: "server",
	adapter: cloudflare(),
})
