/** @type {import("prettier").Config} */

module.exports = {
	singleQuote: false,
	semi: false,
	useTabs: true,
	tabWidth: 2,
	arrowParens: "always",
	bracketSpacing: true,
	bracketSameLine: true,
	insertPragma: false,
	singleAttributePerLine: true,
	plugins: ["prettier-plugin-astro"],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
}
