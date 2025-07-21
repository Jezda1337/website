/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			keyframes: {
				"blur-reveal": {
					"0%": {
						filter: "blur(8px)",
						opacity: "0",
						transform: "translateY(20px)",
					},
					"100%": {
						filter: "blur(0)",
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				"blur-reveal": "blur-reveal 1s cubic-bezier(.25,.1,.25,1) forwards",
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"animate-delay": (value) => ({
						animationDelay: value,
					}),
				},
				{ values: theme("transitionDelay") },
			)
		}),
	],
}
