import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import ProjectCard from "~/components/ProjectCard";
import { Project } from "../../../interfaces/Project.interface";
import { Projects } from "../../../utils/projects_list";

export default component$(() => {
  const projects = Projects.filter((project: Project) => project.id >= 3);
  return (
    <section class="px-3 md:px-28 my-12 lg:p-0 lg:max-w-3xl lg:mx-auto lg:my-24">
      <h2 class="text-2xl animate-fade-in-left">
        Other projects that I'm working on
      </h2>
      <div class="flex w-full flex-wrap gap-5 justify-between mt-12 flex-col md:flex-row items-inherit">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
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
