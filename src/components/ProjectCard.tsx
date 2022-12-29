import { component$ } from "@builder.io/qwik";

export default component$(() => {
  const projects = [
    {
      id: 1,
      name: "project 1",
      description: "lorem ipsum bla-bla",
      url: "",
      picture:
        "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    },
    {
      id: 2,
      name: "project 2",
      description: "lorem ipsum bla-bla",
      url: "",
      picture:
        "https://images.unsplash.com/photo-1503252947848-7338d3f92f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80",
    },
  ];

  return (
    <div class="flex w-full flex-wrap gap-5 justify-between mt-12 flex-col md:flex-row items-center">
      {projects.map((project: any) => (
        <div key={project.id} class="flex-1">
          <div class="border rounded max-w-[350px] min-w-[300px]">
            <div class="bg-slate-100 p-2 flex items-center gap-2 justify-between">
              <div class="flex gap-1">
                <span class="w-3 h-3 rounded-xl bg-red-500"></span>
                <span class="w-3 h-3 rounded-xl bg-yellow-500"></span>
                <span class="w-3 h-3 rounded-xl bg-green-500"></span>
              </div>
              <div class="h-4 bg-slate-300 rounded w-full max-w-sm"></div>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0677 11.9929L18.818 7.75739L17.4061 9.17398L19.2415 11.0032L0.932469 11.0012L0.932251 13.0012L19.2369 13.0032L17.4155 14.8308L18.8321 16.2426L23.0677 11.9929Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div class="">
              <img src={project.picture} alt="" />
            </div>
          </div>
          <h3 class="text-xl">{project.name}</h3>
          <p class="my-4">{project.description}</p>
          <div class="mt-6">
            <a
              href={project.url}
              class="px-4 py-1 border rounded md:hover:bg-black md:hover:text-white md:transition-all
							"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
