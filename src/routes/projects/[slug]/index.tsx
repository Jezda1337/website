import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import { Projects } from "../../../../utils/projects_list";
import { Project } from "../../../../interfaces/Project.interface";

export default component$(() => {
  const state = useStore<any>({
    title: "",
    type: "",
    techList: [],
    live: "",
    description: "",
    projectHeroImage: "",
    code: "",
  });
  const loc = useLocation();

  useTask$(() => {
    const d = Projects.find(
      ({ slug }: { slug: Project["slug"] }) => slug === loc.params.slug
    );

    state.title = d?.title;
    state.code = d?.code;
    state.live = d?.live;
    state.type = d?.type;
    state.description = d?.description;
    state.projectHeroImage = d?.projectHeroImage;
    state.techList = d?.techList;
  });

  return (
    <section class="px-3 md:mt-28 md:px-28 lg:p-0 lg:max-w-3xl lg:mx-auto animate-fade-in-left">
      <h1 class="text-4xl font-bold">{state.title}</h1>

      <p class="my-6">{state.description}</p>

      <table class="w-full mt-24 md:mt-28">
        <thead class="md:h-14">
          <tr class="text-left">
            <th class="align-top">Type</th>
            <th class="align-top">Stack</th>
            <th class="align-top">Live</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="align-top">{state.type}</td>
            <td class="align-top">
              {state.techList.map((tech: string) => (
                <p class="align-top">{tech}</p>
              ))}
            </td>
            <td class="align-top flex flex-col">
              <a
                href={state.live}
                target="_blank"
                class="text-blue-500 md:hover:text-orange-500"
              >
                View Site
              </a>
              <a
                href={state.code}
                target="_blank"
                class="text-blue-500 md:hover:text-orange-500"
              >
                View Code
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="flex-1 odd:animate-fade-in-left even:animate-fade-in-right flex flex-col my-24">
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
                stroke="black"
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
              src={state.projectHeroImage}
              alt="Project picture"
            />
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
