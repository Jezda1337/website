import {
  component$,
  useClientEffect$,
  useContext,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { MobileMenuContext } from "~/routes/layout";
import Mouse from "../Mouse";
import ThemeSwitcher from "../ThemeSwitcher";

export default component$(() => {
  const state = useStore({
    isDisabled: false,
    theme: "light",
    isDark: false,
  });
  const currentPath = useLocation();

  const menuState: any = useContext(MobileMenuContext);

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
    <header class="px-3 md:px-28 lg:mx-auto lg:max-w-3xl lg:p-0">
      <nav class="flex w-full justify-between py-3">
        <div class="animate-fade-in-left">
          <Link
            aria-label="Link that will go on home page"
            class="flex items-center gap-2"
            href="/"
          >
            <p class="font-medium">Developer</p>
          </Link>
        </div>

        <div class="flex animate-fade-in-right gap-2 md:hidden">
          <ThemeSwitcher state={state} />

          <button
            class="rounded border px-4 py-1 md:hidden"
            aria-label="Button for toggle mobile menu"
            onClick$={() => (menuState.isOpen = !menuState.isOpen)}
          >
            menu
          </button>
        </div>

        <ul class="hidden animate-fade-in-right md:flex md:items-center">
          <li class="mr-5">
            <ThemeSwitcher state={state} />
          </li>
          <li class="mr-3">
            <Link
              class={`${
                currentPath.pathname === "/about/" ? "text-blue-500" : ""
              } md:hover:text-blue-500 `}
              href="/about"
            >
              about
            </Link>
          </li>
          <li class="mr-3">
            <Link
              class={`${
                currentPath.pathname === "/projects/" ? "text-blue-500" : ""
              } md:hover:text-blue-500`}
              href="/projects"
            >
              projects
            </Link>
          </li>
          {/* <li class="mr-3"> */}
          {/*   <Link */}
          {/*     title="under construction" */}
          {/*     class={`${ */}
          {/*       currentPath.pathname === "/blog/" ? "text-blue-500" : "" */}
          {/*     } md:hover:text-blue-500 `} */}
          {/*     href="/blog" */}
          {/*   > */}
          {/*     blog */}
          {/*   </Link> */}
          {/* </li> */}
          <li class="mr-5 md:hover:text-blue-500">
            <Mouse hash="contact">
              <Link href="/#contact">contact</Link>
            </Mouse>
          </li>
          <li class="grid place-items-center rounded border bg-black md:dark:bg-white md:dark:hover:bg-transparent">
            <a
              href="/resume.pdf"
              target="_blank"
              class="px-3 py-1 text-white hover:text-blue-500 md:dark:text-black md:dark:hover:text-white"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});
