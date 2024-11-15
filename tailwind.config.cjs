/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				"dm-mono": ["DM Mono", "Inter", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				"slide-right": {
					"0%": { transform: "translateX(0px)", opacity: 1 },
					"50%": { transform: "translateX(-20px)", opacity: 0 },
					"60%": { transform: "translateX(10px)", opacity: 0 },
					"100%": { transform: "translateX(0px)", opacity: 1 },
				},
				"slide-left": {
					"0%": { transform: "translateX(0px)", opacity: 1 },
					"50%": { transform: "translateX(20px)", opacity: 0 },
					"60%": { transform: "translateX(-10px)", opacity: 0 },
					"100%": { transform: "translateX(0px)", opacity: 1 },
				},
			},
			animation: {
				"slide-right": "slide-right .5s ease-in-out",
				"slide-left": "slide-left .5s ease-in-out",
			},
		},
	},
	plugins: [],
}
