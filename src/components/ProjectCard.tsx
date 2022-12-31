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
  const { id, name, description, picture } = project.project;
  return (
    <div class="flex-1">
      <div class="border rounded max-w-full min-w-[300px]">
        <div class="bg-slate-100 p-2 flex items-center gap-2 justify-between">
          <div class="flex gap-1">
            <span class="w-3 h-3 rounded-xl bg-red-500"></span>
            <span class="w-3 h-3 rounded-xl bg-yellow-500"></span>
            <span class="w-3 h-3 rounded-xl bg-green-500"></span>
          </div>
          <div class="h-4 bg-slate-300 rounded w-full max-w-sm"></div>
          <div>
            <img src="/icons/arrow_right.svg" alt="" />
          </div>
        </div>
        <div class="">
          <img src={picture} alt="" />
        </div>
      </div>
      <h3 class="text-xl">{name}</h3>
      <p class="my-4">{description}</p>
      <div class="mt-6">
        <a
          href={`/project/${id}`}
          class="px-4 py-1 border rounded md:hover:bg-black md:hover:text-white md:transition-all dark:hover:bg-white dark:hover:text-black
							"
        >
          View Project
        </a>
      </div>
    </div>
  );
});
