import { component$ } from "@builder.io/qwik";
import Mouse from "./Mouse";

export default component$(() => {
  return (
    <section class="relative mt-12 min-h-screen md:min-h-[calc(100vh-60px)] lg:mt-28 lg:min-h-[calc(100vh-260px)] xl:min-h-[calc(100vh-200px)]">
      <h1 class="mb-9 animate-fade-in-down text-4xl font-medium md:text-[35px] md:leading-[1.15]">
        Hello! <span class="inline-block animate-waving-hand">👋🏻</span> I am
        Radoje, a frontend developer who loves creating beautiful and functional
        web solutions.
      </h1>
      <div>
        <p>
          Through working alongside talented designers and developers, I've
          developed a keen eye for detail and a commitment to maintaining clean
          and efficient code. Let's work together to bring your web application
          to life!
        </p>
        {/* <p class="mt-4 animate-fade-in-up"> */}
        {/*   As I've grown as a web developer, I've worked alongside senior */}
        {/*   designers and developers who have raised my standards for whats */}
        {/*   expected of any web application. */}
        {/* </p> */}
        {/* <p class="mt-4 block"> */}
        {/*   Throught these experiences. I've had the opportunity to create */}
        {/*   memorable products that are not only enjoyable to use, but are writen */}
        {/*   in code thats maintainable and ease to understand. */}
        {/* </p> */}
      </div>
      <div class="mt-6 flex animate-fade-in-front flex-col items-start gap-2 md:mt-12 md:flex-row md:gap-5">
        <a
          target="_blank"
          class="btn_linkedin w-40 rounded border border-white bg-black px-4 py-[10px] text-center text-white dark:bg-white dark:text-black hover:dark:bg-slate-800 hover:dark:text-white md:rounded md:border md:border-black md:transition-all md:hover:bg-white md:hover:text-black md:dark:border-white
					"
          href="https://www.linkedin.com/in/radoje-jezdic/"
        >
          View Linkedin
        </a>
        <a
          target="_blank"
          class="btn_gh w-40 rounded border bg-white px-4 py-[10px] text-center text-black dark:bg-slate-800 dark:text-white dark:hover:bg-white dark:hover:text-black md:transition-all md:hover:bg-black md:hover:text-white"
          href="https://github.com/Jezda1337"
        >
          View GitHub
        </a>
      </div>
      <div class="absolute bottom-5 left-1/2 hidden -translate-x-1/2 animate-bounce md:bottom-32 md:block">
        <Mouse classIcon="btn_hash" hash="projects">
          scroll
        </Mouse>
      </div>
    </section>
  );
});
