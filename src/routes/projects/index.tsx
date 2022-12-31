import { component$ } from "@builder.io/qwik";
import ProjectCard from "~/components/ProjectCard";

interface Project {
  id: number;
  name: string;
  description: string;
  url: string;
  picture: string;
}

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
    <section class="px-3 md:px-28 mt-12 lg:p-0 lg:max-w-3xl lg:mx-auto lg:mt-24">
      <h2 class="text-2xl">Other projects that I'm working on</h2>

      <div class="flex w-full flex-wrap gap-5 justify-between mt-12 flex-col md:flex-row items-center">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
});