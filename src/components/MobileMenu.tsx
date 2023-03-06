import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { MobileMenuContext } from "~/routes/layout";
import Mouse from "./Mouse";

export default component$(() => {
  const state: any = useContext(MobileMenuContext);
  console.log(state.isOpen);
  return (
    <>
      <nav
        class={`z-10 absolute transition-all top-14 left-0 right-0 bottom-0 bg-white/60 dark:bg-slate-800/50 min-h-screen md:hidden ${
          state.isOpen ? "translate-x-0" : "max-w-full translate-x-full"
        }`}
      >
        <ul class="flex flex-col items-center gap-6 pt-14">
          <li class="text-xl" onClick$={() => (state.isOpen = !state.isOpen)}>
            <Link href="/about">about</Link>
          </li>
          <li class="text-xl" onClick$={() => (state.isOpen = !state.isOpen)}>
            <Link href="/projects">projects</Link>
          </li>
          <li class="text-xl" onClick$={() => (state.isOpen = !state.isOpen)}>
            <Link href="/blog">blog</Link>
          </li>
          <li class="text-xl" onClick$={() => (state.isOpen = !state.isOpen)}>
            <Mouse hash="contact">
              <Link href="/#contact">contact</Link>
            </Mouse>
          </li>
        </ul>
      </nav>
    </>
  );
});
