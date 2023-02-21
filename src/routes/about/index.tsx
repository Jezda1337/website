import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <section class="my-12 px-3 md:mx-auto md:my-32 md:max-w-3xl md:px-28 lg:px-0">
      <a
        target="_blank"
        rel="noreferrer"
        class="mb-4 inline-block cursor-pointer rounded bg-black px-6 py-2 text-white transition-all hover:bg-gray-900 hover:text-blue-500"
        href="/Radoje_Jezdic_Resume.pdf"
      >
        Resume
      </a>
      <div class="gap-2">
        <div>
          <div class="mx-auto mb-6 flex animate-fade-in-right items-center justify-center  overflow-hidden rounded-md md:float-right md:ml-2 md:mb-2 md:max-w-xs">
            <img
              width={320}
              height="auto"
              src="/me_myself_and_I.webp"
              alt="Radoje's picture"
            />
          </div>
          <div class="animate-fade-in-left">
            <div class="mb-12">
              <h2 class="text-2xl">Radoje is a creative Developer.</h2>
              <h3 class="text-base">
                Hi 👋 I make awesome thinks fror awesome people.
              </h3>
            </div>
            <p class="clear-left">
              I am an extremely{" "}
              <mark class="bg-blue-500 px-1 text-white">curious</mark> and{" "}
              <mark class="bg-blue-500 px-1 text-white">self-motivated</mark>{" "}
              individual with a huge{" "}
              <mark class="bg-blue-500 px-1 text-white">passion</mark> for
              coding in general. As an autodidact, I take a very positive and{" "}
              <mark class="bg-blue-500 px-1 text-white">
                {" "}
                ego-free approach
              </mark>{" "}
              to all aspects of my life, and I carry a strong work ethic with me
              wherever I go.
            </p>
            <span class="font-medium">Stay awesome.</span>
          </div>
          <div class="my-4 animate-fade-in-left">
            <h2 class="text-2xl">The tools I use to build stuff</h2>
            <h3 class="text-slate-500">
              All tools are used by thousands of industry professionals
            </h3>
            <ul class="my-6 flex gap-2">
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/nextjs_dark.svg"
                  alt="NextJS logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/react_dark.svg"
                  alt="ReactJS logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/angular_dark.svg"
                  alt="ReactJS logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/ts.svg"
                  alt="Typescript logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/rxjs_dark.svg"
                  alt="RxJS logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/tailwindcss_dark.svg"
                  alt="Tailwindcss logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/sass.svg"
                  alt="Sass logo"
                />
              </li>
            </ul>

            {/* <h2 class="text-xl py-4">Other tools that I using when coding</h2> */}
            <h2 class="py-4 text-xl">Other tools I enjoy using</h2>
            <ul class="flex gap-2">
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/git.svg"
                  alt="Git logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/figma_dark.svg"
                  alt="Figma logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/postgresql_dark.svg"
                  alt="PostgreSQL logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/nodejs_dark.svg"
                  alt="NodeJS logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/go.svg"
                  alt="GoLang logo"
                />
              </li>

              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/docker.svg"
                  alt="Docker logo"
                />
              </li>
              <li class="md:transition-all md:hover:scale-75">
                <img
                  width={48}
                  height={48}
                  src="/icons/neovim.svg"
                  alt="Neovim logo"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Developer",
  meta: [
    {
      name: "description",
      content: "Personal website for developer. Portfolio.",
    },
  ],
};
