import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Project } from "../../interfaces/Project.interface";

export default component$(({ project }: { project: Project }) => {
  const { title, shortDescription, projectHeroImage, slug, type, unfinished } =
    project;
  return (
    <div class="flex flex-1 flex-col odd:animate-fade-in-left even:animate-fade-in-right">
      <div class="min-w-[300px] max-w-full rounded border">
        <div class="flex items-center justify-between gap-2 bg-slate-100 p-2">
          <div class="flex gap-1">
            <span class="h-3 w-3 rounded-xl bg-red-500"></span>
            <span class="h-3 w-3 rounded-xl bg-yellow-500"></span>
            <span class="h-3 w-3 rounded-xl bg-green-500"></span>
          </div>
          <div class="h-4 w-full max-w-sm rounded bg-slate-300"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              class="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div
          class={`border ${
            unfinished
              ? "relative overflow-hidden after:absolute after:top-0 after:-right-14 after:h-12 after:w-36 after:rotate-45 after:bg-red-500"
              : ""
          }`}
        >
          <img
            class="aspect-video max-h-full w-full max-w-full object-cover"
            src={projectHeroImage}
            alt="Project picture"
          />
        </div>
      </div>
      <div class="flex h-full flex-col">
        <h3 class="mt-4 text-xl">
          {title} - <span class="text-sm italic text-gray-500">{type}</span>
        </h3>
        <p class="my-4 h-full">{shortDescription}</p>
        <div class="mt-6">
          <Link
            href={`/projects/${slug}`}
            class="flex max-w-fit items-center rounded border px-4 py-1 dark:bg-slate-800 dark:hover:bg-white dark:hover:text-black md:transition-all md:hover:bg-black md:hover:text-white"
          >
            <span>View Project</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="ml-3 inline h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
});
