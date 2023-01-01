import {
	component$,
	useClientEffect$,
	useStore,
	useTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import Mouse from "../Mouse";
import ThemeSwitcher from "../ThemeSwitcher";

export default component$(() => {
	const state = useStore({
		isDisabled: false,
		theme: "light",
		isDark: false,
	});
	const currentPath = useLocation();

	useTask$(({ track }) => {
		track(() => currentPath.pathname);
		state.isDisabled = currentPath.pathname !== "/" ? true : false;
	});

	useClientEffect$(() => {
		if (localStorage.theme) {
			const theme = JSON.parse(localStorage.theme) || "light";
			theme ? (state.theme = theme) : null;
			state.theme === "dark" ? (state.isDark = true) : (state.isDark = false);
		}
	});

	useClientEffect$(({ track }) => {
		track(() => currentPath.pathname);
	});

	return (
		<header class="px-3 md:px-28 lg:p-0 lg:max-w-3xl lg:mx-auto">
			<nav class="flex justify-between w-full py-3">
				<div class="animate-fade-in-left">
					<Link
						aria-label="Link that will go on home page"
						class="flex items-center gap-2"
						href="/"
					>
						{/* <div class="w-12"> */}
						{/*   <img */}
						{/*     src={`${ */}
						{/*       state.isDark */}
						{/*         ? "/icons/kitty-dark.png" */}
						{/*         : "/icons/kitty-light.png" */}
						{/*     }`} */}
						{/*     alt="" */}
						{/*   /> */}
						{/* </div> */}
						<p class="font-medium">Developer</p>
					</Link>
				</div>

				<div class="md:hidden flex gap-2 animate-fade-in-right">
					<ThemeSwitcher state={state} />

					<button
						class="md:hidden px-4 py-1 border rounded"
						aria-label="Button for toggle mobile menu"
					>
						menu
					</button>
				</div>

				<ul class="hidden md:flex md:items-center animate-fade-in-right">
					<li class="mr-5">
						<ThemeSwitcher state={state} />
					</li>
					<li class="mr-3">
						<Link
							class={`${currentPath.pathname === "/about/" ? "text-blue-500" : ""
								}`}
							href="/about"
						>
							about
						</Link>
					</li>
					<li class="mr-3">
						<Link
							class={`${currentPath.pathname === "/projects/" ? "text-blue-500" : ""
								}`}
							href="/projects"
						>
							projects
						</Link>
					</li>
					<li class="mr-3">
						<Link
							title="under construction"
							class={`${currentPath.pathname === "/blog/" ? "text-blue-500" : ""
								}`}
							href="/blog"
						>
							blog
						</Link>
					</li>
					<li>
						<Mouse
							disabled={state.isDisabled}
							hash="contact"
							classIcon="btn_hash"
						>
							contact
						</Mouse>
					</li>
				</ul>
			</nav>
		</header>
	);
});
