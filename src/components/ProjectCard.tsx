import { component$ } from "@builder.io/qwik";

interface Project {
  id: number;
  name: string;
  description: string;
  url?: string;
  picture: string;
}

interface Props {
  project: Project;
}

export default component$((project: Props) => {
  const { name, description, picture, url } = project.project;
  return (
    <div class="flex-1 odd:animate-fade-in-left even:animate-fade-in-right">
      <div class="border rounded max-w-full min-w-[300px]">
        <div class="bg-slate-100 p-2 flex items-center gap-2 justify-between">
          <div class="flex gap-1">
            <span class="w-3 h-3 rounded-xl bg-red-500"></span>
            <span class="w-3 h-3 rounded-xl bg-yellow-500"></span>
            <span class="w-3 h-3 rounded-xl bg-green-500"></span>
          </div>
          <div class="h-4 bg-slate-300 rounded w-full max-w-sm"></div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
        <div class="">
          <img
            class="object-cover max-w-full max-h-full aspect-video w-full"
            src={picture}
            alt="Project picture"
          />
        </div>
      </div>
      <h3 class="text-xl mt-4">{name}</h3>
      <p class="my-4">{description}</p>
      <div class="mt-6">
        <a
          href={`/projects/${url}`}
          class="px-4 py-1 border dark:bg-slate-800 rounded md:hover:bg-black md:hover:text-white md:transition-all dark:hover:bg-white dark:hover:text-black flex items-center max-w-fit"
        >
          <span>View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            class="w-4 h-4 inline ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
});
