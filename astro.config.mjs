import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "never",
  site: "https://radoje.dev/",
  integrations: [tailwind(), sitemap()],
  experimental: {
    viewTransitions: true
  },
  markdown: {
    // Example: Switch to use prism for syntax highlighting in Markdown
    syntaxHighlight: "prism"
  },
  output: "hybrid",
  // adapter: cloudflare()
});
