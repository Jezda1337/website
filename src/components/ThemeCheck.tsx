export const ThemeCheck = () => {
  return (
    <script>{`
		document.documentElement.classList.add("overflow-x-hidden");
		if (localStorage.theme) {
			const theme = JSON.parse(localStorage.theme) || "light";

		if (theme === "dark") {
			document.documentElement.classList.add(
				"dark",
				"bg-slate-800",
				"text-white"
			);
		document.body?.classList.add("darkDots");
			} else if (typeof theme === "undefined") {
				if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add(
				"dark",
				"bg-slate-800",
				"text-white"
			);
				}
			}
		}`}</script>
  );
};
