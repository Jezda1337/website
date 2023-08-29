import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"

// import cloudflare from "@astrojs/cloudflare"

// https://astro.build/config
export default defineConfig({
	// trailingSlash: "never",
	site: "https://radoje.dev",
	integrations: [tailwind(), sitemap()],
	experimental: {
		viewTransitions: true,
	},
	markdown: {
		syntaxHighlight: "prism",
	},
	build: {
		format: "file",
	},
	// output: "server",
	// adapter: cloudflare(),
	// server: {
	// 	headers: {
	// 		"Cache-Control": "public, max-age=86400, immutable",
	// 	},
	// },
})
