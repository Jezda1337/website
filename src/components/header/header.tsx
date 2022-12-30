import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import Mouse from "../Mouse";
import ThemeSwitcher from "../ThemeSwitcher";

export default component$(() => {
  const state = useStore({
    isDisabled: false,
    currentTheme: "dark",
  });
  const currentPath = useLocation();

  useTask$(({ track }) => {
    track(() => currentPath.pathname);
    state.isDisabled = currentPath.pathname !== "/" ? true : false;
  });

  return (
    <header class="px-3 md:px-28 mt-12 lg:p-0 lg:max-w-3xl lg:mx-auto lg:mt-24">
      <nav class="flex justify-between w-full py-3">
        <div>
          <Link href="/">
            <p class="font-medium">Developer</p>
          </Link>
        </div>

        <button class="md:hidden px-4 py-1 border rounded">menu</button>

        <ul class="hidden md:flex">
          <li class="mr-5">
            <ThemeSwitcher />
          </li>
          <li class="mr-3">
            <Link class="" href="/about">
              about
            </Link>
          </li>
          <li class="mr-3">
            <Link href="/projects">projects</Link>
          </li>
          <li class="mr-3">
            <Link href="/blog">blog</Link>
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
