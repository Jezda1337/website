import { component$ } from "@builder.io/qwik";
import Mouse from "./Mouse";

export default component$(() => {
  return (
    <section class="mt-12 min-h-screen md:min-h-[calc(100vh-60px)] lg:min-h-[calc(100vh-260px)] xl:min-h-[calc(100vh-200px)] lg:mt-28">
      <h1 class="text-4xl md:text-5xl font-medium mb-9 md:leading-[1.15]">
        Hello! <span class="animate-waving-hand">👋🏻</span> I’m Radoje, a
        developer based in Serbia.
      </h1>
      <p class="mt-4">
        As I've grown as a web developer, I've worked alongside senior designers
        and developers who have raised my standards for whats expected of any
        web application.
        <span class="mt-4 block">
          Throught these experiences. I've had the opportunity to create
          memorable products that are not only enjoyable to use, but are writen
          in code thats maintainable and ease to understand.
        </span>
      </p>
      <div class="flex flex-col items-start gap-2 mt-6 md:flex-row md:gap-5 md:mt-12">
        <a
          target="_blank"
          class="btn_linkedin text-center px-4 py-[10px] bg-black text-white rounded w-40 md:border md:rounded md:hover:bg-white md:hover:text-black md:transition-all dark:text-black dark:bg-white hover:dark:text-white hover:dark:bg-slate-800 border border-white md:border-black md:dark:border-white
					"
          href="https://www.linkedin.com/in/radoje-jezdic/"
        >
          View Linkedin
        </a>
        <a
          target="_blank"
          class="btn_gh text-center px-4 py-[10px] text-black border rounded w-40 md:hover:bg-black md:transition-all md:hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black"
          href="https://github.com/Jezda1337"
        >
          View GitHub
        </a>
      </div>
      <div class="animate-bounce absolute bottom-5 md:bottom-32 left-1/2 -translate-x-1/2 hidden md:block">
        <Mouse classIcon="btn_hash" hash="projects">
          scroll
        </Mouse>
      </div>
    </section>
  );
});
